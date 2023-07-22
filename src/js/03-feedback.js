import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
console.log(STORAGE_KEY);
let formData = {};

const formElement = document.querySelector('.feedback-form');

function handleSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, message },
  } = e.currentTarget;
  if (email.value === '' || message.value === '') {
    return alert('Будь-ласка заповніть всі поля');
  }
  console.log({ email: email.value, message: message.value });
  formData = {};
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function handleFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateFormFields() {
  const savedInput = localStorage.getItem(STORAGE_KEY);
  if (savedInput) {
    formData = JSON.parse(savedInput);
    for (let key in formData) {
      formElement[key].value = formData[key];
    }
  }
}

populateFormFields();
formElement.addEventListener('submit', handleSubmit);
formElement.addEventListener('input', throttle(handleFormInput, 500));
