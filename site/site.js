const tabs=[...document.querySelectorAll('[role="tab"]')];
function selectTab(tab,{focus=false}={}){
 for(const candidate of tabs){const selected=candidate===tab;candidate.setAttribute('aria-selected',String(selected));candidate.tabIndex=selected?0:-1;document.getElementById(candidate.getAttribute('aria-controls')).hidden=!selected;}
 if(focus)tab.focus();
}
for(const [index,tab] of tabs.entries()){
 tab.addEventListener('click',()=>selectTab(tab));
 tab.addEventListener('keydown',event=>{
 let next;if(event.key==='ArrowRight'||event.key==='ArrowDown')next=(index+1)%tabs.length;
 else if(event.key==='ArrowLeft'||event.key==='ArrowUp')next=(index+tabs.length-1)%tabs.length;
 else if(event.key==='Home')next=0;else if(event.key==='End')next=tabs.length-1;else return;
 event.preventDefault();selectTab(tabs[next],{focus:true});
 });
}
document.getElementById('year').textContent=new Date().getFullYear();
