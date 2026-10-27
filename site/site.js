document.getElementById('year').textContent=new Date().getFullYear();
const form=document.getElementById('beta-form'),review=document.getElementById('application-review'),summary=document.getElementById('application-summary');
form.addEventListener('submit',event=>{
 event.preventDefault();for(const input of form.querySelectorAll('input,textarea'))input.value=input.value.trim();if(!form.reportValidity())return;
 const data=new FormData(form),company=String(data.get('company')),email=String(data.get('email')),useCase=String(data.get('useCase'));
 summary.replaceChildren();for(const [label,value] of [['Company',company],['Work email',email],['Use case',useCase]]){const row=document.createElement('div'),dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=label;dd.textContent=value;row.append(dt,dd);summary.append(row);}
 const body=`Company: ${company}\nWork email: ${email}\n\nWe would like to request the e-server Cloud company beta, with two weeks of free AI credits, three beta models and a tailored agent harness.\n\nUse case:\n${useCase}`;
 document.getElementById('send-request').href='mailto:contact@easter.company?subject='+encodeURIComponent('e-server Cloud beta — '+company)+'&body='+encodeURIComponent(body);
 form.hidden=true;review.hidden=false;review.focus();
});
document.getElementById('edit-application').addEventListener('click',()=>{review.hidden=true;form.hidden=false;document.getElementById('company-name').focus();});
const tabs=[...document.querySelectorAll('[role="tab"]')];
function selectTab(tab){for(const item of tabs){const selected=item===tab;item.setAttribute('aria-selected',String(selected));item.tabIndex=selected?0:-1;document.getElementById(item.getAttribute('aria-controls')).hidden=!selected;}}
for(const [index,tab] of tabs.entries()){tab.addEventListener('click',()=>selectTab(tab));tab.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(index+1)%tabs.length;else if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=tabs.length-1;else return;event.preventDefault();selectTab(tabs[next]);tabs[next].focus();});}
