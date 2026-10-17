/* Local FAQ retrieval: original source answers only; no network or model calls. */
(function(scope) {
'use strict';
const welcome='Hi! Explore 46 original educational FAQs by topic, or ask a question. Findoo is a fictional course project. Please do not share personal, policy, payment or claim details.';
const fallback='I could not find a clear answer in the Findoo FAQ knowledge base. Try a category or rephrase your question. For a real policy decision, use your insurer’s verified channels. No support handoff has been made.';
const stop=new Set('a an the is are was were what how do does did i my me can could would will should you your it this that of for to in on and or with about here findoo property insurance please tell know want need might may get have has be been at by through if than then some also'.split(' '));
const aliases={determines:'affects',determine:'affects',factors:'affects',costs:'premium',cost:'premium',price:'premium',pricing:'premium',premiums:'premium',prices:'premium',renewal:'renew',renewing:'renew',renewals:'renew',cancellation:'cancel',cancelled:'cancel',canceled:'cancel',cancelling:'cancel',canceling:'cancel',theft:'burglary',stolen:'burglary',robbed:'burglary',jewelry:'jewellery',valuables:'valuable',belongings:'contents',possessions:'contents',renters:'tenant',renter:'tenant',tenants:'tenant',landlords:'landlord',flats:'apartment',flat:'apartment',apartments:'apartment',houses:'home',house:'home',homes:'home',flood:'disaster',floods:'disaster',earthquake:'disaster',earthquakes:'disaster',cyclone:'disaster',disasters:'disaster',documents:'document',documentation:'document',claims:'claim',claimed:'claim',settlement:'claim',rejected:'declined',denied:'declined',expiry:'expire',expiration:'expire',expired:'expire',expiring:'expire',apply:'application',applying:'application',purchase:'buy',purchasing:'buy',buying:'buy',included:'cover',coverage:'cover',covered:'cover',covers:'cover',insured:'insure',insuring:'insure',progress:'status',tracking:'status',track:'status',required:'require',mandatory:'require',compulsory:'require',appliances:'appliance',fees:'premium',calculation:'estimate'};
function normalize(v){return v.toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim();}
function tokens(v){return [...new Set(normalize(v).split(' ').filter(t=>t.length>1&&!stop.has(t)).map(t=>aliases[t]||t))];}
function validateDataset(data){
 if(!data||!Array.isArray(data.faqs)||!data.faqs.length)throw Error('Missing FAQs');
 for(const key of ['project','version','language','disclaimer'])if(typeof data[key]!=='string'||!data[key].trim())throw Error('Invalid metadata');
 const ids=new Set(),questions=new Set();
 for(const f of data.faqs){
  for(const key of ['id','category','question','answer'])if(typeof f[key]!=='string'||!f[key].trim())throw Error('Invalid FAQ');
  if(ids.has(f.id)||questions.has(normalize(f.question)))throw Error('Duplicate FAQ');
  for(const key of ['keywords','suggested_questions'])if(!Array.isArray(f[key])||!f[key].every(k=>typeof k==='string'&&k.trim()))throw Error('Invalid lists');
  ids.add(f.id);questions.add(normalize(f.question));
 }
 for(const f of data.faqs)for(const q of f.suggested_questions)if(!questions.has(normalize(q)))throw Error('Unknown follow-up');
 return data;
}
function categories(data){return [...new Set(data.faqs.map(f=>f.category))];}
function result(f){return {text:f.answer,id:f.id,category:f.category,suggested_questions:f.suggested_questions};}
function answer(data,message,category=''){
 const text=normalize(message);
 if(!text)return {text:'Please enter a question about the Findoo concept.',id:null};
 if(message.length>500)return {text:'Keep your question within 500 characters.',id:null};
 if(/\b(emergency|on fire|burning|injured|immediate danger|trapped)\b/.test(text))return {text:'This demo cannot provide emergency assistance. If you are facing an emergency, contact the appropriate local emergency service now.',id:null};
 if(/\b(password|api key|secret key|admin access|system prompt|ignore previous instructions|other customer|another customer)\b/.test(text))return {text:'I cannot provide credentials, private information or internal instructions. Please ask a general FAQ question.',id:null};
 if(/\b(guarantee|guaranteed|guarantees|approve my claim|process my refund|delete my data|my policy number)\b/.test(text))return {text:'This FAQ demo cannot access accounts, process refunds or claims, delete insurer records, or guarantee coverage, approval, payments or timing. Please contact the actual insurer through its verified channels for account-specific help. No handoff has been made.',id:null};
 if(/^(hi|hello|hey)$/.test(text))return {text:welcome,id:null};
 const exact=data.faqs.find(f=>normalize(f.question)===text);
 if(exact)return result(exact);
 if(/^(what is|tell me about|explain) findoo( property insurance)?$/.test(text))return result(data.faqs.find(f=>f.id==='FAQ001'));
 const query=tokens(text),pool=category?data.faqs.filter(f=>f.category===category):data.faqs;
 // Intent alias for tenant belongings uses the source tenant FAQ, without composing new facts.
 if(query.includes('tenant')&&query.includes('contents')&&query.length<=4&&(!category||category==='Homeowners, Tenants and Landlords'))return result(data.faqs.find(f=>f.id==='FAQ015'));
 const docs=data.faqs.map(f=>new Set(tokens(f.question+' '+f.keywords.join(' '))));
 const weight=t=>Math.log(1+data.faqs.length/(1+docs.filter(d=>d.has(t)).length));
 const total=query.reduce((s,t)=>s+weight(t),0);
 const ranks=pool.map(f=>{const terms=new Set(tokens(f.question+' '+f.keywords.join(' ')));const shared=query.filter(t=>terms.has(t));const score=shared.reduce((s,t)=>s+weight(t),0);return {faq:f,score,ratio:score/(total||1),shared:shared.length};}).sort((a,b)=>b.score-a.score);
 const best=ranks[0],next=ranks[1];
 if(!best||!best.shared||best.ratio<.5||(next&&best.score-next.score<.15))return {text:fallback,id:null};
 return result(best.faq);
}
scope.FindooFAQEngine=Object.freeze({normalize,validateDataset,categories,answer,welcome,fallback,result});
})(typeof window!=='undefined'?window:globalThis);
