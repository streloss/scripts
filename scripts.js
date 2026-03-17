// ==========================================
//  scripts.js — Script Sources page logic
//  Source Scripts
// ==========================================

// ── Script Data ───────────────────────────────────────────
// To add/edit scripts: change title, desc, img, and source below.
// Add more objects following the same pattern (increment id).

const SCRIPTS = [
  {
    id: 1,
    title: "Script Name Here",
    desc: "Short description of what this script does. Edit this in scripts.js.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=60",
    source: `-- Paste your Luau source code here`
  },
  {
    id: 2,
    title: "Script Name Here",
    desc: "Short description of what this script does. Edit this in scripts.js.",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=60",
    source: `-- Paste your Luau source code here`
  },
  {
    id: 3,
    title: "Script Name Here",
    desc: "Short description of what this script does. Edit this in scripts.js.",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&q=60",
    source: `-- Paste your Luau source code here`
  },
  {
    id: 4,
    title: "Script Name Here",
    desc: "Short description of what this script does. Edit this in scripts.js.",
    img: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=600&q=60",
    source: `-- Paste your Luau source code here`
  },
  {
    id: 5,
    title: "Script Name Here",
    desc: "Short description of what this script does. Edit this in scripts.js.",
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=60",
    source: `-- Paste your Luau source code here`
  },
  {
    id: 6,
    title: "Script Name Here",
    desc: "Short description of what this script does. Edit this in scripts.js.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=60",
    source: `-- Paste your Luau source code here`
  }
];

// ── Render Cards ──────────────────────────────────────────
function renderCards() {
  const grid = document.getElementById('scriptsGrid');
  if (!grid) return;

  grid.innerHTML = '';

  SCRIPTS.forEach((script, i) => {
    const card = document.createElement('a');
    card.className = 'script-card';
    card.href = `script-detail.html?id=${script.id}`;
    card.style.animationDelay = `${i * 0.07}s`;

    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${script.img}" alt="${script.title}" loading="lazy" />
        <div class="card-img-overlay"></div>
        <span class="card-tag">Luau</span>
      </div>
      <div class="card-body">
        <div class="card-title">${script.title}</div>
        <div class="card-desc">${script.desc}</div>
        <div class="card-footer">
          <span class="card-lang">luau</span>
          <span class="card-arrow">→</span>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

// ── Init ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderCards();
});
