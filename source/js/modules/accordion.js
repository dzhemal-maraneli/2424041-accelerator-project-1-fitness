const accordionButtons = document.querySelectorAll('.faq__accordion-button');
// const accordionItems = document.querySelectorAll('.faq__accordion-item');

function accordionHandler() {
  accordionButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
      const item = evt.target.closest('.faq__accordion-item');
      const itemText = item.querySelector('p');
      // const contentHeight = `${itemText.scrollHeight}px`;

      button.classList.toggle('faq__accordion-button--active');
      item.classList.toggle('faq__accordion-item--active');
      // itemText.style.maxHeight = contentHeight;
    });
  });
}

accordionHandler();
