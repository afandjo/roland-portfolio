document.addEventListener('DOMContentLoaded', function () {
  // ===== Bouton "À propos" / "Parcours" =====
  const btnParcours = document.getElementById('btn-parcours');
  const sectionParcours = document.getElementById('parcours');

  if (btnParcours && sectionParcours) {
    btnParcours.addEventListener('click', function () {
      sectionParcours.classList.remove('hidden');
      animateSection(sectionParcours);
      sectionParcours.scrollIntoView({ behavior: 'smooth' });
      this.style.display = 'none';
    });
  }

  // ===== Formulaire de contact =====
  const formContact = document.getElementById('formulaire-contact');
  const msgFormulaire = document.getElementById('msg-formulaire');

  if (formContact && msgFormulaire) {
    formContact.addEventListener('submit', function (e) {
      e.preventDefault();
      msgFormulaire.style.display = 'block';

      setTimeout(() => {
        msgFormulaire.style.display = 'none';
      }, 5000);

      this.reset();
    });
  }

  // ===== Menu responsive =====
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // ===== Navigation animée ligne par ligne =====
  const links = document.querySelectorAll('.nav-links a');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      links.forEach(l => l.classList.remove('active'));
      this.classList.add('active');

      if (navLinks) navLinks.classList.remove('active');

      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        animateSection(targetSection);
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ===== Fonction animation ligne par ligne =====
  function animateSection(section) {
    const elements = section.querySelectorAll('.ligne');
    elements.forEach((el, index) => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(-20px)';
      el.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
      setTimeout(() => {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }, 100);
    });
  }

  // ===== Animation initiale de la section Accueil =====
  const accueil = document.getElementById('accueil');
  if (accueil) {
    animateSection(accueil);
  }
});
