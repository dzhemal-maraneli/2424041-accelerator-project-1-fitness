const accordionWrapper = document.querySelector('.faq__accordion-wrapper');
const accordionLists = document.querySelectorAll('.faq__accordion');
const filterButtons = document.querySelectorAll('.faq__theme-button');

function accordionFilter() {
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-theme');
      const activeList = document.querySelector('.faq__accordion--active');

      updateWrapperHeight();

      if (activeList && activeList.getAttribute('data-name') === filter) {
        return;
      }

      accordionLists.forEach((list) => {
        const listTag = list.getAttribute('data-name');

        if (listTag === filter) {
          activeList.classList.remove('faq__accordion--active');
          list.classList.add('faq__accordion--active');
          updateWrapperHeight();
        }
      });
    });
  });
}

function updateWrapperHeight() {
  const activeList = document.querySelector('.faq__accordion--active');

  if (activeList) {
    accordionWrapper.style.height = `${activeList.scrollHeight}px`;
  }
}

accordionFilter();
