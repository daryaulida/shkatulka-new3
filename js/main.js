document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".dot");
  const nextArrow = document.querySelector(".hero-arrow.next");
  const prevArrow = document.querySelector(".hero-arrow.prev");

  if (slides.length && dots.length && nextArrow && prevArrow) {
    let index = 0;

    function showSlide(i) {
      slides.forEach((s) => s.classList.remove("active"));
      dots.forEach((d) => d.classList.remove("active"));
      slides[i].classList.add("active");
      dots[i].classList.add("active");
    }

    nextArrow.addEventListener("click", () => {
      index = (index + 1) % slides.length;
      showSlide(index);
    });

    prevArrow.addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
    });

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        index = i;
        showSlide(index);
      });
    });
  }

  const collections = document.querySelector(".collections-slider");

  if (collections && typeof Swiper !== "undefined") {
    new Swiper(collections, {
      slidesPerView: 4,
      spaceBetween: 24,
      grabCursor: true,
      navigation: {
        nextEl: ".collections-arrow.next",
        prevEl: ".collections-arrow.prev",
      },
      pagination: {
        el: ".collections-pagination",
        clickable: true,
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      },
    });
  }

const reviews = document.querySelector(".reviews-slider");

if (reviews && typeof Swiper !== "undefined") {
  new Swiper(reviews, {
    slidesPerView: 1,
    spaceBetween: 24,
    grabCursor: true,
    navigation: {
      nextEl: ".reviews-arrow.next",
      prevEl: ".reviews-arrow.prev",
    },
    pagination: {
      el: ".reviews-pagination",
      clickable: true,
    },
    breakpoints: {
      481: { slidesPerView: 2 }, // строго после 480
    },
  });
}

const patternsSlider = document.querySelector(".patterns-drop__slider");

if (patternsSlider && typeof Swiper !== "undefined") {
  new Swiper(patternsSlider, {
    slidesPerView: 1,
    spaceBetween: 24,
    grabCursor: true,

    navigation: {
      nextEl: ".patterns-drop__arrow.next",
      prevEl: ".patterns-drop__arrow.prev",
    },

    pagination: {
      el: ".patterns-drop__pagination",
      clickable: true,
    },

    breakpoints: {
      481: { slidesPerView: 2 }, // строго как reviews
    },
  });
}

  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".mobile-menu");
  const overlay = document.querySelector(".menu-overlay");
  const closeBtn = document.querySelector(".menu-close");

  if (burger && menu && overlay && closeBtn) {
    burger.addEventListener("click", () => {
      menu.classList.add("open");
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";
    });

    closeBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);

    function closeMenu() {
      menu.classList.remove("open");
      overlay.classList.remove("open");
      document.body.style.overflow = "";
    }
  }

  const tabs = document.querySelectorAll(".menu-tab");
  const panels = document.querySelectorAll(".menu-panel");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));

      panels.forEach((p) => p.classList.remove("active"));

      tab.classList.add("active");
      panels[index].classList.add("active");
    });
  });

  const headerMoreBtn = document.querySelector(".header-more");
  const headerMoreMenu = document.querySelector(".header-more-menu");

  if (headerMoreBtn && headerMoreMenu) {
    const closeMoreMenu = () => {
      headerMoreBtn.classList.remove("is-active");
      headerMoreMenu.classList.remove("is-open");
    };

    headerMoreBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      const willOpen = !headerMoreMenu.classList.contains("is-open");

      if (willOpen) {
        headerMoreBtn.classList.add("is-active");
        headerMoreMenu.classList.add("is-open");
      } else {
        closeMoreMenu();
      }
    });

    document.addEventListener("click", (event) => {
      if (!headerMoreMenu.classList.contains("is-open")) return;
      if (headerMoreMenu.contains(event.target)) return;
      if (headerMoreBtn.contains(event.target)) return;
      closeMoreMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        closeMoreMenu();
      }
    });
  }
});
