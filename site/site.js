document.getElementById('year').textContent=new Date().getFullYear();
const form=document.getElementById('beta-form'),review=document.getElementById('application-review'),summary=document.getElementById('application-summary');
form.addEventListener('submit',event=>{
 event.preventDefault();for(const input of form.querySelectorAll('input,textarea'))input.value=input.value.trim();if(!form.reportValidity())return;
 const data=new FormData(form),company=String(data.get('company')),email=String(data.get('email')),useCase=String(data.get('useCase'));
 summary.replaceChildren();for(const [label,value] of [['Company',company],['Work email',email],['Use case',useCase]]){const row=document.createElement('div'),dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=label;dd.textContent=value;row.append(dt,dd);summary.append(row);}
 const body=`Company: ${company}\nWork email: ${email}\n\nWe would like to request the e-server company beta, with two weeks of free AI credits, three beta models and a tailored agent harness.\n\nUse case:\n${useCase}`;
 document.getElementById('send-request').href='mailto:contact@easter.company?subject='+encodeURIComponent('e-server beta — '+company)+'&body='+encodeURIComponent(body);
 form.hidden=true;review.hidden=false;review.focus();
});
document.getElementById('edit-application').addEventListener('click',()=>{review.hidden=true;form.hidden=false;document.getElementById('company-name').focus();});
const tabs=[...document.querySelectorAll('[role="tab"]')];
function selectTab(tab){for(const item of tabs){const selected=item===tab;item.setAttribute('aria-selected',String(selected));item.tabIndex=selected?0:-1;document.getElementById(item.getAttribute('aria-controls')).hidden=!selected;}}
for(const [index,tab] of tabs.entries()){tab.addEventListener('click',()=>selectTab(tab));tab.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(index+1)%tabs.length;else if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=tabs.length-1;else return;event.preventDefault();selectTab(tabs[next]);tabs[next].focus();});}

// THE PLATFORM SECTION ADVANCES ITSELF. Owen, 2026-10-27: "upgrade the section to be a automatic
// carousel". Four panels now (Agent Harness first), so a visitor who never touches the tabs still
// sees the rest of what e-server is. Three rules keep it from being a nuisance:
//
//   * it advances only while the section is in view, so a reader further down the page is not
//     having panels changed behind their back;
//   * hovering or focusing the carousel holds it, so reading a panel never races the timer;
//   * the first time the visitor picks a tab themselves, the timer stops for good - the section
//     becomes theirs, and an automatic thing that overrules a deliberate choice is the worst kind.
//
// Reduced motion means no automatic movement at all (the panels are still there, on the tabs).
const carousel = document.querySelector('[data-carousel]');
if (carousel && tabs.length > 1 && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const panels = carousel.parentElement;
  let held = false, surrendered = false, timer = null;
  const step = () => {
    if (held || surrendered || document.hidden || !carousel.offsetParent) return;
    const index = tabs.findIndex(tab => tab.getAttribute('aria-selected') === 'true');
    selectTab(tabs[(index + 1) % tabs.length]);
  };
  const start = () => { if (timer === null) timer = setInterval(step, 7000); };
  const stop = () => { clearInterval(timer); timer = null; };
  carousel.addEventListener('pointerenter', () => { held = true; });
  carousel.addEventListener('pointerleave', () => { held = false; });
  carousel.addEventListener('focusin', () => { held = true; });
  carousel.addEventListener('focusout', () => { held = false; });
  carousel.addEventListener('click', () => { surrendered = true; stop(); });
  carousel.addEventListener('keydown', () => { surrendered = true; stop(); });
  panels.addEventListener('pointerenter', () => { held = true; });
  panels.addEventListener('pointerleave', () => { held = false; });
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); else start(); });
  start();
}
