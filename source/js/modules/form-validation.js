const form = document.querySelector('.form__box');
const namePattern = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;
const numberPattern = /^\d+$/;

const formNameInput = form.querySelector('#name');
const formNumberInput = form.querySelector('#number');
const nameError = form.querySelector('#name-error');
const numberError = form.querySelector('#number-error');

function formValidation() {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    let validName = false;
    let validNumber = false;

    if (!namePattern.test(formNameInput.value)) {
      nameError.classList.add('form__error--active');
    } else {
      validName = true;
    }

    if (!numberPattern.test(formNumberInput.value)) {
      numberError.classList.add('form__error--active');
    } else {
      validNumber = true;
    }

    if (validName && validNumber) {
      form.submit();
    }
  });

  formNameInput.addEventListener('focus', () => {
    nameError.classList.remove('form__error--active');
  });

  formNumberInput.addEventListener('focus', () => {
    numberError.classList.remove('form__error--active');
  });
}

formValidation();
