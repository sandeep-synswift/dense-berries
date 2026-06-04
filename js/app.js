/* ============================================================
   Dense Berries — app logic: routing, rendering, interactions
   ============================================================ */
function img(k){return IMG[k]||'';}
function scrollToId(id){const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:'smooth'});}

/* ---------- line icons ---------- */
const SVG={
  pool:'<path d="M2 18c2 0 2 1 4 1s2-1 4-1 2 1 4 1 2-1 4-1"/><path d="M2 22c2 0 2 1 4 1s2-1 4-1 2 1 4 1 2-1 4-1"/><path d="M6 18V5a2 2 0 0 1 4 0M14 18V5a2 2 0 0 1 4 0"/>',
  wifi:'<path d="M5 12.5a10 10 0 0 1 14 0"/><path d="M8 15.5a5.5 5.5 0 0 1 8 0"/><circle cx="12" cy="19" r="1"/>',
  kitchen:'<path d="M6 2v7a3 3 0 0 0 6 0V2M9 2v20"/><path d="M17 2c-1.6 0-3 2.2-3 5s1 4 2.5 4H17V2zM17 11v11"/>',
  car:'<path d="M3 13l1.8-5.4A2 2 0 0 1 6.7 6h10.6a2 2 0 0 1 1.9 1.6L21 13v5h-3v-2H6v2H3z"/><circle cx="7" cy="15.5" r="1.2"/><circle cx="17" cy="15.5" r="1.2"/>',
  paw:'<ellipse cx="6" cy="11" rx="1.7" ry="2.2"/><ellipse cx="10" cy="8" rx="1.7" ry="2.2"/><ellipse cx="14" cy="8" rx="1.7" ry="2.2"/><ellipse cx="18" cy="11" rx="1.7" ry="2.2"/><path d="M8 16.5a4 4 0 0 1 8 0c0 2.2-2 3.5-4 3.5s-4-1.3-4-3.5z"/>',
  snow:'<path d="M12 2v20M3 7l18 10M21 7L3 17"/><path d="M9 4l3 2 3-2M9 20l3-2 3 2"/>',
  drop:'<path d="M12 3s6 6 6 10a6 6 0 0 1-12 0c0-4 6-10 6-10z"/>',
  leaf:'<path d="M4 20c0-9 7-15 16-15 0 11-7 16-16 15z"/><path d="M4 20c4-7 8-9 13-10"/>',
  bed:'<path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M2 18h20M5 20v-2M19 20v-2"/><path d="M7 10V8.5A1.5 1.5 0 0 1 8.5 7H11v3"/>',
  sun:'<circle cx="12" cy="12" r="3.6"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8"/>',
  laptop:'<rect x="4" y="5" width="16" height="11" rx="1.5"/><path d="M2 20h20"/>',
  sparkle:'<path d="M12 3l1.8 5.6L19 10l-5.2 1.4L12 17l-1.8-5.6L5 10l5.2-1.4z"/>',
  shield:'<path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z"/>',
  photo:'<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10.5" r="2"/><path d="M3 17l5-4 4 3 3-2 6 5"/>',
  star:'<path d="M12 3l2.6 5.9 6.4.6-4.8 4.3 1.4 6.2L12 16.9 6.4 20l1.4-6.2L3 9.5l6.4-.6z"/>'
};
function svgi(name,cls){return `<svg class="${cls||''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round" width="22" height="22">${SVG[name]||SVG.sparkle}</svg>`;}
function amIcon(label){const s=(label||'').toLowerCase();
  if(s.match(/pool|swim/))return 'pool';
  if(s.match(/wi-?fi|ethernet|internet/))return 'wifi';
  if(s.match(/kitchen|cook|dining|fridge|coffee|cutlery|kettle|toaster|microwave|cooker|freez|blender|wine/))return 'kitchen';
  if(s.match(/park/))return 'car';
  if(s.match(/pet/))return 'paw';
  if(s.match(/air con|air-con|fan|cool|heat/))return 'snow';
  if(s.match(/wash|shower|water|laundr|dryer|hair|soap|shampoo|conditioner/))return 'drop';
  if(s.match(/garden|patio|outdoor|balcony|entrance/))return 'leaf';
  if(s.match(/bed|linen|pillow|wardrobe|hanger|iron|essential|drawer/))return 'bed';
  if(s.match(/lounger|sun|housekeep|clean|long-term/))return 'sun';
  if(s.match(/workspace|desk|tv|sound|book/))return 'laptop';
  if(s.match(/camera|security|fire|aid|alarm|safe/))return 'shield';
  return 'sparkle';
}

/* ---------- collection (home) ---------- */
function renderCollection(){
  document.getElementById('collGrid').innerHTML = VILLAS.map(v=>`
    <div class="vcard" onclick="openVilla('${v.slug}')">
      <div class="vimg">
        <span class="badge">${v.region}${v.sample?' · Sample':''}</span>
        <img src="${img(v.hero)}" alt="${v.name}" loading="lazy">
        <div class="vcap"><div><div class="nm">${v.name}</div><div class="lc">${v.area}, ${v.region}</div></div><div class="arr">→</div></div>
      </div>
      <div class="vfoot"><span>${v.beds} bedrooms · sleeps ${v.guests}</span><span class="pr">${v.price}</span></div>
    </div>`).join('');
}

