const accordionButtons = document.querySelectorAll('.faq__accordion-button');
const questionsLists = document.querySelectorAll('.faq__accordion');

function accordionHandler() {
  questionsLists.forEach((list) => {
    const firstItem = list.querySelector('.faq__accordion-item');
    const firstItemButton = firstItem.querySelector('.faq__accordion-button');

    firstItem.classList.add('faq__accordion-item--active');
    firstItemButton.classList.add('faq__accordion-button--active');
  });

  accordionButtons.forEach((button) => {
    const item = button.closest('.faq__accordion-item');

    setHeight(item);

    button.addEventListener('click', (evt) => {
      const currentItem = evt.target.closest('.faq__accordion-item');

      button.classList.toggle('faq__accordion-button--active');
      currentItem.classList.toggle('faq__accordion-item--active');

      setHeight(currentItem);
    });
  });
}

function setHeight(item) {
  const itemContent = item.querySelector('div:nth-child(2)');

  if (item.classList.contains('faq__accordion-item--active')) {
    itemContent.style.maxHeight = `${itemContent.scrollHeight}px`;
  } else {
    itemContent.style.maxHeight = 0;
  }
}

accordionHandler();
