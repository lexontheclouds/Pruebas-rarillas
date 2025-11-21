// This file is intentionally left blank.// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
  const toast = document.getElementById('toast');

  function showToast(text = 'Enlace copiado') {
    toast.textContent = text;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 1600);
  }

  // Copiar URL al portapapeles cuando se hace clic con la tecla Alt (ejemplo)
  document.querySelectorAll('.social-media-link').forEach(link => {
    link.addEventListener('click', (e) => {
      // Si el usuario mantiene ALT al hacer clic, copia la URL en vez de navegar
      if (e.altKey) {
        e.preventDefault();
        const url = link.dataset.url || link.href;
        navigator.clipboard?.writeText(url)
          .then(() => showToast('Enlace copiado'))
          .catch(() => showToast('No se pudo copiar'));
      } else {
        // Guarda el último enlace visitado
        try { localStorage.setItem('ultimoEnlace', link.href); } catch {}
      }
    });
  });
});
// ...existing code...