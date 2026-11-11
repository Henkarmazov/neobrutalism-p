(() => {
  // 1. Centered Floating Box Navbar Toggle (Titik Tiga -> Logo Ikon + Tanda Silang)
  const floatingNav = document.getElementById('floating-nav');
  const menuButton = document.getElementById('menu-toggle');
  const floatingMenu = document.getElementById('floating-menu');

  const closeMenu = () => {
    floatingNav.classList.remove('open');
    menuButton.classList.remove('active');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation menu');
  };

  menuButton.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = floatingNav.classList.toggle('open');
    menuButton.classList.toggle('active', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  });

  floatingMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (e) => {
    if (!floatingNav.contains(e.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // 2. Toolbox Marquee (11 Tools + SVG Logos)
  const tools = [
    {
      name: 'HTML5',
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#E34F26" d="M3 2h18l-1.6 18L12 22l-7.4-2L3 2z"/><path fill="#fff" d="M7 6h10l-.3 2H9l.2 2h7.3l-.7 7-3.8 1-3.8-1-.2-3h2l.1 1.5 1.9.5 1.9-.5.3-3.5H7.8L7 6z"/></svg>`
    },
    {
      name: 'CSS3',
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#1572B6" d="M3 2h18l-1.6 18L12 22l-7.4-2L3 2z"/><path fill="#fff" d="M7 6h10l-.3 2H9l.2 2h7.3l-.7 7-3.8 1-3.8-1-.2-3h2l.1 1.5 1.9.5 1.9-.5.3-3.5H7.8L7 6z"/></svg>`
    },
    {
      name: 'JavaScript',
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="3" fill="#F7DF1E"/><path d="M13 18.5c.5.8 1.1 1.2 2.1 1.2.9 0 1.4-.4 1.4-1 0-.7-.5-1-1.7-1.5-1.5-.6-2.5-1.3-2.5-2.9 0-1.4 1.1-2.5 2.9-2.5 1.3 0 2.3.5 3 1.7l-1.6 1c-.4-.7-.8-.9-1.4-.9-.6 0-.9.3-.9.7 0 .5.3.8 1.4 1.2 1.9.8 2.8 1.5 2.8 3.1 0 1.8-1.4 2.8-3.4 2.8-1.9 0-3.1-.9-3.7-2.1l1.6-.8zM5 18.6c.3.6.6 1.1 1.3 1.1.6 0 1-.3 1-1.3v-6.5h2v6.6c0 2.1-1.2 3-2.9 3-1.6 0-2.5-.8-3-1.9l1.6-1z" fill="#171717"/></svg>`
    },
    {
      name: 'TypeScript',
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="3" fill="#3178C6"/><path fill="#fff" d="M13.5 11.2v8.3H11v-8.3H7.8V9.2h8.9v2h-3.2zm4.8 8.5c-1.4 0-2.5-.5-3.2-1.4l1.4-1.5c.5.6 1.1.9 1.9.9.7 0 1.1-.3 1.1-.8 0-.5-.4-.7-1.4-1.1-1.5-.6-2.5-1.2-2.5-2.7 0-1.5 1.2-2.6 3-2.6 1.3 0 2.3.4 3 1.2l-1.3 1.5c-.5-.5-1-.7-1.7-.7-.6 0-1 .3-1 .7 0 .5.4.7 1.5 1.1 1.6.6 2.4 1.3 2.4 2.7 0 1.6-1.3 2.7-3.2 2.7z"/></svg>`
    },
    {
      name: 'React',
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="2.2" fill="#61DAFB"/><g stroke="#61DAFB" stroke-width="1.5" fill="none"><ellipse rx="10" ry="4.2" transform="matrix(1 0 0 1 12 12)"/><ellipse rx="10" ry="4.2" transform="rotate(60 12 12)"/><ellipse rx="10" ry="4.2" transform="rotate(120 12 12)"/></g></svg>`
    },
    {
      name: 'Python',
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#3776AB" d="M11.9 2C7.3 2 7.6 4 7.6 4v2.1h4.4v.7H5.8S2 6.4 2 11.9c0 5.5 3.3 5.3 3.3 5.3h2v-2.6s-.1-3.3 3.2-3.3h4.3s3.1.1 3.1-3V4.9S18.4 2 11.9 2zm-2.4 1.7c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"/><path fill="#FFD43B" d="M12.1 22c4.6 0 4.3-2 4.3-2v-2.1H12v-.7h6.2s3.8.4 3.8-5.1c0-5.5-3.3-5.3-3.3-5.3h-2v2.6s.1 3.3-3.2 3.3H9.2s-3.1-.1-3.1 3v3.4S5.6 22 12.1 22zm2.4-1.7c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"/></svg>`
    },
    {
      name: 'Node.js',
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#339933" d="M12 2L3 7.2v9.6L12 22l9-5.2V7.2L12 2zm3.7 13.4c0 1.4-1.1 2.2-2.7 2.2-1.4 0-2.3-.6-2.7-1.6l1.4-.8c.2.5.6.8 1.3.8.7 0 1.1-.3 1.1-.8v-5.4h1.6v5.6z"/></svg>`
    },
    {
      name: 'Express',
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="4" fill="#171717"/><path stroke="#fff" stroke-width="1.8" stroke-linecap="round" d="M5 8h6M5 12h5M5 16h6M14 9l5 7M19 9l-5 7"/></svg>`
    },
    {
      name: 'MySQL',
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="6" rx="8" ry="3" fill="#00758F"/><path fill="#00758F" d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path fill="#F29111" d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>`
    },
    {
      name: 'Git',
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#F05032" d="M21.6 11.1L12.9 2.4c-.5-.5-1.3-.5-1.8 0L9.2 4.3l2.3 2.3c.5-.2 1.1 0 1.5.4.4.4.6 1 .4 1.5l2.2 2.2c.5-.2 1.1 0 1.5.4.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.4-.4-.6-1-.4-1.6l-2.1-2.1v5.4c.2.1.3.2.5.3.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1.2-.2.3-.3.5-.4V9.4c-.2-.1-.3-.2-.5-.4-.4-.4-.6-1-.4-1.5L8.2 5.2 2.4 11c-.5.5-.5 1.3 0 1.8l8.7 8.7c.5.5 1.3.5 1.8 0l8.7-8.7c.5-.4.5-1.2 0-1.7z"/></svg>`
    },
    {
      name: 'Vercel',
      svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#171717" d="M12 3l10 18H2L12 3z"/></svg>`
    }
  ];

  const renderMarqueeTrack = (containerId, list) => {
    const track = document.getElementById(containerId);
    if (!track) return;
    const combined = [...list, ...list];
    track.innerHTML = combined
      .map(item => `<span class="tool-pill">${item.svg}<span>${item.name}</span></span>`)
      .join('');
  };

  renderMarqueeTrack('marquee-top', tools);
  renderMarqueeTrack('marquee-bottom', [...tools].reverse());

  // 3. Load & Loop Projects dari ./assets/project.json + Hitung Total Project
  const projectGrid = document.getElementById('project-grid');
  const projectCountEl = document.getElementById('project-count');

  const fallbackProjects = [
    {
      id: 1,
      name: 'HenVeronime',
      image: './assets/images/hen-veronime.png',
      description: 'An anime streaming platform that provides the latest shows in the best quality. Enjoy a variety of anime genres, regular updates, and easy access for a comfortable and enjoyable viewing experience.',
      date: '01 February 2026',
      skills: ['HTML', 'JavaScript', 'TypeScript'],
      url: 'https://hen-veronime.vercel.app/',
      source: 'https://github.com/Henkarmazov/hen-veronime'
    }
  ];

  const renderProjects = (projects) => {
    const list = Array.isArray(projects) ? projects : [];

    // Update jumlah Projects completed di bagian About
    if (projectCountEl) {
      projectCountEl.textContent = String(list.length);
    }

    if (!projectGrid) return;
    projectGrid.innerHTML = list.map((project, index) => {
      const isFeatured = index === 0 ? 'featured' : '';
      const tagsHtml = Array.isArray(project.skills)
        ? project.skills.map(skill => `<span>${skill}</span>`).join('')
        : '';

      return `
        <article class="project-card ${isFeatured} reveal is-visible">
          <div class="project-visual">
            <div class="project-img-frame">
              <div class="browser-bar"><i></i><i></i><i></i></div>
              <img src="${project.image}" alt="${project.name} preview" loading="lazy" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22600%22 height=%22340%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23dfff00%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22monospace%22 font-size=%2224%22 font-weight=%22bold%22 fill=%22%23171717%22>${project.name}</text></svg>'">
            </div>
          </div>
          <div class="project-info">
            <div>
              ${project.date ? `<div class="project-meta"><span>${project.date}</span></div>` : ''}
              <h3>${project.name}</h3>
              <p>${project.description}</p>
              <div class="tags">${tagsHtml}</div>
            </div>
            <div class="project-actions">
              <a class="text-link" href="${project.url}" target="_blank" rel="noopener noreferrer">
                Live Demo <span aria-hidden="true">↗</span>
              </a>
              <a class="text-link" href="${project.source}" target="_blank" rel="noopener noreferrer">
                Source Code <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');
  };

  fetch('./assets/project.json')
    .then(res => {
      if (!res.ok) throw new Error('Failed to load project.json');
      return res.json();
    })
    .then(data => renderProjects(data))
    .catch(() => renderProjects(fallbackProjects));

  // 4. Scroll Reveal Observer
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }

  // 5. Highlight Active Section di Navbar Icons
  const sections = document.querySelectorAll('main section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');
  if ('IntersectionObserver' in window) {
    const activeObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navAnchors.forEach(anchor => {
            if (anchor.getAttribute('href') === `#${entry.target.id}`) {
              anchor.setAttribute('aria-current', 'location');
            } else {
              anchor.removeAttribute('aria-current');
            }
          });
        }
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach(section => activeObserver.observe(section));
  }

  // 6. Tahun Otomatis di Footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // 7. Download CV Henkaramazov
  document.getElementById('download-cv').addEventListener('click', () => {
  const anchor = document.createElement('a');

  anchor.href = './assets/henkaramazov.pdf';
  anchor.download = 'henkaramazov.pdf';

  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
});
  
  // 8. Floating Back-to-Top Button di Kanan Bawah (Muncul Saat Scroll Sudah Sampai Bawah)
  const backToTopBtn = document.getElementById('back-to-top');
  const checkScrollBottom = () => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const bottomThreshold = document.documentElement.scrollHeight - 160;
    if (scrollPosition >= bottomThreshold) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  };
  window.addEventListener('scroll', checkScrollBottom, { passive: true });
  checkScrollBottom();
})();
