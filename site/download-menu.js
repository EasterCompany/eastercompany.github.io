/* Corporate presentation for the shared e-server installer control. */
(()=>{
 'use strict';
 const icons=['windows','ubuntu','arch','linux'];
 document.querySelectorAll('[data-eserver-download]').forEach((host,index)=>{
  const details=host.querySelector('.eserver-download-picker');
  const trigger=details.querySelector('summary');
  const original=host.querySelector('.eserver-download-primary');
  const primary=document.createElement('button');primary.type='button';primary.className=original.className;primary.textContent=original.textContent;original.replaceWith(primary);
  if(host.id==='nav-download'){const chevron=document.createElement('span');chevron.className='download-nav-chevron';chevron.setAttribute('aria-hidden','true');chevron.textContent='⌄';primary.append(chevron);trigger.hidden=true;}
  if(!HTMLElement.prototype.showPopover){primary.addEventListener('click',()=>{details.open=!details.open;});return;}
  const menu=details.querySelector('.eserver-download-menu');
  menu.id=`download-platforms-${index}`;
  menu.popover='auto';
  menu.setAttribute('role','dialog');
  menu.setAttribute('aria-label','Choose your e-server platform');
  menu.tabIndex=-1;
  const title=document.createElement('p');title.className='download-menu-title';title.textContent='Easter Company';
  const heading=document.createElement('h2');heading.textContent='Choose your platform';
  menu.prepend(title,heading);
  menu.querySelectorAll('a').forEach((link,i)=>{
   const icon=document.createElement('img');icon.className='platform-icon';icon.src=`assets/os/${icons[i]}.png`;icon.alt='';
   const label=document.createElement('span');label.append(...link.childNodes);
   const arrow=document.createElement('span');arrow.className='platform-arrow';arrow.textContent='↓';arrow.setAttribute('aria-hidden','true');
   link.append(icon,label,arrow);
   link.addEventListener('click',()=>{if(menu.matches(':popover-open'))menu.hidePopover();});
  });
  const credit=document.createElement('a');credit.className='download-icon-credit';credit.href='https://icons8.com/icons';credit.target='_blank';credit.rel='noopener';credit.textContent='OS icons by Icons8';menu.append(credit);
  document.body.append(menu);
  trigger.setAttribute('aria-haspopup','dialog');trigger.setAttribute('aria-controls',menu.id);trigger.setAttribute('aria-expanded','false');
  let anchor=trigger;
  function position(){
   if(!menu.matches(':popover-open'))return;
   const rect=host.getBoundingClientRect(),width=menu.offsetWidth,height=menu.offsetHeight;
   menu.style.left=Math.max(12,Math.min(rect.left,innerWidth-width-12))+'px';
   menu.style.top=(rect.bottom+10+height<=innerHeight-12?rect.bottom+10:Math.max(12,Math.min(rect.top-height-10,innerHeight-height-12)))+'px';
  }
  function open(event){event.preventDefault();event.stopImmediatePropagation();anchor=event.currentTarget;menu.togglePopover({source:anchor});position();}
  trigger.addEventListener('click',open);
  primary.setAttribute('aria-haspopup','dialog');primary.setAttribute('aria-controls',menu.id);primary.setAttribute('aria-expanded','false');primary.addEventListener('click',open);
  menu.addEventListener('toggle',event=>{const open=event.newState==='open';trigger.setAttribute('aria-expanded',String(open&&anchor===trigger));if(primary)primary.setAttribute('aria-expanded',String(open&&anchor===primary));if(open){position();menu.focus({preventScroll:true});}});
  window.addEventListener('resize',position,{passive:true});
  window.addEventListener('scroll',position,{passive:true});
 });
})();
