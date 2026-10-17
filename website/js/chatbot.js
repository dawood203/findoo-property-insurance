(function () {
'use strict';
const launcher=document.getElementById('chat-launcher'),panel=document.getElementById('findoo-chat'),history=document.getElementById('chat-history'),input=document.getElementById('chat-input'),error=document.getElementById('chat-error'),engine=window.FindooFAQEngine;
const categorySelect=document.getElementById('chat-category'),browse=document.getElementById('chat-question-list'),suggestions=document.getElementById('chat-suggestions');
let data,turns=0;
function addMessage(author,text,response){
 const item=document.createElement('div');item.className='chat-message'+(author==='You'?' user':'');
 const name=document.createElement('strong');name.textContent=author;
 const body=document.createElement('p');body.textContent=text;item.append(name,body);
 if(response&&response.id){const reference=document.createElement('span');reference.className='chat-reference';reference.textContent=response.id+' · '+response.category+' · Educational example';item.append(reference);}
 history.append(item);history.scrollTop=history.scrollHeight;
}
function closeChat(restore=true){panel.hidden=true;launcher.setAttribute('aria-expanded','false');if(restore)launcher.focus();}
function suggestionList(questions){
 suggestions.replaceChildren();
 for(const question of [...new Set(questions)].slice(0,4)){
  if(!data.faqs.some(f=>f.question===question))continue;
  const button=document.createElement('button');button.type='button';button.textContent=question;button.addEventListener('click',()=>submit(question));suggestions.append(button);
 }
}
function renderBrowse(){
 browse.replaceChildren();
 const faqs=data.faqs.filter(f=>!categorySelect.value||f.category===categorySelect.value);
 document.getElementById('chat-browse-label').textContent='Browse '+faqs.length+' questions';
 for(const faq of faqs){const button=document.createElement('button');button.type='button';button.textContent=faq.question;button.addEventListener('click',()=>{document.getElementById('chat-browse').open=false;submit(faq.question);});browse.append(button);}
 suggestionList(faqs.slice(0,3).map(f=>f.question));
 document.getElementById('chat-topic-status').textContent=categorySelect.value?faqs.length+' questions in '+categorySelect.value:'46 questions across '+engine.categories(data).length+' topics';
}
function reset(){history.replaceChildren();turns=0;error.textContent='';input.value='';input.removeAttribute('aria-invalid');if(data){categorySelect.value='';renderBrowse();addMessage('Findoo',engine.welcome);}}
try{data=engine.validateDataset(window.FindooFAQDataset);}catch(_){data=null;}
launcher.hidden=false;
if(data){
 document.getElementById('chat-knowledge-note').textContent=data.disclaimer;
 for(const category of engine.categories(data)){const option=document.createElement('option');option.value=category;option.textContent=category;categorySelect.append(option);}
 categorySelect.addEventListener('change',renderBrowse);renderBrowse();
}
launcher.addEventListener('click',()=>{
 if(!panel.hidden){closeChat();return;}
 panel.hidden=false;launcher.setAttribute('aria-expanded','true');
 if(!history.childElementCount){if(data)reset();else addMessage('Findoo','The local FAQ data could not be loaded. Please use the FAQ section on this page.');}
 input.disabled=!data;document.getElementById('chat-send').disabled=!data;categorySelect.disabled=!data;
 if(data)input.focus();else document.getElementById('chat-close').focus();
});
document.getElementById('chat-close').addEventListener('click',()=>closeChat());
panel.addEventListener('keydown',event=>{if(event.key==='Escape'){event.stopPropagation();closeChat();}});
document.getElementById('chat-clear').addEventListener('click',()=>{reset();if(data)input.focus();});
function submit(message){
 if(!data)return;
 if(!message.trim()||message.length>500){error.textContent='Enter a question between 1 and 500 characters.';input.setAttribute('aria-invalid','true');input.focus();return;}
 if(turns>=30){error.textContent='This demo keeps up to 30 questions in memory. Clear chat to start again.';return;}
 input.removeAttribute('aria-invalid');error.textContent='';addMessage('You',message.trim());
 const response=engine.answer(data,message.trim(),categorySelect.value);addMessage('Findoo',response.text,response);
 suggestionList(response.suggested_questions||data.faqs.filter(f=>!categorySelect.value||f.category===categorySelect.value).slice(0,3).map(f=>f.question));
 turns++;input.value='';input.focus();
}
document.getElementById('chat-form').addEventListener('submit',event=>{event.preventDefault();submit(input.value);});
})();
