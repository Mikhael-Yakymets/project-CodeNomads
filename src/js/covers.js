document.addEventListener("DOMContentLoaded", function () {
    const coversSection = document.querySelector(".covers");
    const coversWrapper = document.querySelector(".covers-wrapper");
  
    if (coversSection && coversWrapper) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              coversWrapper.classList.add("scrolling");
  
              
              setTimeout(() => {
                coversWrapper.classList.add("animated");
              }, 1500); 
            } else {
              coversWrapper.classList.remove("scrolling", "animated");
            }
          });
        },
        { threshold: 0.2 }
      );
  
      observer.observe(coversSection);
    }
  });