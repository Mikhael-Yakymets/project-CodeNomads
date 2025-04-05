import axios from 'axios';
import iziToast from 'izitoast';

const form = document.querySelector('.work-together-form');
const input = document.querySelector('.work-together-input');
const message = document.querySelector('.work-together-message');
const errorInput = document.querySelector('.work-together-error-input');
const errorMessage = document.querySelector('.work-together-error-message');
const close = document.querySelector('.work-together-close-button');
const backdrop = document.querySelector('.work-together-backdrop');
const title = document.querySelector('.work-together-modal-title');
const text = document.querySelector('.work-together-modal-text');
const emailLink = document.querySelector('.email-link');
const phoneLink = document.querySelector('.phone-link');



let emailTouched = false;

input.addEventListener('blur', () => {
  emailTouched = true;
  checkEmail();
});

function checkEmail() {
  if (!emailTouched) return; 

  if (input.validity.valid) {
    errorInput.style.display = 'none';
  } else {
    errorInput.style.display = 'block';
  }
}

input.addEventListener('input', checkEmail);



form.addEventListener('submit', event => {
    event.preventDefault();   

    if (input.value.trim() === '') {
        errorInput.style.display = 'block';
        errorInput.textContent = 'the field must be filled';
    } 

    if (message.value.trim() === '') {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
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
                    message: error.message,
                    position: 'center',
                });
        })
    }
}) 
    


function closeModal() {
  setTimeout(() => {
    backdrop.classList.remove('backdrop-opened');
    document.body.overflow = 'auto';
  }, 150);
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