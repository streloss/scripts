// ==========================================
//  scripts.js — Script Sources page logic
//  Source Scripts
// ==========================================

// ── Script Data ───────────────────────────────────────────
const SCRIPTS = [
  {
    id: 1,
    title: "Auto-Clicker",
    lang: "javascript",
    tag: "JavaScript",
    desc: "Automates mouse click events at a set interval. Useful for testing UI or repetitive tasks.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=60",
    source: `// Auto-Clicker Script
let clicking = false;
let interval = null;

function startClicking(ms = 100) {
  if (clicking) return;
  clicking = true;
  interval = setInterval(() => {
    document.dispatchEvent(new MouseEvent('click'));
  }, ms);
}

function stopClicking() {
  clearInterval(interval);
  clicking = false;
}

// Usage: startClicking(200); stopClicking();`
  },
  {
    id: 2,
    title: "Dark Mode Toggle",
    lang: "javascript",
    tag: "JavaScript",
    desc: "Persistent dark/light mode switcher using localStorage. Drop into any project instantly.",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=60",
    source: `// Dark Mode Toggle
const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

toggle?.addEventListener('click', () => {
  const current = localStorage.getItem('theme') || 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

// Init on load
applyTheme(localStorage.getItem('theme') || 'light');`
  },
  {
    id: 3,
    title: "File Organizer",
    lang: "python",
    tag: "Python",
    desc: "Scans a directory and automatically sorts files into subfolders by extension.",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&q=60",
    source: `# File Organizer
import os, shutil

def organize(folder):
    for f in os.listdir(folder):
        path = os.path.join(folder, f)
        if os.path.isfile(path):
            ext = f.rsplit('.', 1)[-1].lower()
            dest = os.path.join(folder, ext)
            os.makedirs(dest, exist_ok=True)
            shutil.move(path, os.path.join(dest, f))

organize('/path/to/folder')`
  },
  {
    id: 4,
    title: "Batch Rename",
    lang: "python",
    tag: "Python",
    desc: "Renames all files in a folder using a numbered prefix. Handles collisions automatically.",
    img: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=600&q=60",
    source: `# Batch Rename Script
import os

def batch_rename(folder, prefix='file'):
    files = sorted(os.listdir(folder))
    for i, name in enumerate(files, start=1):
        ext = os.path.splitext(name)[1]
        new_name = f"{prefix}_{i:04d}{ext}"
        os.rename(
            os.path.join(folder, name),
            os.path.join(folder, new_name)
        )

batch_rename('/your/folder', prefix='img')`
  },
  {
    id: 5,
    title: "Backup Script",
    lang: "bash",
    tag: "Bash",
    desc: "Creates a timestamped tar.gz backup of any directory. Ideal for cron jobs.",
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=60",
    source: `#!/bin/bash
# Backup Script
SOURCE="/path/to/source"
DEST="/path/to/backups"
DATE=$(date +%Y%m%d_%H%M%S)
FILENAME="backup_$DATE.tar.gz"

mkdir -p "$DEST"
tar -czf "$DEST/$FILENAME" "$SOURCE"
echo "Backup saved: $DEST/$FILENAME"`
  },
  {
    id: 6,
    title: "Disk Usage Monitor",
    lang: "bash",
    tag: "Bash",
    desc: "Checks disk usage and sends an alert if usage exceeds a threshold percentage.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=60",
    source: `#!/bin/bash
# Disk Usage Monitor
THRESHOLD=80
USAGE=$(df / | tail -1 | awk '{print $5}' | tr -d '%')

if [ "$USAGE" -gt "$THRESHOLD" ]; then
  echo "ALERT: Disk usage is at ${USAGE}%" | mail -s "Disk Alert" you@example.com
else
  echo "Disk usage OK: ${USAGE}%"
fi`
  },
  {
    id: 7,
    title: "CSS Reset",
    lang: "css",
    tag: "CSS",
    desc: "A modern CSS reset that normalizes styles across all browsers with sensible defaults.",
    img: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&q=60",
    source: `/* Modern CSS Reset */
*, *::before, *::after { box-sizing: border-box; }
* { margin: 0; }
body { line-height: 1.5; -webkit-font-smoothing: antialiased; }
img, picture, video, canvas, svg { display: block; max-width: 100%; }
input, button, textarea, select { font: inherit; }
p, h1, h2, h3, h4, h5, h6 { overflow-wrap: break-word; }
#root, #__next { isolation: isolate; }`
  },
  {
    id: 8,
    title: "Smooth Scroll CSS",
    lang: "css",
    tag: "CSS",
    desc: "Pure-CSS smooth scrolling with scroll-margin offsets for anchor links and sticky headers.",
    img: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=600&q=60",
    source: `/* Smooth Scroll CSS */
:root {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* sticky header height */
}

[id] {
  scroll-margin-top: 80px;
}

@media (prefers-reduced-motion: reduce) {
  :root { scroll-behavior: auto; }
}`
  },
  {
    id: 9,
    title: "Scroll Progress Bar",
    lang: "javascript",
    tag: "JavaScript",
    desc: "Adds a thin reading progress bar at the top of the page that fills as the user scrolls.",
    img: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=600&q=60",
    source: `// Scroll Progress Bar
const bar = document.createElement('div');
Object.assign(bar.style, {
  position: 'fixed', top: 0, left: 0,
  height: '3px', width: '0%',
  background: '#c8ff00', zIndex: 9999,
  transition: 'width 0.1s linear'
});
document.body.prepend(bar);

window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
  bar.style.width = pct + '%';
});`
  },
  {
    id: 10,
    title: "HTTP Server",
    lang: "python",
    tag: "Python",
    desc: "Spins up a local HTTP server to serve static files from any directory in one command.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=60",
    source: `# Quick HTTP Server
import http.server, socketserver, os, sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
DIRECTORY = sys.argv[2] if len(sys.argv) > 2 else '.'

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

with socketserver.TCPServer(('', PORT), Handler) as httpd:
    print(f'Serving {DIRECTORY} on http://localhost:{PORT}')
    httpd.serve_forever()`
  },
  {
    id: 11,
    title: "Env Checker",
    lang: "bash",
    tag: "Bash",
    desc: "Validates that all required environment variables are set before running a script.",
    img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&q=60",
    source: `#!/bin/bash
# Env Checker
REQUIRED=("DB_HOST" "DB_USER" "DB_PASS" "API_KEY")
MISSING=0

for VAR in "\${REQUIRED[@]}"; do
  if [ -z "\${!VAR}" ]; then
    echo "MISSING: $VAR"
    MISSING=1
  fi
done

[ $MISSING -eq 1 ] && exit 1
echo "All required env vars are set."`
  },
  {
    id: 12,
    title: "CSS Variables Theme",
    lang: "css",
    tag: "CSS",
    desc: "A complete CSS custom-properties theme system with dark/light modes and accent overrides.",
    img: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=600&q=60",
    source: `/* CSS Variables Theme System */
:root {
  --bg:      #ffffff;
  --text:    #111111;
  --accent:  #0055ff;
  --muted:   #888888;
  --border:  #e0e0e0;
}

[data-theme="dark"] {
  --bg:      #0a0a0a;
  --text:    #e8e8e8;
  --accent:  #c8ff00;
  --muted:   #666666;
  --border:  #2a2a2a;
}

body { background: var(--bg); color: var(--text); }`
  }
];

