import importlib.util
import tempfile
import unittest
from pathlib import Path


MODULE_PATH = Path(__file__).resolve().parents[1] / "orchestration" / "workflow_controller.py"
SPEC = importlib.util.spec_from_file_location("workflow_controller", MODULE_PATH)
controller = importlib.util.module_from_spec(SPEC)
assert SPEC and SPEC.loader
SPEC.loader.exec_module(controller)


class WorkflowControllerApprovalTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.root = Path(self.temp.name)
        self.state = controller.initial_state()
        self._create_research_evidence()

    def tearDown(self):
        self.temp.cleanup()

    def _write(self, name, content):
        path = self.root / name
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(content, encoding="utf-8")
        return path

    def _create_research_evidence(self):
        self._write("input/brd/property-insurance-brd.md", "# BRD\n")
        self._write("outputs/research/property-insurance-brd-analysis.md", "# Analysis\nDocumented fact.\n")
        rows = "\n".join(f"| BRD-{n:03d} | evidence |" for n in range(1, 32))
        self._write("outputs/research/requirements-traceability-matrix.md", rows)
        self._write("outputs/research/workflow-status.md", "# Status\n")

    def _ready_research(self):
        result = controller.evaluate_gate(self.root, self.state, "research")
        self.assertEqual("READY_FOR_REVIEW", result["status"])
        return result["version"]

    def test_failed_gate_cannot_advance(self):
        (self.root / "outputs/research/property-insurance-brd-analysis.md").unlink()
        result = controller.evaluate_gate(self.root, self.state, "research")
        self.assertEqual("BLOCKED", result["status"])
        with self.assertRaisesRegex(controller.ControllerError, "gate has not passed"):
            controller.apply_approval(self.root, self.state, "research", "anything", "User", "APPROVE", "")
        self.assertEqual("research", self.state["current_phase"])

    def test_missing_approval_cannot_advance(self):
        self._ready_research()
        self.assertEqual("research", self.state["current_phase"])
        self.assertEqual("READY_FOR_REVIEW", self.state["phases"]["research"]["status"])

    def test_approval_for_another_phase_cannot_advance(self):
        version = self._ready_research()
        with self.assertRaisesRegex(controller.ControllerError, "phase mismatch"):
            controller.apply_approval(self.root, self.state, "define", version, "User", "APPROVE", "")
        self.assertEqual("research", self.state["current_phase"])

    def test_stale_approval_cannot_advance_changed_deliverables(self):
        version = self._ready_research()
        self._write("outputs/research/property-insurance-brd-analysis.md", "# Changed analysis\n")
        with self.assertRaisesRegex(controller.ControllerError, "changed after evaluation"):
            controller.apply_approval(self.root, self.state, "research", version, "User", "APPROVE", "")
        self.assertEqual("research", self.state["current_phase"])

    def test_valid_approval_cannot_skip_a_phase(self):
        version = self._ready_research()
        with self.assertRaisesRegex(controller.ControllerError, "phase mismatch"):
            controller.apply_approval(self.root, self.state, "information-architecture", version, "User", "APPROVE", "")
        self.assertEqual("research", self.state["current_phase"])

    def test_valid_approval_advances_only_correct_phase(self):
        version = self._ready_research()
        result = controller.apply_approval(self.root, self.state, "research", version, "User", "APPROVE", "OK")
        self.assertEqual("ADVANCED", result["action"])
        self.assertEqual("define", self.state["current_phase"])
        self.assertEqual("APPROVED", self.state["phases"]["research"]["status"])
        self.assertEqual("NOT_STARTED", self.state["phases"]["information-architecture"]["status"])

    def test_request_changes_preserves_history_and_does_not_advance(self):
        version = self._ready_research()
        result = controller.apply_approval(self.root, self.state, "research", version, "User", "REQUEST_CHANGES", "Clarify gaps")
        self.assertEqual("STOP_FOR_CHANGES", result["action"])
        self.assertEqual("CHANGES_REQUESTED", self.state["phases"]["research"]["status"])
        self.assertEqual("research", self.state["current_phase"])
        self.assertEqual("REQUEST_CHANGES", self.state["approvals"][-1]["decision"])

