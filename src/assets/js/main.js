
async function loadComponent(id, name) {
    const container = document.getElementById(id);
    if (!container) return;
  
    // Load HTML
    const html = await fetch(`/components/${name}/${name}.html`).then(res => res.text());
    container.innerHTML = html;
  
    // Load CSS
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = `/components/${name}/${name}.css`;
    document.head.appendChild(css);
  
    // Load JS
    try {
      const module = await import(`/components/${name}/${name}.js`);
      if (module.init) module.init(container);
    } catch {
      console.warn(`Component "${name}" has no JS (optional)`);
    }
  }
  
  document.addEventListener('DOMContentLoaded', async () => {
    const components = document.querySelectorAll('[data-component]');
    for (const el of components) {
      const name = el.getAttribute('data-component');
      await loadComponent(el.id || name + '-container', name);
    }
  });

