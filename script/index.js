// Countdown functionality
function updateCountdown() {
  const targetDate = new Date("2025-09-26T08:00:00+07:00").getTime();
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days
    .toString()
    .padStart(2, "0");
  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");

  if (distance < 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Enhanced navbar and mobile menu functionality
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".navbar-menu li a");
  const hamburger = document.getElementById("hamburger");

  if (window.scrollY > 43) {
    navbar.classList.add("scrolled");
    hamburger.classList.add("scrolled");
    navLinks.forEach((link) => {
      link.classList.add("scrolled");
    });
  } else {
    navbar.classList.remove("scrolled");
    hamburger.classList.remove("scrolled");
    navLinks.forEach((link) => {
      link.classList.remove("scrolled");
    });
  }
});

// Mobile menu toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");

  // Hamburger toggle
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");

    // Prevent scrolling when menu is open
    if (mobileMenu.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  // Close mobile menu when clicking on a link
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      mobileMenu.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      hamburger.classList.remove("active");
      mobileMenu.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // Handle touch events for better mobile interaction
  let touchStartY = 0;

  document.addEventListener(
    "touchstart",
    function (e) {
      touchStartY = e.touches[0].clientY;
    },
    { passive: true }
  );

  document.addEventListener(
    "touchend",
    function (e) {
      const touchEndY = e.changedTouches[0].clientY;
      const touchDiff = touchStartY - touchEndY;

      // Close mobile menu on swipe up
      if (mobileMenu.classList.contains("active") && touchDiff > 50) {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "";
      }
    },
    { passive: true }
  );

  // Floating social widget functionality
  const floatingWidget = document.getElementById("floatingSocialWidget");
  const trigger = document.getElementById("socialWidgetTrigger");

  trigger.addEventListener("click", function (e) {
    e.stopPropagation();
    floatingWidget.classList.toggle("expanded");
  });

  // Close widget when clicking outside
  document.addEventListener("click", function (e) {
    if (!floatingWidget.contains(e.target)) {
      floatingWidget.classList.remove("expanded");
    }
  });

  // Touch event for floating widget
  trigger.addEventListener("touchend", function (e) {
    e.preventDefault();
    e.stopPropagation();
    floatingWidget.classList.toggle("expanded");
  });

  // Toggle functionality for contact cards
  const toggleBtns = document.querySelectorAll(".toggle-btn");

  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const card = this.dataset.card;
      const level = this.dataset.level;

      // Remove active class from buttons in the same card
      const cardButtons = document.querySelectorAll(`[data-card="${card}"]`);
      cardButtons.forEach((b) => b.classList.remove("active"));

      // Add active class to clicked button
      this.classList.add("active");

      // Update content based on card type and level
      if (card === "ratoh") {
        const ratohJuknis = document.getElementById("ratohJuknis");
        const ratohWhatsApp = document.getElementById("ratohWhatsApp");

        if (level === "smp") {
          ratohJuknis.href =
            "https://drive.google.com/file/d/1cuT9Ci5uOsREFjIlBFQwJtxwD7QchT9o/view";
          ratohWhatsApp.innerHTML = `
                <svg class="contact-btn-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516z" />
                </svg>
                WhatsApp - SMP
              `;
        } else {
          ratohJuknis.href =
            "https://drive.google.com/file/d/1Cho33yT30R28KwqbR9l7Jx0f3Gt3aRKd/view";
          ratohWhatsApp.innerHTML = `
                <svg class="contact-btn-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516z" />
                </svg>
                WhatsApp - SMA
              `;
        }
      }

      if (card === "ssc") {
        const sscJuknis = document.getElementById("sscJuknis");
        const sscWhatsApp = document.getElementById("sscWhatsApp");
        const sscIcon = document.getElementById("sscIcon");

        if (level === "smp") {
          sscJuknis.href =
            "https://drive.google.com/file/d/1x-40x5NE-Kb8jzdE7gxEwR_3JKz-D22f/view";
          sscIcon.src = "style/img/icon/ssc_smp.png";
          sscWhatsApp.innerHTML = `
                <svg class="contact-btn-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516z" />
                </svg>
                WhatsApp - SMP
              `;
        } else {
          sscJuknis.href =
            "https://drive.google.com/file/d/17IphdHTBojoF8BJfWWc_rSlxtB1_Amfo/view";
          sscIcon.src = "style/img/icon/ssc_sm.png";
          sscWhatsApp.innerHTML = `
                <svg class="contact-btn-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516z" />
                </svg>
                WhatsApp - SMA
              `;
        }
      }
    });

    // Add touch event for toggle buttons
    btn.addEventListener("touchend", function (e) {
      e.preventDefault();
      this.click();
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Animation observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }, index * 100);
      }
    });
  }, observerOptions);

  // Initialize animations for contact cards
  const contactCards = document.querySelectorAll(".contact-card");
  contactCards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.8s ease-out";
    observer.observe(card);
  });

  // Initialize animations for other elements
  document
    .querySelectorAll(".feature-card, .content-card, .info-card")
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "all 0.8s ease-out";
      observer.observe(el);
    });

  // Prevent context menu and developer tools

  // Handle window resize for responsive adjustments
  let resizeTimeout;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
      // Close mobile menu on resize if open
      if (window.innerWidth > 768) {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "";
      }

      // Close floating widget on resize
      floatingWidget.classList.remove("expanded");
    }, 250);
  });

  // Enhanced touch interactions for better mobile UX
  let startY = 0;
  let startX = 0;

  document.addEventListener(
    "touchstart",
    function (e) {
      startY = e.touches[0].clientY;
      startX = e.touches[0].clientX;
    },
    { passive: true }
  );

  document.addEventListener(
    "touchmove",
    function (e) {
      // Prevent pull-to-refresh when menu is open
      if (mobileMenu.classList.contains("active")) {
        e.preventDefault();
      }
    },
    { passive: false }
  );

  // Add loading states for better UX
  document.querySelectorAll(".contact-btn, .submit-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      if (this.href || this.type === "submit") {
        this.style.opacity = "0.7";
        setTimeout(() => {
          this.style.opacity = "1";
        }, 300);
      }
    });
  });

  // Form submission handling
  const registrationForm = document.getElementById("registrationForm");
  registrationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const submitBtn = this.querySelector(".submit-btn");
    const originalText = submitBtn.innerHTML;

    // Show loading state
    submitBtn.innerHTML = "Mengirim...";
    submitBtn.disabled = true;

    // Simulate form submission (replace with actual submission logic)
    setTimeout(() => {
      alert("Pendaftaran berhasil dikirim! Kami akan menghubungi Anda segera.");
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      this.reset();
    }, 2000);
  });

  // Performance optimization: Lazy load background images
  const observerBg = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const section = entry.target;
        if (section.dataset.bg) {
          section.style.backgroundImage = `url('${section.dataset.bg}')`;
          observerBg.unobserve(section);
        }
      }
    });
  });

  // Apply lazy loading to sections with background images
  document.querySelectorAll("[data-bg]").forEach((section) => {
    observerBg.observe(section);
  });

  // Accessibility improvements
  document.addEventListener("keydown", function (e) {
    // Escape key closes mobile menu and floating widget
    if (e.key === "Escape") {
      if (mobileMenu.classList.contains("active")) {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "";
        hamburger.focus();
      }

      if (floatingWidget.classList.contains("expanded")) {
        floatingWidget.classList.remove("expanded");
        trigger.focus();
      }
    }

    // Tab navigation for mobile menu
    if (e.key === "Tab" && mobileMenu.classList.contains("active")) {
      const focusableElements = mobileMenu.querySelectorAll("a");
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  });

  // Focus management for mobile menu
  const mobileMenuFirstLink = mobileMenu.querySelector("a");
  hamburger.addEventListener("click", function () {
    if (mobileMenu.classList.contains("active")) {
      setTimeout(() => {
        mobileMenuFirstLink.focus();
      }, 100);
    }
  });

  // Improve contrast in high contrast mode
  if (window.matchMedia("(prefers-contrast: high)").matches) {
    document.body.classList.add("high-contrast");
  }

  // Handle reduced motion preferences
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.body.classList.add("reduced-motion");
  }

  // Add orientation change handler
  window.addEventListener("orientationchange", function () {
    setTimeout(() => {
      // Recalculate viewport height for mobile browsers
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    }, 500);
  });

  // Initial viewport height calculation
  document.documentElement.style.setProperty(
    "--vh",
    `${window.innerHeight * 0.01}px`
  );

  console.log("AFFESTA VOL. 1 - Website loaded successfully!");
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.onkeydown = function (e) {
  // F12
  if (e.keyCode == 123) {
    return false;
  }
  // Ctrl+Shift+I
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  // Ctrl+Shift+C
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  // Ctrl+Shift+J
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  // Ctrl+U
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};
