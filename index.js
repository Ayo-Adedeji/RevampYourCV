
  document.addEventListener("DOMContentLoaded", function () {
    const sidebar  = document.getElementById("sidebar");
    const overlay  = document.getElementById("overlay");
    const openBtn  = document.getElementById("openSidebar");
    const closeBtn = document.getElementById("closeSidebar");
    const links    = sidebar.querySelectorAll("a[href^='#']");

    openBtn.addEventListener("click", function (e) {
      e.preventDefault();
      sidebar.classList.add("show");
      overlay.classList.add("show");
    });

    closeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      sidebar.classList.remove("show");
      overlay.classList.remove("show");
    });

    overlay.addEventListener("click", function () {
      sidebar.classList.remove("show");
      overlay.classList.remove("show");
    });

    links.forEach(link => {
      link.addEventListener("click", () => {
        sidebar.classList.remove("show");
        overlay.classList.remove("show");
      });
    });
  });

// window.addEventListener("scroll", function(){
//     const navBar = document.querySelector("nav")
// if (window.scrollY > 50) {
//     navBar.stye.padding = "40px";
//     navBar.style.opacity = "0.7";
// } else{
//     navBar.styele.padding = "80px"
//     navBar.style.opacity = "1"
// }
// })
const professions = ["Computer Scientist,", "Tutor,", "Mathematician."];
const typingSpeed = 100;
const eraseTyping = 50;
const delay = 1500;
let index = 0;
let counting = 0;
let isDeleting = false;



const textElement = document.querySelector(".typewriter")
function type() {
    const current = professions[index];
    if (!isDeleting) {
        textElement.textContent = current.substring(0, counting++);
        if (counting > current.length) {
            isDeleting = true;
            setTimeout(type, delay);
            return;
        }
    } else {
        textElement.textContent = current.substring(0, counting--);
        if (counting < 0) {
            isDeleting = false;
            if (index < professions.length - 1) {
                index++;
            } else {
                index = 0;
            }
        }
    }
    setTimeout(type, delay ? eraseTyping : typingSpeed);

}





document.addEventListener("DOMContentLoaded", function () {
    if (professions.length) type();
});

const first = document.querySelector(".about");

window.addEventListener("scroll", () => {
  const firstTop = first.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (firstTop < windowHeight - 100) {
    first.classList.add("visible");
  }
});
const edu = document.querySelector(".education");

window.addEventListener("scroll", () => {
  const eduTop = edu.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (eduTop < windowHeight - 100) {
    edu.classList.add("visible");
  }
});
const education = document.querySelector(".timeline-container");

window.addEventListener("scroll", () => {
  const educationTop = education.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (educationTop < windowHeight - 100) {
    education.classList.add("visible");
  }
});

const list = document.querySelector(".list-container");

window.addEventListener("scroll", () => {
  const listTop = list.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (listTop < windowHeight - 100) {
    list.classList.add("visible");
  }
});

  document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); 
        }
      });
    });

    const proSection = document.querySelector('.pro');
    observer.observe(proSection);
  });

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    setTimeout(() => {
      history.replaceState(null, "", window.location.pathname);
    }, 1000); 
  });
});

















