const accordionWrapper = document.querySelector('.faq__accordion-wrapper');
const accordionLists = document.querySelectorAll('.faq__accordion');
const accordionButtons = document.querySelectorAll('.faq__accordion-button');

function accordionItemHandler() {
  firstItemOpener();

  accordionButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
      const currentItem = evt.target.closest('.faq__accordion-item');
      accordionWrapper.style.height = null;

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

function firstItemOpener() {
  accordionLists.forEach((list) => {
    const firstItem = list.querySelector('.faq__accordion-item');
    const firstItemButton = firstItem.querySelector('.faq__accordion-button');

    firstItem.classList.add('faq__accordion-item--active');
    firstItemButton.classList.add('faq__accordion-button--active');
    setHeight(firstItem);
  });
}

accordionItemHandler();

