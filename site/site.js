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
