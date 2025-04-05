const wrapper = document.querySelector('.cover-wrapper');
  const lists = document.querySelectorAll('.cover-list');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        lists.forEach((list, index) => {
          list.classList.add('animate', `list-${index + 1}`);
        });
      } else {
        lists.forEach((list, index) => {
          list.classList.remove('animate', `list-${index + 1}`);
        });
      }
    });
  }, { threshold: 0.3 });

  if (wrapper) observer.observe(wrapper);
