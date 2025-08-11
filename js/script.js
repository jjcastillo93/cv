// Modo claro/oscuro + fecha de edición
(function() {
  const btn = document.getElementById('themeBtn');
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  const saved = localStorage.getItem('cv-theme');
  if (saved === 'light' || (!saved && prefersLight)) {
    document.documentElement.setAttribute('data-theme', 'light');
    btn.textContent = 'Modo oscuro';
    btn.setAttribute('aria-pressed', 'true');
  }
  btn.addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    document.documentElement.setAttribute('data-theme', isLight ? '' : 'light');
    btn.textContent = isLight ? 'Modo claro' : 'Modo oscuro';
    btn.setAttribute('aria-pressed', String(!isLight));
    localStorage.setItem('cv-theme', isLight ? 'dark' : 'light');
  });
  const elToday = document.getElementById('today');
  try {
    const now = new Date();
    elToday.textContent = now.toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch {}
})();