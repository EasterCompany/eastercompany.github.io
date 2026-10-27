document.getElementById('year').textContent=new Date().getFullYear();
const form=document.getElementById('beta-form');
const review=document.getElementById('application-review');
const summary=document.getElementById('application-summary');
let application=null;
form.addEventListener('submit',event=>{
 event.preventDefault();
 for(const id of ['company-name','contact-name','work-email','use-case']){const input=document.getElementById(id);input.value=input.value.trim();}
 if(!form.reportValidity())return;
 const data=new FormData(form);
 application={company:String(data.get('company')).trim(),contact:String(data.get('contact')).trim(),email:String(data.get('email')).trim(),teamSize:String(data.get('size')),interest:String(data.get('interest')),useCase:String(data.get('useCase')).trim()};
 const labels={company:'Company',contact:'Contact',email:'Work email',teamSize:'Team size',interest:'Primary interest',useCase:'Your use case'};
 summary.replaceChildren();
 for(const [key,label] of Object.entries(labels)){const row=document.createElement('div');const dt=document.createElement('dt');const dd=document.createElement('dd');dt.textContent=label;dd.textContent=application[key];row.append(dt,dd);summary.append(row);}
 form.hidden=true;review.hidden=false;document.getElementById('download-status').textContent='';review.focus();
});
document.getElementById('edit-application').addEventListener('click',()=>{review.hidden=true;form.hidden=false;document.getElementById('company-name').focus();});
document.getElementById('download-application').addEventListener('click',()=>{
 if(!application)return;
 const blob=new Blob([JSON.stringify({draft:true,submitted:false,offer:'Two weeks of free AI credits, beta access to three models, and a tailored agent harness',application},null,2)],{type:'application/json'});
 const url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download='easter-company-beta-application.json';document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);document.getElementById('download-status').textContent='Application downloaded for your records. Nothing has been submitted.';
});
// These are fictional marketing examples, not a connection to a live agent.
const demoContent={
 delta:{name:'Delta',role:'Development lead',prompt:'Turn this roadmap into a working release.',response:'I’ll break the roadmap into a sprint, assign focused work to Epsilon agents, and bring the changes together for review.',plan:'Sprint outline',tasks:['Define acceptance checks','Build the account settings flow','Review the changes together']},
 darwin:{name:'Darwin',role:'Expert review',prompt:'Challenge this design before we commit to it.',response:'Let’s examine the assumptions, failure cases and decisions that need a deeper second opinion.',plan:'Review outline',tasks:['Challenge the key assumptions','Examine difficult edge cases','Return guidance to the development lead']},
 diana:{name:'Diana',role:'Conversation and integration',prompt:'Help a customer understand the next step.',response:'I can explain the options clearly, ask the relevant follow-up questions and help the customer move forward.',plan:'Conversation outline',tasks:['Understand the customer’s question','Explain the relevant options','Keep the next step clear']},
 dexter:{name:'Dexter',role:'Local companion concept',prompt:'Help me organise today’s work on this machine.',response:'We can shape a local companion around your tasks, preferred persona and the capabilities of your machine.',plan:'Standalone direction',tasks:['Choose a suitable local model','Make the persona your own','Continue supported work locally']},
 epsilon:{name:'Epsilon 1',role:'Focused worker · example task',prompt:'Define the acceptance criteria for this change.',response:'I’m focused on one expert job: making the expected behaviour explicit so the implementation and review have a clear target.',plan:'Focused assignment',tasks:['Describe the required behaviour','Identify important edge cases','Return the acceptance checklist to Delta']}
};
const agentButtons=[...document.querySelectorAll('[data-demo-agent]')];
let selectedDemoAgent='delta';
const demoAvatars={delta:'assets/agents/delta.webp',darwin:'assets/agents/darwin.webp',diana:'assets/agents/diana.webp',dexter:'assets/agents/dexter.webp'};
function showDemo(name){const d=demoContent[name];document.getElementById('demo-conversation-title').textContent=d.name;document.getElementById('demo-role-label').textContent=d.role;document.getElementById('demo-selected-avatar').src=demoAvatars[name==='epsilon'?'delta':name];document.getElementById('demo-user-prompt').textContent=d.prompt;document.getElementById('demo-speaker').textContent=d.name;document.getElementById('demo-agent-response').textContent=d.response;document.getElementById('demo-composer-label').textContent='Ask '+d.name+' about your next task…';const plan=document.getElementById('demo-task-plan');plan.replaceChildren();const title=document.createElement('span');title.textContent=d.plan;const list=document.createElement('ul');for(const task of d.tasks){const li=document.createElement('li');li.textContent=task;list.append(li);}plan.append(title,list);}
function setDemoSurface(workers){document.getElementById('demo-inbox').setAttribute('aria-pressed',String(!workers));document.getElementById('demo-workers').setAttribute('aria-pressed',String(workers));document.getElementById('demo-agent-list').hidden=workers;document.getElementById('demo-worker-list').hidden=!workers;showDemo(workers?'epsilon':selectedDemoAgent);}
for(const button of agentButtons)button.addEventListener('click',()=>{selectedDemoAgent=button.dataset.demoAgent;for(const candidate of agentButtons)candidate.setAttribute('aria-pressed',String(candidate===button));setDemoSurface(false);});
document.getElementById('demo-inbox').addEventListener('click',()=>setDemoSurface(false));
document.getElementById('demo-workers').addEventListener('click',()=>setDemoSurface(true));
