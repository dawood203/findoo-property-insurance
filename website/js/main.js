'use strict';

// All interactions are browser-local. No network, cookies or storage APIs.
const menu = document.getElementById('menu-toggle');
const navigation = document.getElementById('primary-nav');
const mobile = window.matchMedia('(max-width: 1100px)');
let menuOpen = false;
function syncMenu() {
  menu.hidden = !mobile.matches;
  navigation.hidden = mobile.matches && !menuOpen;
  menu.setAttribute('aria-expanded', String(mobile.matches && menuOpen));
}
menu.addEventListener('click', () => { menuOpen = !menuOpen; syncMenu(); });
navigation.addEventListener('click', (event) => {
  if (mobile.matches && event.target.closest('a, button')) {
    menuOpen = false;
    syncMenu();
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobile.matches && menuOpen) {
    menuOpen = false;
    syncMenu();
    menu.focus();
  }
});
mobile.addEventListener('change', () => { menuOpen = false; syncMenu(); });
syncMenu();

const dialog = document.getElementById('quote-dialog');
const category = document.getElementById('selected-category');
let quoteTrigger = null;
document.querySelectorAll('[data-quote]').forEach((button) => {
  button.addEventListener('click', () => {
    quoteTrigger = mobile.matches && navigation.contains(button) ? menu : button;
    category.textContent = button.dataset.category ? 'Exploring: ' + button.dataset.category : '';
    category.hidden = !button.dataset.category;
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
      document.getElementById('close-dialog').focus();
    } else {
      document.getElementById('how').scrollIntoView();
      window.location.hash = 'how';
    }
  });
});
document.getElementById('close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => { if (quoteTrigger) quoteTrigger.focus(); });
document.getElementById('view-journey').addEventListener('click', () => {
  dialog.close();
  window.location.hash = 'how';
  const heading = document.getElementById('how-title');
  heading.setAttribute('tabindex', '-1');
  heading.focus({ preventScroll: true });
});

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
const fields = {
  name: document.getElementById('full-name'),
  email: document.getElementById('email'),
  phone: document.getElementById('phone'),
  message: document.getElementById('message')
};
const errors = {
  name: document.getElementById('name-error'),
  email: document.getElementById('email-error'),
  phone: document.getElementById('phone-error'),
  message: document.getElementById('message-error')
};
function validate() {
  return {
    name: fields.name.value.trim() ? '' : 'Enter a fictional full name.',
    email: !fields.email.value.trim() ? 'Enter a demo email address.' :
      fields.email.validity.typeMismatch ? 'Enter a valid format, such as demo@example.com.' : '',
    phone: fields.phone.value.trim() &&
      (!/^[+\d\s().-]+$/.test(fields.phone.value.trim()) || fields.phone.value.replace(/\D/g, '').length < 7 || fields.phone.value.replace(/\D/g, '').length > 15)
      ? 'Use a fictional number with 7–15 digits; spaces, +, brackets and hyphens are allowed.' : '',
    message: fields.message.value.trim() ? '' : 'Enter a sample message without personal information.'
  };
}
function setError(key, message) {
  errors[key].textContent = message;
  errors[key].hidden = !message;
  fields[key].setAttribute('aria-invalid', String(Boolean(message)));
}
Object.keys(fields).forEach((key) => {
  fields[key].addEventListener('input', () => {
    if (fields[key].getAttribute('aria-invalid') === 'true') setError(key, validate()[key]);
    // Clear an old confirmation when beginning another enquiry.
    if (status.dataset.success === 'true') { status.textContent = ''; delete status.dataset.success; }
  });
});
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const messages = validate();
  Object.keys(fields).forEach((key) => setError(key, messages[key]));
  const invalid = Object.keys(fields).filter((key) => messages[key]);
  if (invalid.length) {
    delete status.dataset.success;
    status.classList.add('error-status');
    status.textContent = 'Please correct ' + invalid.length + (invalid.length === 1 ? ' field below.' : ' fields below.');
    fields[invalid[0]].focus();
    return;
  }
  status.classList.remove('error-status');
  status.textContent = 'Demo complete. Your sample enquiry passed local validation. Nothing was sent or saved, and no support request was created.';
  status.dataset.success = 'true';
  form.reset();
  status.focus();
});
// Attach the cancellation handler before enabling the demo submit control.
document.getElementById('submit-contact').disabled = false;
