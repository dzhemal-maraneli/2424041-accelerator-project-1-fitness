const accordionWrapper = document.querySelector('.faq__accordion-wrapper');
const accordionLists = document.querySelectorAll('.faq__accordion');
const accordionItems = document.querySelectorAll('.faq__accordion-item');

function accordionItemHandler() {
  firstItemOpener();

  accordionItems.forEach((item) => {
    item.addEventListener('click', () => {
      const currentButton = item.querySelector('.faq__accordion-button');
      accordionWrapper.style.height = null;

      currentButton.classList.toggle('faq__accordion-button--active');
      item.classList.toggle('faq__accordion-item--active');
      setHeight(item);
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

