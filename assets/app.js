// Year
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('y');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Drawer logic (clean, minimal, accessible)
  const drawer = document.getElementById('drawer');
  const menuBtn = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('closeBtn');
  const backdrop = document.getElementById('backdrop');

  if (drawer && menuBtn && closeBtn && backdrop) {
    function openDrawer() {
      drawer.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false');
      menuBtn.setAttribute('aria-expanded', 'true');
      backdrop.hidden = false;
      requestAnimationFrame(() => backdrop.classList.add('show'));
      document.body.classList.add('lock');
    }

    function closeDrawer() {
      drawer.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
      menuBtn.setAttribute('aria-expanded', 'false');
      backdrop.classList.remove('show');
      window.setTimeout(() => { backdrop.hidden = true; }, 180);
      document.body.classList.remove('lock');
    }

    menuBtn.addEventListener('click', openDrawer);
    closeBtn.addEventListener('click', closeDrawer);
    backdrop.addEventListener('click', closeDrawer);

    // Close on Escape
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
    });

    // Close when clicking a link
    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));
  }

  // Theme toggle
  const themeBtn = document.getElementById('themeBtn');
  if (themeBtn) {
    const themeIcon = themeBtn.querySelector('.theme-icon');

    function setTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
      if (themeIcon) {
        themeIcon.textContent = theme === 'dark' ? '☾' : '☀︎';
      }
      const themeLabel = document.getElementById('themeLabel');
      if (themeLabel) themeLabel.textContent = theme === 'dark' ? 'Dunkel' : 'Hell';
    }

    function toggleTheme() {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      setTheme(next);
    }

    // Initialize icon based on current theme
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (themeIcon) {
      themeIcon.textContent = currentTheme === 'dark' ? '☾' : '☀︎';
    }
    const themeLabel = document.getElementById('themeLabel');
    if (themeLabel) themeLabel.textContent = currentTheme === 'dark' ? 'Dunkel' : 'Hell';

    themeBtn.addEventListener('click', toggleTheme);
  }
});
