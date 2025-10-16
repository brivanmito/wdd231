export function InitWayfinding() {
  const links = document.querySelectorAll('.navigation a');

  links.forEach(link => {
    // Compara solo el pathname (sin dominio ni hash)
    if (link.pathname === window.location.pathname) {
      link.parentElement.classList.add('current');
    } else {
      link.parentElement.classList.remove('current');
    }

    // Opcional: resaltar también al hacer click (útil si tu sitio no recarga)
    link.addEventListener('click', () => {
      links.forEach(l => l.parentElement.classList.remove('current'));
      link.parentElement.classList.add('current');
    });
  });
};
