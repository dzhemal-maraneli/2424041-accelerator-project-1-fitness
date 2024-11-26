const filterButtons = document.querySelectorAll('.faq__theme-button');
const questionsLists = document.querySelectorAll('.faq__accordion');

function questionsFilter() {
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-theme');
      const activeList = document.querySelector('.faq__accordion--active');

      questionsLists.forEach((list) => {
        const listTag = list.getAttribute('data-name');

        if (listTag === filter) {
          activeList.classList.remove('faq__accordion--active');
          list.classList.add('faq__accordion--active');
        }
      });
    });
  });
}

questionsFilter();
