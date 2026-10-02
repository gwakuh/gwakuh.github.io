// Temporary mobile review control. Remove this file and its build references after review.
if (window.matchMedia('(max-width: 680px)').matches) {
  const viewport = document.querySelector('meta[name="viewport"]');
  const originalViewport = viewport.content;
  const mobileWidth = document.documentElement.clientWidth;
  const desktopWidth = 1200;
  let desktop = false;

  const style = document.createElement('style');
  style.textContent = `
    .desktop-preview-toggle {
      position: fixed; z-index: 1000; right: 12px; bottom: 12px;
      min-height: 36px; padding: 6px 10px; border: 1px solid #d3d6dc;
      border-radius: 8px; background: #fff; color: #454b54;
      font: 12px system-ui, sans-serif; box-shadow: 0 2px 8px #0001;
      transform-origin: bottom right;
    }
    @media print { .desktop-preview-toggle { display: none; } }
  `;
  document.head.append(style);

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'desktop-preview-toggle';
  button.textContent = 'PC 보기';
  button.setAttribute('aria-pressed', 'false');
  button.addEventListener('click', () => {
    desktop = !desktop;
    viewport.content = desktop
      ? `width=${desktopWidth}, initial-scale=${mobileWidth / desktopWidth}`
      : originalViewport;
    button.textContent = desktop ? '모바일 보기' : 'PC 보기';
    button.setAttribute('aria-pressed', String(desktop));
    const scale = desktop ? desktopWidth / mobileWidth : 1;
    button.style.transform = `scale(${scale})`;
    button.style.right = `${12 * scale}px`;
    button.style.bottom = `${12 * scale}px`;
  });
  document.body.append(button);
}
