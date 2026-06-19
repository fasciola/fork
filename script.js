const cuisines={
  'Kebabs & Grills':['https://raw.githubusercontent.com/fasciola/Qwen/main/public/cuisine-kebabs.jpg','Live on Talabat, Careem, Deliveroo, Noon & Keeta.'],
  'Pizza & Pasta':['https://raw.githubusercontent.com/fasciola/Qwen/main/public/cuisine-pizza.jpg','A delivery-led Italian concept built for repeat orders.'],
  'Gourmet Burgers':['https://raw.githubusercontent.com/fasciola/Qwen/main/public/cuisine-burger.jpg','High-conversion comfort food with a premium finish.'],
  'Sushi & Poke':['https://raw.githubusercontent.com/fasciola/Qwen/main/public/cuisine-sushi.jpg','Fresh, clean and perfectly positioned for the Dubai lunch crowd.'],
  'Fried Chicken & Wings':['https://raw.githubusercontent.com/fasciola/Qwen/main/public/cuisine-wings.jpg','Bold, shareable and made to travel beautifully.'],
  'Salads & Healthy':['https://raw.githubusercontent.com/fasciola/Qwen/main/public/cuisine-salad.jpg','Balanced everyday food for mindful regulars.']
};
const list=document.getElementById('cuisineList');
const image=document.getElementById('cuisineImage');
const title=document.getElementById('cuisineTitle');
const meta=document.getElementById('cuisineMeta');
Object.entries(cuisines).forEach(([name,[src,detail]],index)=>{
  const item=document.createElement('button');
  item.className='cuisine-item'+(index===0?' active':'');
  item.innerHTML='<span>'+String(index+1).padStart(2,'0')+'</span>'+name+' <b>↗</b>';
  item.addEventListener('click',()=>{
    document.querySelectorAll('.cuisine-item').forEach(el=>el.classList.remove('active'));
    item.classList.add('active');
    image.style.opacity='0';
    window.setTimeout(()=>{
      image.src=src; image.alt=name; title.textContent=name; meta.textContent=detail; image.style.opacity='1';
    },150);
  });
  list.appendChild(item);
});
document.querySelectorAll('.faq-question').forEach(button=>button.addEventListener('click',()=>{
  const parent=button.parentElement;
  document.querySelectorAll('.faq-item').forEach(item=>{if(item!==parent)item.classList.remove('open')});
  parent.classList.toggle('open');
}));
document.getElementById('newsletter').addEventListener('submit',event=>{
  event.preventDefault();
  const input=event.currentTarget.querySelector('input');
  input.value='Thank you — we will be in touch.';
  input.disabled=true;
});
document.getElementById('navToggle').addEventListener('click',()=>{
  const nav=document.getElementById('navLinks');
  const isOpen=nav.dataset.open==='true';
  nav.dataset.open=String(!isOpen);
  if(!isOpen){Object.assign(nav.style,{display:'flex',position:'absolute',top:'70px',left:'0',right:'0',padding:'18px',background:'#fffefa',border:'1px solid #ddd7ce',borderRadius:'18px',flexDirection:'column',alignItems:'flex-start'});}else{nav.removeAttribute('style');}
});