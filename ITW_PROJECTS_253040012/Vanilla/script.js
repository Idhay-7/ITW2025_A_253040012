const toggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = navMenu.querySelectorAll("a");
const contactButtons = document.querySelectorAll('.contact-actions button');

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Semua field wajib diisi!");
    return;
  }

  if (!validateEmail(email)) {
    alert("Email tidak valid!");
    return;
  }

  const toEmail = "sokhibridho@gmail.com";
  const subject = "Pesan dari Website Portfolio";

  const body =
    `Nama: ${name}\n` +
    `Email: ${email}\n\n` +
    `Pesan:\n${message}`;

  window.location.href =
    `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  form.reset();
});

function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

contactButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Isi semua kolom.');
            return;
        }

        const text =
`Name: ${name}
Email: ${email}

Message:
${message}`;

        const type = btn.dataset.type;

        if (type === 'whatsapp') {
            const phone = '+6281320022811';
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
            window.open(url, '_blank');
        }

        if (type === 'email') {
            const mail = `mailto:sokhibridho@gmail.com?subject=Portfolio Contact&body=${encodeURIComponent(text)}`;
            window.location.href = mail;
        }
    });
});
