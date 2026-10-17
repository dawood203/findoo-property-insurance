---
name: material-design-3
description: >
  Apply Google Material Design 3 principles, components,
  responsive layouts, accessibility standards, and design
  tokens to the Findoo Property Insurance application.
  Use this skill during UI design, component specification,
  design reviews, and UI validation.
---

# Google Material Design 3 Skill

## 1. Purpose

Establish Google Material Design 3 (M3) as the primary
design system for the Findoo Property Insurance application.

The UI Design Agent must use this skill to create consistent,
accessible, responsive, and reusable user interfaces.

## 2. Project Information

Project: Findoo Property Insurance

Application Type: Responsive Web Application

Design System: Google Material Design 3

Design Tool: Figma

Frontend: React + TypeScript

Component Library: MUI, customized for M3 where necessary

Accessibility: WCAG 2.2 AA

Official Reference:
https://m3.material.io/

## 3. Design Foundations

### 3.1 Color System

Use Material Design 3 semantic color roles.

Required roles:

- Primary
- On Primary
- Primary Container
- On Primary Container
- Secondary
- On Secondary
- Secondary Container
- Tertiary
- Surface
- On Surface
- Surface Variant
- On Surface Variant
- Outline
- Outline Variant
- Error
- On Error
- Error Container

Requirements:

1. Use semantic color tokens.
2. Maintain consistent Findoo branding.
3. Ensure accessible color contrast.
4. Support light and dark themes where required.
5. Never use color alone to communicate information.

Do not invent final brand colors unless approved
by the user or project requirements.

### 3.2 Typography

Follow Material Design 3 typography roles:

Display:
- Large
- Medium
- Small

Headline:
- Large
- Medium
- Small

Title:
- Large
- Medium
- Small

Body:
- Large
- Medium
- Small

Label:
- Large
- Medium
- Small

Requirements:

- Maintain a clear visual hierarchy.
- Use consistent typography tokens.
- Ensure readable form labels.
- Support text resizing.
- Avoid unnecessary font variations.

### 3.3 Spacing

Use a consistent spacing token system.

Recommended spacing values:

- 4px
- 8px
- 12px
- 16px
- 24px
- 32px
- 48px
- 64px

These are Findoo project spacing recommendations,
not a mandatory universal M3 spacing scale.

### 3.4 Shape and Elevation

Use Material Design 3 shape and elevation principles.

Requirements:

- Apply consistent corner radius tokens.
- Use elevation to establish visual hierarchy.
- Avoid unnecessary shadows.
- Maintain consistency across components.

## 4. Material Components

Prefer appropriate Material Design 3 components.

### Actions

- Buttons
- Icon Buttons
- Floating Action Buttons, when appropriate

### Inputs

- Text Fields
- Radio Buttons
- Checkboxes
- Switches
- Sliders
- Selection Menus

### Navigation

- Navigation Bar
- Navigation Rail
- Navigation Drawer
- Tabs

### Containment

- Cards
- Dialogs
- Sheets
- Lists

### Feedback

- Progress Indicators
- Snackbars
- Supporting Text
- Error Messages

Component selection must consider user needs,
interaction context, accessibility, and platform.

Do not use components merely because they exist
in the design system.

## 5. Property Insurance UI Patterns

Create reusable Findoo-specific UI patterns.

### 5.1 Property Information

Potential components:

- Property Address Form
- Property Type Selection
- Construction Details
- Property Characteristics
- Ownership Information

### 5.2 Coverage Selection

Potential components:

- Coverage Selection Cards
- Deductible Selection
- Coverage Information
- Optional Coverage Selection

### 5.3 Quote and Premium

Potential components:

- Premium Summary
- Quote Comparison
- Coverage Breakdown
- Price Information

### 5.4 Policy Review

Potential components:

- Policy Summary
- Applicant Details
- Coverage Review
- Edit Information Actions

### 5.5 Confirmation

Potential components:

- Confirmation Summary
- Policy Reference
- Next Steps
- Document Actions

