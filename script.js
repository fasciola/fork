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

/* Editorial media expansion: adds more of the existing Fork & Founders imagery without changing the quiet-luxury layout. */
const mediaStyle=document.createElement('style');
mediaStyle.textContent=`
  .media-break{padding:0 0 110px}.media-break-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:18px}.media-film{position:relative;min-height:520px;overflow:hidden;border-radius:32px;background:#33251f}.media-film video{width:100%;height:100%;object-fit:cover}.media-film:after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(19,12,9,.06),rgba(19,12,9,.66))}.media-film-copy{position:absolute;z-index:2;left:28px;right:28px;bottom:25px;color:#fff}.media-film-copy h3{margin:8px 0 0;font:500 clamp(2rem,3vw,3.4rem)/.95 'Playfair Display',serif;letter-spacing:-.045em;max-width:520px}.media-stack{display:grid;grid-template-rows:1fr 1fr;gap:18px}.media-photo{position:relative;overflow:hidden;border-radius:24px;min-height:250px}.media-photo img{width:100%;height:100%;object-fit:cover;transition:.5s}.media-photo:hover img{transform:scale(1.04)}.media-caption{position:absolute;left:16px;bottom:16px;padding:8px 10px;border-radius:999px;background:rgba(255,254,250,.9);font-size:.72rem;font-weight:700}.editorial-gallery{padding:0 0 110px}.gallery-intro{display:flex;justify-content:space-between;align-items:end;gap:20px;margin-bottom:24px}.gallery-intro p{max-width:360px;margin:0;color:#6d635a;font-size:.9rem}.gallery-grid{display:grid;grid-template-columns:1.1fr .8fr 1fr;grid-template-rows:260px 205px;gap:18px}.gallery-tile{position:relative;overflow:hidden;border-radius:24px;background:#ddd}.gallery-tile img{width:100%;height:100%;object-fit:cover;transition:.45s}.gallery-tile:hover img{transform:scale(1.045)}.gallery-tile.tall{grid-row:span 2}.gallery-tile.wide{grid-column:span 2}.gallery-tile:after{content:'';position:absolute;inset:auto 0 0;height:45%;background:linear-gradient(transparent,rgba(22,14,9,.55))}.gallery-tile span{position:absolute;z-index:2;bottom:15px;left:16px;color:#fff;font:.7rem 'DM Mono',monospace;letter-spacing:.12em;text-transform:uppercase}.process-card.media-mini{padding:0}.process-card.media-mini img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.process-card.media-mini:after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(20,12,8,.05),rgba(20,12,8,.72))}.process-card.media-mini .media-mini-copy{position:relative;z-index:2;height:100%;padding:29px;display:flex;flex-direction:column;justify-content:space-between;color:#fff}.process-card.media-mini .process-number{color:#efd4c0}.process-card.media-mini p{color:#faebe0}@media(max-width:900px){.media-break-grid{grid-template-columns:1fr}.media-film{min-height:450px}.gallery-grid{grid-template-columns:1fr 1fr;grid-template-rows:250px 210px 210px}.gallery-tile.tall{grid-row:span 2}.gallery-tile.wide{grid-column:span 2}}@media(max-width:620px){.media-break{padding-bottom:76px}.media-film{min-height:400px;border-radius:23px}.media-film-copy{left:20px;right:20px;bottom:20px}.media-film-copy h3{font-size:2.25rem}.media-stack{grid-template-columns:1fr 1fr;grid-template-rows:auto}.media-photo{min-height:180px;border-radius:18px}.gallery-intro{display:block}.gallery-intro p{margin-top:12px}.gallery-grid{grid-template-columns:1fr 1fr;grid-template-rows:190px 165px 165px;gap:11px}.gallery-tile{border-radius:18px}.gallery-tile span{left:11px;bottom:10px;font-size:.58rem}}
`;
document.head.appendChild(mediaStyle);

const processGrid=document.querySelector('.process-grid');
if(processGrid){
  const mini=document.createElement('article');
  mini.className='process-card media-mini';
  mini.innerHTML=`<img src="https://raw.githubusercontent.com/fasciola/Qwen/main/public/chef-manager.jpg" alt="Fork and Founders kitchen team"><div class="media-mini-copy"><span class="process-number">IN THE KITCHEN</span><div><h3>Craft, every day</h3><p>Experienced hands behind each delivery.</p></div></div>`;
  processGrid.appendChild(mini);
}

const cuisineSection=document.getElementById('cuisines');
if(cuisineSection){
  const mediaBreak=document.createElement('section');
  mediaBreak.className='media-break';
  mediaBreak.innerHTML=`<div class="container"><div class="media-break-grid"><article class="media-film"><video autoplay muted loop playsinline poster="https://raw.githubusercontent.com/fasciola/Qwen/main/public/hero-food.jpg"><source src="https://raw.githubusercontent.com/fasciola/Qwen/main/public/videos/section-bg.mp4" type="video/mp4"></video><div class="media-film-copy"><p class="eyebrow" style="color:#e7c0a5">Made for the moment of order</p><h3>From first flame to final handoff.</h3></div></article><div class="media-stack"><article class="media-photo"><img src="https://raw.githubusercontent.com/fasciola/Qwen/main/public/cuisine-pizza.jpg" alt="Pizza concept"><span class="media-caption">Delivery-led Italian</span></article><article class="media-photo"><img src="https://raw.githubusercontent.com/fasciola/Qwen/main/public/cuisine-sushi.jpg" alt="Sushi concept"><span class="media-caption">Fresh, precise, modern</span></article></div></div></div></section>`;
  cuisineSection.parentNode.insertBefore(mediaBreak,cuisineSection);
}

const pricingSection=document.getElementById('pricing');
if(pricingSection){
  const gallery=document.createElement('section');
  gallery.className='editorial-gallery';
  gallery.innerHTML=`<div class="container"><div class="gallery-intro"><div><p class="eyebrow">The work, in detail</p><h2 class="section-title">Food made to travel beautifully.</h2></div><p>Every visual touchpoint is considered—from the first image customers see to the final dish that arrives at their door.</p></div><div class="gallery-grid"><figure class="gallery-tile tall"><img src="https://raw.githubusercontent.com/fasciola/Qwen/main/public/cuisine-burger.jpg" alt="Gourmet burger"><span>Gourmet burger</span></figure><figure class="gallery-tile"><img src="https://raw.githubusercontent.com/fasciola/Qwen/main/public/cuisine-salad.jpg" alt="Fresh salad"><span>Fresh categories</span></figure><figure class="gallery-tile"><img src="https://raw.githubusercontent.com/fasciola/Qwen/main/public/cuisine-wings.jpg" alt="Chicken wings"><span>Shareable favourites</span></figure><figure class="gallery-tile wide"><img src="https://raw.githubusercontent.com/fasciola/Qwen/main/public/cuisine-kebabs.jpg" alt="Grilled kebabs"><span>Charcoal &amp; craft</span></figure></div></div></section>`;
  pricingSection.parentNode.insertBefore(gallery,pricingSection);
}
