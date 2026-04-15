
// Synergetic OS - Vanilla JS Logic

document.addEventListener('DOMContentLoaded', () => {
  // Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar?.classList.remove('bg-transparent', 'py-6');
      navbar?.classList.add('bg-bg/80', 'backdrop-blur-md', 'py-3', 'border-b', 'border-border');
    } else {
      navbar?.classList.add('bg-transparent', 'py-6');
      navbar?.classList.remove('bg-bg/80', 'backdrop-blur-md', 'py-3', 'border-b', 'border-border');
    }
  });

  // Network Traffic Chart Generation
  const chartContainer = document.getElementById('traffic-chart');
  if (chartContainer) {
    const heights = [30, 50, 40, 80, 60, 90, 45, 70, 55, 85, 40, 95];
    heights.forEach((h, i) => {
      const bar = document.createElement('div');
      bar.className = 'flex-1 bg-accent-secondary/60 rounded-t-sm transition-all duration-1000 ease-out';
      bar.style.height = '0%';
      chartContainer.appendChild(bar);
      
      // Animate height
      setTimeout(() => {
        bar.style.height = `${h}%`;
      }, 100 + (i * 50));
    });
  }

  // Progress Bar Animation
  const progressFills = document.querySelectorAll('.progress-fill');
  progressFills.forEach((fill, i) => {
    const targetWidth = (fill as HTMLElement).style.width;
    (fill as HTMLElement).style.width = '0%';
    setTimeout(() => {
      (fill as HTMLElement).style.width = targetWidth;
    }, 500 + (i * 200));
  });
});