Important:

These are reusable design pattern candidates.

Only generate actual screens and fields when
supported by the approved BRD and requirements.

## 6. Responsive Design

Design for:

- Desktop
- Tablet
- Mobile

Follow Material Design 3 adaptive layout principles.

Requirements:

1. Use responsive layout containers.
2. Adapt navigation to available screen width.
3. Avoid horizontal scrolling for standard forms.
4. Maintain readable content hierarchy.
5. Ensure accessible touch targets.
6. Test common viewport sizes.

Do not assume fixed breakpoints without considering
content requirements and the implementation framework.

## 7. Accessibility Requirements

Target WCAG 2.2 Level AA.

Required checks:

- Text contrast of at least 4.5:1 for normal text.
- Text contrast of at least 3:1 for large text.
- Appropriate non-text contrast.
- Visible keyboard focus.
- Keyboard-operable interactions.
- Programmatic form labels.
- Accessible error identification.
- Clear validation messages.
- Appropriate target sizes.
- Responsive text resizing.
- Logical reading and focus order.

Accessibility must be validated, not merely assumed
from the use of Material components.

## 8. Insurance Form Design Guidelines

When designing insurance forms:

1. Group related fields logically.
2. Use clear and understandable labels.
3. Identify required fields.
4. Provide helpful supporting text.
5. Use appropriate input controls.
6. Validate user input.
7. Display actionable error messages.
8. Preserve user-entered information.
9. Avoid unnecessary data collection.
10. Provide clear next and previous actions.

For multi-step flows:

- Communicate progress.
- Maintain navigation consistency.
- Preserve entered information.
- Allow users to review information.
- Prevent accidental loss of data.

## 9. UI Design Agent Integration

Agent:
agents/ui-design-agent.md

Required supporting skills:

- material-design-3
- ui-specification
- accessibility-review

The UI Design Agent must:

1. Read approved BRD requirements.
2. Review approved user flows.
3. Identify required UI screens.
4. Select suitable M3 components.
5. Apply Findoo design tokens.
6. Create responsive UI specifications.
7. Document interactions and states.
8. Validate accessibility.
9. Check requirements traceability.
10. Submit outputs for review.

## 10. Design System Quality Gate

Before completing UI Design, verify:

- [ ] Approved requirements are covered.
- [ ] M3 components are used appropriately.
- [ ] Design tokens are consistent.
- [ ] Typography hierarchy is correct.
- [ ] Spacing is consistent.
- [ ] Responsive behavior is documented.
- [ ] Keyboard interactions are supported.
- [ ] Accessibility requirements are checked.
- [ ] Form validation is documented.
- [ ] Loading, empty, error, and success states
      are documented where applicable.
- [ ] Insurance terminology matches the BRD.
- [ ] Components are reusable.
- [ ] No unsupported business requirements
      have been introduced.

If a critical check fails, return the design
for iteration.

## 11. Expected Outputs

Generate the following where applicable:

1. UI Screen Inventory
2. Material Component Mapping
3. Design Token Specifications
4. Responsive Layout Specifications
5. Component State Documentation
6. Accessibility Review Checklist
7. UI Design Review Report
8. Requirements Traceability Mapping

Store approved artifacts in the project's
existing output directories.

Do not overwrite existing deliverables
without explicit authorization.

## 12. Human Approval

AI-generated designs are proposals.

The UI Design Agent must not claim that:

- Usability testing has been completed
  without actual test evidence.
- Accessibility has been fully certified.
- Stakeholders have approved a design
  without recorded approval.
- Figma files have been created unless
  the relevant integration actually created them.

Human review remains mandatory at the
configured approval gates.

## 13. References

Google Material Design 3:
https://m3.material.io/

Material Design Components:
https://m3.material.io/components

Material Design Foundations:
https://m3.material.io/foundations

Material UI:
https://mui.com/material-ui/

WCAG 2.2:
https://www.w3.org/TR/WCAG22/
