document.addEventListener('DOMContentLoaded', () => {
  const pages = [
    { icon: '🗡️', url: '/p/missions.html?m=1' },
    { icon: '👥', url: '/p/contacts.html?m=1' },
    { icon: '🎒', url: '/p/inventory.html?m=1' },
    { icon: '🗺️', url: '/p/map.html?m=1' },
    { icon: '📜', url: '/p/log.html?m=1' },
    { icon: '⚙️', url: '/p/settings.html?m=1' }
  ];

  const navGrid = document.getElementById('nav-grid');
  pages.forEach(p => {
    const btn = document.createElement('button');
    btn.innerHTML = `<span>${p.icon}</span>`;
    btn.addEventListener('click', () => {
      document.getElementById('game-frame').src = p.url;
    });
    navGrid.appendChild(btn);
  });

  // Load first page by default
  if (pages.length) {
    document.getElementById('game-frame').src = pages[0].url;
  }
});