// ── Render Cards ──────────────────────────────────────────
function renderCards(filter = 'all') {
  const grid = document.getElementById('scriptsGrid');
  if (!grid) return;

  grid.innerHTML = '';

  const filtered = filter === 'all'
    ? SCRIPTS
    : SCRIPTS.filter(s => s.lang === filter);

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="no-results">No scripts found.</div>';
    return;
  }

  filtered.forEach((script, i) => {
    const card = document.createElement('div');
    card.className = 'script-card';
    card.style.animationDelay = `${i * 0.06}s`;
    card.dataset.lang = script.lang;

    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${script.img}" alt="${script.title}" loading="lazy" />
        <div class="card-img-overlay"></div>
        <span class="card-tag">${script.tag}</span>
      </div>
      <div class="card-body">
        <div class="card-title">${script.title}</div>
        <div class="card-desc">${script.desc}</div>
        <div class="card-footer">
          <span class="card-lang">${script.lang}</span>
          <span class="card-arrow">→</span>
        </div>
      </div>
    `;

    card.addEventListener('click', () => openModal(script));
    grid.appendChild(card);
  });
}

// ── Modal ─────────────────────────────────────────────────
function openModal(script) {
  const existing = document.getElementById('script-modal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'script-modal';
  modal.style.cssText = `
    position: fixed; inset: 0; z-index: 1000;
    background: rgba(0,0,0,0.85);
    display: flex; align-items: center; justify-content: center;
    padding: 2rem;
    animation: fadeInModal 0.2s ease;
  `;

  modal.innerHTML = `
    <style>
      @keyframes fadeInModal { from { opacity: 0; } to { opacity: 1; } }
      .modal-box {
        background: #111; border: 1px solid #2a2a2a;
        max-width: 700px; width: 100%;
        max-height: 90vh; overflow-y: auto;
        position: relative;
      }
      .modal-img { width: 100%; aspect-ratio: 16/9; object-fit: cover;
        display: block; filter: grayscale(40%) brightness(0.7); }
      .modal-body { padding: 2rem; }
      .modal-tag {
        font-family: 'Share Tech Mono', monospace;
        font-size: 0.65rem; letter-spacing: 2px; text-transform: uppercase;
        background: #c8ff00; color: #000; padding: 3px 8px;
        display: inline-block; margin-bottom: 1rem;
      }
      .modal-title {
        font-family: 'Barlow', sans-serif;
        font-size: 1.6rem; font-weight: 900;
        text-transform: uppercase; color: #e8e8e8;
        margin-bottom: 0.75rem;
      }
      .modal-desc {
        font-size: 0.875rem; color: #7a7a7a;
        line-height: 1.7; margin-bottom: 1.5rem;
      }
      .modal-code-label {
        font-family: 'Share Tech Mono', monospace;
        font-size: 0.65rem; letter-spacing: 2px; color: #444;
        text-transform: uppercase; margin-bottom: 0.5rem;
      }
      .modal-code {
        background: #0a0a0a; border: 1px solid #2a2a2a;
        padding: 1.25rem; overflow-x: auto;
        font-family: 'Share Tech Mono', monospace;
        font-size: 0.78rem; color: #c8ff00;
        line-height: 1.6; white-space: pre;
      }
      .modal-close {
        position: absolute; top: 14px; right: 14px;
        background: #2a2a2a; border: none;
        color: #e8e8e8; font-size: 1rem;
        width: 32px; height: 32px;
        cursor: pointer; font-family: monospace;
        display: flex; align-items: center; justify-content: center;
      }
      .modal-close:hover { background: #c8ff00; color: #000; }
      .modal-copy {
        display: inline-block; margin-top: 1rem;
        font-family: 'Share Tech Mono', monospace;
        font-size: 0.7rem; letter-spacing: 2px;
        text-transform: uppercase; background: transparent;
        border: 1px solid #2a2a2a; color: #7a7a7a;
        padding: 8px 18px; cursor: pointer;
        transition: background 0.15s, color 0.15s;
      }
      .modal-copy:hover { background: #c8ff00; color: #000; border-color: #c8ff00; }
    </style>
    <div class="modal-box">
      <img class="modal-img" src="${script.img}" alt="${script.title}" />
      <button class="modal-close" id="modalClose">✕</button>
      <div class="modal-body">
        <div class="modal-tag">${script.tag}</div>
        <div class="modal-title">${script.title}</div>
        <div class="modal-desc">${script.desc}</div>
        <div class="modal-code-label">// Source</div>
        <pre class="modal-code" id="modalCode">${escapeHtml(script.source)}</pre>
        <button class="modal-copy" id="modalCopy">Copy Code</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  document.getElementById('modalClose').addEventListener('click', () => modal.remove());
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });

  document.getElementById('modalCopy').addEventListener('click', (e) => {
    navigator.clipboard.writeText(script.source).then(() => {
      e.target.textContent = 'Copied!';
      setTimeout(() => e.target.textContent = 'Copy Code', 2000);
    });
  });
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ── Filter Logic ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderCards('all');

  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCards(btn.dataset.filter);
    });
  });
});
