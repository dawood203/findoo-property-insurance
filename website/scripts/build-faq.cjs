// Refresh the browser snapshot without changing the source FAQ JSON.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '../..');
const source = fs.readFileSync(path.join(root, 'chatbot/findoo_property_insurance_faq.json'), 'utf8');
const data = JSON.parse(source);
const context = vm.createContext({ window: {} });
new vm.Script(fs.readFileSync(path.join(root, 'website/js/faq-engine.js'), 'utf8')).runInContext(context);
context.window.FindooFAQEngine.validateDataset(data);
const output = '// Generated from chatbot/findoo_property_insurance_faq.json. Regenerate after source edits.\n' +
  '// Static script snapshot supports direct file:// use without a fetch request.\n' +
  'window.FindooFAQDataset = ' + JSON.stringify(data, null, 2) + ';\n';
fs.writeFileSync(path.join(root, 'website/js/faq-data.js'), output);
console.log('Refreshed browser snapshot: ' + data.faqs.length + ' FAQs.');
