const timeButtons = document.querySelectorAll('.price__time-button');
const tariffsCards = document.querySelectorAll('.price__tariffs-item');
let timeActiveButton;

const personalTrainerPrice = 5000;
const daytimePrice = 1700;
const allDayPrice = 2700;

function getActiveButton() {
  timeActiveButton = document.querySelector('.price__time-button--active');
}

timeButtons.forEach((button) => {
  button.addEventListener('click', (evt) => {
    getActiveButton();

    if (evt.target !== timeActiveButton) {
      timeActiveButton.classList.remove('price__time-button--active');
      evt.target.classList.add('price__time-button--active');

      const time = evt.target.getAttribute('data-time');

      tariffsCards.forEach((item) => {
        const tariff = item.getAttribute('data-name');
        const price = item.querySelector('.price__tariffs-price');
        const priceBg = item.querySelector('.price__tariffs-price-bg');

        switch (tariff) {
          case 'personal-trainer':
            price.textContent = (personalTrainerPrice * time);
            break;
          case 'daytime':
            price.textContent = (daytimePrice * time);
            break;
          case 'all-day':
            price.textContent = (allDayPrice * time);
            break;
        }

        priceBg.textContent = price.textContent;
      });
    }
  });
});