/* ---------- map ---------- */
function mapBlock(v){
  if(v.coords){
    const [lat,lon]=v.coords, d=0.03, dy=0.02;
    const bbox=`${lon-d},${lat-dy},${lon+d},${lat+dy}`;
    const src=`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`;
    return `<div class="map-wrap"><iframe loading="lazy" src="${src}" title="Map of ${v.area}"></iframe></div>`;
  }
  return `<div class="map-wrap"><div class="map-fallback"><div class="marker"><div class="dot"></div><span>${v.area}, ${v.region}</span></div></div></div>`;
}

/* ---------- lightbox ---------- */
function openLightbox(slug){
  const v=VILLAS.find(x=>x.slug===slug); if(!v) return;
  document.getElementById('lbGrid').innerHTML = v.gallery.map(t=>`<img src="${img(t[0])}" alt="${t[1]}">`).join('');
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeLightbox(){document.getElementById('lightbox').classList.remove('open');document.body.style.overflow='';}

/* ---------- villa detail ---------- */
function openVilla(slug){
  const v = VILLAS.find(x=>x.slug===slug); if(!v) return;
  const title   = v.title  || `${v.name} · Private Pool · 4BHK`;
  const entire  = v.entire || `Entire villa in ${v.area}, Goa, India`;
  const fmtRate = v.reviews ? `${(typeof v.rating==='number'?v.rating.toFixed(1):v.rating)} · ${v.reviews} review${v.reviews>1?'s':''}` : 'New';
  const host    = v.host || {name:'Your host', months:'Hosting on Dense Berries'};
  const high    = v.highlight || {title:'Private pool', text:'Your own pool for peaceful mornings and golden sunsets.'};
  const sleeping= v.sleeping || Array.from({length:v.beds},(_,i)=>[`Bedroom ${i+1}`,'1 king bed']);
  const rules   = v.houseRules || ['Check-in after 2:00 pm','Checkout before 12:00 pm',`${v.guests} guests maximum`];
  const groups  = v.amenityGroups || {'Amenities & service':v.amenities};
  const notInc  = v.notIncluded || [];
  const totalA  = Object.values(groups).reduce((n,a)=>n+a.length,0);
  const reviews = v.reviewsList || [];
  const priceLine = (!v.price || /request/i.test(v.price)) ? 'Add dates for prices' : v.price;

  const g = v.gallery.slice(0,5);
  const gallery = g.map((t,i)=>`<div class="g"><img src="${img(t[0])}" alt="${t[1]}"><div class="lab">${t[1]}</div>${i===g.length-1?`<button class="gallery-all" onclick="event.stopPropagation();openLightbox('${v.slug}')">${svgi('photo')} Show all photos</button>`:''}</div>`).join('');
  const featured = v.amenities.map(a=>`<div class="am">${svgi(amIcon(a),'ic')}<span>${a}</span></div>`).join('');
  const allGroups = Object.entries(groups).map(([k,arr])=>`<div class="grp"><h4>${k}</h4>${arr.map(a=>`<div class="am">${svgi(amIcon(a),'ic')}<span>${a}</span></div>`).join('')}</div>`).join('')
    + (notInc.length?`<div class="grp"><h4>Not included</h4>${notInc.map(a=>`<div class="am off">${svgi(amIcon(a),'ic')}<span>${a}</span></div>`).join('')}</div>`:'');
  const sleepCards = sleeping.map(s=>`<div class="bed">${svgi('bed','ic')}<b>${s[0]}</b><span>${s[1]}</span></div>`).join('');
  const reviewCards = reviews.length
    ? reviews.map(r=>`<div class="rev"><div class="who"><div class="avatar">${(r.name||'G')[0]}</div><div><b>${r.name}</b><span>${r.date||''}</span></div></div><p>“${r.text}”</p></div>`).join('')
    : `<p style="color:var(--ink2);font-size:15px">No guest reviews yet — be the first to stay.</p>`;

  document.getElementById('detail').innerHTML = `
    <div class="vd">
      <button class="back" onclick="goHome()">← All villas</button>

      <div class="vd-head">
        <h1 class="vd-title">${title}</h1>
        <span class="chip">${svgi('star')} ${fmtRate}</span>
      </div>
      <div class="vd-sub">
        <span>${entire}</span><span class="dot">·</span>
        <span>${v.beds} bedrooms</span><span class="dot">·</span>
        <span>${v.beds} beds</span><span class="dot">·</span>
        <span>${v.baths} bathrooms</span><span class="dot">·</span>
        <span>${v.guests} guests</span>
      </div>

      <div class="vd-gallery" style="margin-bottom:8px">${gallery}</div>

      <div class="vd-grid">
        <div class="vd-main">
          <section class="sec host-strip">
            <div><h2>Entire home hosted by ${host.name}</h2><div class="sm">${v.beds} bedrooms · ${v.baths} baths · up to ${v.guests} guests · ${v.pool.toLowerCase()} pool</div></div>
            <div class="avatar lg">${host.name[0]}</div>
          </section>

          <section class="sec hi-row">${svgi('pool','ic')}<div><b>${high.title}</b><span>${high.text}</span></div></section>

          <section class="sec desc">
            <p>${v.story}</p>
            ${v.notes?`<p class="note"><b>Other things to note</b><br>${v.notes}</p>`:''}
          </section>

          <section class="sec">
            <div class="num">The rooms</div>
            <h2>Where you’ll sleep</h2>
            <div class="sleep">${sleepCards}</div>
          </section>

          <section class="sec">
            <div class="num">Comfort & service</div>
            <h2>What this place offers</h2>
            <div class="amen">${featured}</div>
            <button class="btn-out" onclick="var x=document.getElementById('amenAll');x.style.display='block';this.style.display='none'">Show all ${totalA} amenities</button>
            <div class="amen-all" id="amenAll" style="display:none">${allGroups}</div>
          </section>
        </div>

        <aside class="vd-side">
          <div class="bookcard">
            <div class="price">${priceLine}</div>
            <div class="pr-rate">${svgi('star')} ${fmtRate}</div>
            <div class="bk-box">
              <div class="r">
                <div class="c"><label>Check-in</label><div class="v">Add date</div></div>
                <div class="c"><label>Checkout</label><div class="v">Add date</div></div>
              </div>
              <div class="c row2"><label>Guests</label><div class="v">1 guest</div></div>
            </div>
            <a class="reserve" href="${v.airbnb||'#'}" target="_blank" rel="noopener">${v.airbnb?'Check availability':'Enquire to book'}</a>
            <div class="bk-note">You won’t be charged yet</div>
          </div>
        </aside>
      </div>

      <section class="sec">
        <h2>${svgi('star','st')} ${fmtRate}</h2>
        <div class="reviews">${reviewCards}</div>
      </section>

      <section class="sec">
        <div class="num">The location</div>
        <h2>Where you’ll be</h2>
        ${mapBlock(v)}
        <p style="font-size:15px;color:var(--ink2);margin-top:16px;max-width:60ch">${v.locText}</p>
      </section>

      <section class="sec">
        <h2>Meet your host</h2>
        <div class="hostcard">
          <div class="avatar lg">${host.name[0]}</div>
          <div><b>${host.name}</b><span>${host.months}</span>${v.coHost?`<span>Co-host · ${v.coHost}</span>`:''}<span>Response rate 100% · Responds within an hour</span></div>
        </div>
      </section>

      <section class="sec">
        <h2>Things to know</h2>
        <div class="things">
          <div><h4>House rules</h4><p>${rules.join('<br>')}</p></div>
          <div><h4>Safety &amp; property</h4><p>Exterior security cameras on property<br>Smoke alarm not reported<br>Carbon monoxide alarm not reported</p></div>
          <div><h4>Cancellation policy</h4><p>Add your trip dates to get the cancellation details for this stay.</p></div>
        </div>
      </section>
    </div>

    <section class="contact">
      <div class="contact-grid">
        <h3>Questions about ${v.name}?<br><em>Talk to us directly.</em></h3>
        <div class="cinfo">
          <div class="row"><div class="k">Call / WhatsApp</div><a href="tel:+910000000000">+91 00000 00000</a></div>
          <div class="row"><div class="k">Email</div><a href="mailto:stay@denseberries.com">stay@denseberries.com</a></div>
          <div class="row"><div class="k">Follow</div><div class="socials"><a href="#">Instagram</a><a href="#">Facebook</a><a href="#">YouTube</a></div></div>
        </div>
      </div>
    </section>
    <footer><div class="fb">Dense Berries</div><div>${v.area}, ${v.region}, India</div><div>© 2026 — Concept</div></footer>`;

  document.getElementById('home').style.display='none';
  document.getElementById('detail').style.display='block';
  document.body.classList.add('detailview');
  window.scrollTo(0,0);
  observeReveals();
  location.hash = 'villa/'+slug;
}

function goHome(){
  document.getElementById('detail').style.display='none';
  document.getElementById('home').style.display='block';
  document.body.classList.remove('detailview');
  closeLightbox();
  window.scrollTo(0,0);
  location.hash='';
}

/* ---------- reveal-on-scroll ---------- */
let io;
function observeReveals(){
  if(io) io.disconnect();
  io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
  document.querySelectorAll('.reveal:not(.in)').forEach(el=>io.observe(el));
}

/* ---------- boot ---------- */
const nav=document.getElementById('nav');
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>innerHeight*0.7));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox();});
renderCollection();
observeReveals();
if(location.hash.startsWith('#villa/')) openVilla(location.hash.split('/')[1]);
