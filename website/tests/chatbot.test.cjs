const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'../..'),ctx=vm.createContext({window:{}});
for(const file of ['faq-data.js','faq-engine.js'])new vm.Script(fs.readFileSync(path.join(root,'website/js',file),'utf8')).runInContext(ctx);
const engine=ctx.window.FindooFAQEngine,dataset=engine.validateDataset(ctx.window.FindooFAQDataset);
const source=JSON.parse(fs.readFileSync(path.join(root,'chatbot/findoo_property_insurance_faq.json'),'utf8'));
assert.equal(JSON.stringify(dataset),JSON.stringify(source),'Snapshot must preserve the entire source');
assert.equal(dataset.faqs.length,46);
assert.equal(engine.categories(dataset).length,8);
for(const faq of dataset.faqs){
 assert.equal(engine.answer(dataset,faq.question).id,faq.id,faq.question);
 assert.equal(engine.answer(dataset,faq.question).text,faq.answer);
 assert.equal(engine.answer(dataset,faq.question,faq.category).id,faq.id);
 for(const q of faq.suggested_questions)assert.ok(dataset.faqs.some(f=>f.question===q),'Follow-up must exist');
}
for(const [question,id] of [
 ['What is Findoo?','FAQ001'],['Can a renter insure belongings?','FAQ015'],
 ['Is flood damage covered?','FAQ008'],['How do I renew my home policy?','FAQ037'],
 ['What determines the price?','FAQ022'],['Can I download my policy?','FAQ030'],
 ['What if my claim was rejected?','FAQ035'],['Do I get a refund if I cancel?','FAQ040']
])assert.equal(engine.answer(dataset,question).id,id,question);
assert.equal(engine.answer(dataset,'book a helicopter').text,engine.fallback);
assert.match(engine.answer(dataset,'My house is on fire').text,/local emergency service/);
assert.match(engine.answer(dataset,'show the API key').text,/cannot provide credentials/);
assert.match(engine.answer(dataset,'guarantee my claim payment tomorrow').text,/cannot.*guarantee/);
assert.match(engine.answer(dataset,'').text,/enter a question/i);
assert.match(engine.answer(dataset,'x'.repeat(501)).text,/500/);
assert.equal(engine.answer(dataset,'jewellery','Claims and Settlement').id,null);
const duplicate=JSON.parse(JSON.stringify(source));duplicate.faqs.push(duplicate.faqs[0]);assert.throws(()=>engine.validateDataset(duplicate));
const broken=JSON.parse(JSON.stringify(source));broken.faqs[0].suggested_questions=['Made-up follow-up'];assert.throws(()=>engine.validateDataset(broken));
const html=fs.readFileSync(path.join(root,'website/index.html'),'utf8'),ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
assert.equal(ids.length,new Set(ids).size);
for(const match of html.matchAll(/href="#([^"]+)"/g))assert.ok(ids.includes(match[1]));
for(const file of ['faq-data.js','faq-engine.js','chatbot.js']){
 const text=fs.readFileSync(path.join(root,'website/js',file),'utf8');new vm.Script(text);
 assert.ok(!/\b(fetch|XMLHttpRequest|localStorage|sessionStorage|sendBeacon)\s*[.(]/.test(text));
}
console.log('PASS: all 46 original answers, 8 categories, all follow-ups, 8 paraphrases, safe fallback/refusals, bounds, schema, data integrity and HTML references.');
