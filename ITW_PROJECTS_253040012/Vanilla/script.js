const toggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

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

  if (name === "" || email === "" || message === "") {
    alert("Semua field wajib diisi!");
    return;
  }

  if (!validateEmail(email)) {
    alert("Email tidak valid!");
    return;
  }

  const text = `Halo, saya ${name}%0AEmail: ${email}%0APesan:%0A${message}`;

  const phoneNumber = "+6281320022811";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

  const emailTo = "sokhibridho@gmail.com";
  const subject = "Pesan dari Website Portfolio";
  const mailtoURL = `mailto:${emailTo}?subject=${subject}&body=${text}`;

  window.open(whatsappURL, "_blank");
  window.location.href = mailtoURL;

  form.reset();
});