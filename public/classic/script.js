document.addEventListener("DOMContentLoaded", () => {

    // ===== IMPLEMENTACIÓN 1: SCROLL SUAVE PARA LINKS INTERNOS =====
    // Intercepta clics en anclas (#seccion) y anima el desplazamiento
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute("href"));
            if (target) target.scrollIntoView({ behavior: "smooth" });
        });
    });

    // ===== IMPLEMENTACIÓN 2: INTERSECTION OBSERVER (NAV ACTIVO + FADE-IN) =====

    // Resalta el link del navbar correspondiente a la sección visible
    const sections = document.querySelectorAll("header[id], section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove("active"));
                const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
                if (activeLink) activeLink.classList.add("active");
            }
        });
    }, { threshold: 0.4 });

    sections.forEach(section => navObserver.observe(section));

    // Aplica clase 'visible' a las secciones cuando entran al viewport
    const fadeEls = document.querySelectorAll(".fade-in");
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.15 });

    fadeEls.forEach(el => fadeObserver.observe(el));

    // ===== PLUS: FORMULARIO RÁPIDO (index.html) =====
    // Prepara un mailto con los datos del formulario y abre el cliente de correo
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const nombre = form.nombre.value.trim();
            const email = form.email.value.trim();
            const mensaje = form.mensaje.value.trim();
            const subject = encodeURIComponent(`Mensaje de ${nombre}`);
            const body = encodeURIComponent(`De: ${nombre}\nCorreo: ${email}\n\n${mensaje}`);
            window.location.href = `mailto:Estbancolombia@gmail.com?subject=${subject}&body=${body}`;
            form.reset();
        });
    }

    // ===== PLUS: FORMULARIO COMPLETO CON VALIDACIÓN (contacto.html) =====
    const formFull = document.getElementById("contact-form-full");
    if (formFull) {
        const errorDiv = document.getElementById("form-error");
        const successDiv = document.getElementById("form-success");

        formFull.addEventListener("submit", (e) => {
            e.preventDefault();
            errorDiv.hidden = true;
            successDiv.hidden = true;

            const nombre = formFull.nombre.value.trim();
            const email = formFull.email.value.trim();
            const mensaje = formFull.mensaje.value.trim();

            // Verifica que los campos obligatorios estén completos
            if (!nombre || !email || !mensaje) {
                errorDiv.textContent = "Por favor completa todos los campos obligatorios (*).";
                errorDiv.hidden = false;
                return;
            }

            // Valida formato básico de correo electrónico
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                errorDiv.textContent = "Por favor ingresa un correo electrónico válido.";
                errorDiv.hidden = false;
                return;
            }

            const asunto = formFull.asunto.value.trim() || "Contacto desde portafolio";
            const tipo = formFull.tipo.value || "General";
            const subject = encodeURIComponent(`[${tipo}] ${asunto} — ${nombre}`);
            const body = encodeURIComponent(
                `Nombre: ${nombre}\nCorreo: ${email}\nAsunto: ${asunto}\nTipo: ${tipo}\n\nMensaje:\n${mensaje}`
            );
            window.location.href = `mailto:Estbancolombia@gmail.com?subject=${subject}&body=${body}`;

            successDiv.textContent = "¡Mensaje preparado! Se abrirá tu cliente de correo.";
            successDiv.hidden = false;
            formFull.reset();
        });
    }

});
