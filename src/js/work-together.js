import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.work-together-form');
const input = document.querySelector('.work-together-input');
const message = document.querySelector('.work-together-message');
const successInput = document.querySelector('.work-together-success-input');
const errorInput = document.querySelector('.work-together-error-input');
const errorMessage = document.querySelector('.work-together-error-message');
const close = document.querySelector('.work-together-close-button');
const backdrop = document.querySelector('.work-together-backdrop');
const title = document.querySelector('.work-together-modal-title');
const text = document.querySelector('.work-together-modal-text');
const emailLink = document.querySelector('.work-together-email-link');
const phoneLink = document.querySelector('.work-together-phone-link');



let emailTouched = false;

input.addEventListener('blur', () => {
  emailTouched = true;
  checkEmail();
});

function checkEmail() {
  if (!emailTouched && input.value.trim() !== '') {
    emailTouched = true;
  }

  const isEmpty = input.value.trim() === '';
  const isValid = input.validity.valid;

  if (isEmpty) {
    errorInput.style.display = 'none';
    successInput.style.display = 'none';
    input.classList.remove('input-border-error', 'input-border-success');
    return;
  }

  if (isValid) {
    errorInput.style.display = 'none';
    successInput.style.display = 'block';
    input.classList.remove('input-border-error');
    input.classList.add('input-border-success');
  } else {
    errorInput.style.display = 'block';
    successInput.style.display = 'none';
    input.classList.add('input-border-error');
    input.classList.remove('input-border-success');
  }
}

input.addEventListener('input', checkEmail);



function handleMessageInput() {
  const MESSAGE_MAX_LENGTH = 40;

  let fullText = message.value;

  if (fullText.length > MESSAGE_MAX_LENGTH) {
    message.value = fullText.slice(0, MESSAGE_MAX_LENGTH) + '...';
  }
}

message.addEventListener('blur', handleMessageInput);



function clearErrorOnInput(inputEl, errorEl) {
  inputEl.addEventListener('input', () => {
    if (inputEl.value.trim() !== '') {
      errorEl.style.display = 'none';
      inputEl.classList.remove('input-border-error');
    }
  });
}

clearErrorOnInput(input, errorInput);
clearErrorOnInput(message, errorMessage);



function clearFormState() {
    input.classList.remove('input-border-success');
    input.classList.remove('input-border-error');
    message.classList.remove('input-border-error');
    errorInput.style.display = 'none';
    successInput.style.display = 'none';
}



form.addEventListener('submit', event => {
    event.preventDefault();   

    if (input.value.trim() === '') {
        errorInput.style.display = 'block';
        errorInput.textContent = 'the field must be filled';
        input.classList.add('input-border-error');
    } 

    if (message.value.trim() === '') {
        errorMessage.style.display = 'block';
        message.classList.add('input-border-error');
        return;
    } 

    if (input.value.trim() !== '' && message.value.trim() !== '') {
      axios
        .post('https://portfolio-js.b.goit.study/api/requests', {
          email: input.value,
          comment: message.value,
        })
        .then(response => {
          backdrop.classList.add('backdrop-opened');
          document.body.style.overflow = 'hidden';

          title.textContent = response.data.title;
          text.textContent = response.data.message;

          form.reset();
        })
        .catch(error => {
          iziToast.error({
            title: 'Error',
            message: error.response.data.error || 'Something went wrong',
            position: 'center',
          });
        })
        .finally(() => {
          clearFormState();
        })
    }
}) 
    


function closeModal() {
  setTimeout(() => {
    backdrop.classList.remove('backdrop-opened');
    document.body.style.overflow = 'auto';
    
    if (document.activeElement) {
      document.activeElement.blur();
    }
  }, 150);

  form.reset();
  clearFormState();
}

close.addEventListener('click', closeModal);

window.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    closeModal();
  }
});

backdrop.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
});



emailLink.addEventListener('click', () => {
  emailLink.blur();
});

phoneLink.addEventListener('click', () => {
  phoneLink.blur();
});