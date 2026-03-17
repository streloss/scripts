// ==========================================
//  main.js — Home page interactions
//  Source Scripts
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Typing cursor on hero label ──────────────────────────
  const label = document.querySelector('.hero-label');
  if (label) {
    const originalText = label.textContent;
    label.innerHTML = originalText + '<span class="cursor">_</span>';
    const style = document.createElement('style');
    style.textContent = `
      .cursor {
        color: var(--accent);
        animation: blink 1s step-end infinite;
      }
      @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
    `;
    document.head.appendChild(style);
  }

  // ── Stats counter animation ───────────────────────────────
  const statNums = document.querySelectorAll('.stat-num');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const raw = el.textContent;
        const hasPercent = raw.includes('%');
        const target = parseInt(raw.replace(/[^0-9]/g, ''), 10);
        let current = 0;
        const step = Math.ceil(target / 30);
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = current + (hasPercent ? '%' : '');
        }, 30);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNums.forEach(n => observer.observe(n));

  // ── Deco blocks hover parallax ───────────────────────────
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.addEventListener('mousemove', (e) => {
      const { left, top, width, height } = hero.getBoundingClientRect();
      const x = ((e.clientX - left) / width  - 0.5) * 20;
      const y = ((e.clientY - top)  / height - 0.5) * 20;
      const b1 = document.querySelector('.b1');
      const b2 = document.querySelector('.b2');
      if (b1) b1.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
      if (b2) b2.style.transform = `translate(${x * 0.9}px, ${y * 0.9}px)`;
    });
  }

});
