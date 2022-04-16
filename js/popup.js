import { isEscEvent } from './util.js';

const Template = {
  SUCCESS_POST: document.querySelector('#success').content.querySelector('.success'),
  ERROR_POST: document.querySelector('#error').content.querySelector('.error')
};

const createPopup = (mode) => {
  const popupElement = Template[mode].cloneNode(true);

  document.body.append(popupElement);

  const closePopup = () => {
    popupElement.remove();
    document.removeEventListener('keydown', keyCloseHandler);

  };

  function keyCloseHandler(evt) {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      closePopup();
    }
  }

  popupElement.addEventListener('click', () => closePopup());
  document.addEventListener('keydown', keyCloseHandler);
};

Template.ERROR_FETCH = Template.ERROR_POST.cloneNode(true);
Template.ERROR_FETCH.querySelector('.error__message').textContent = 'Ошибка получения объявлений';
Template.ERROR_FETCH.querySelector('.error__button').textContent = 'Добавить объявление';

export { createPopup };
