import toggleActive from './toggleActive.js';

// DEV: all edit buttons
const editButtons = document.querySelectorAll('.edit-button, .save-button');

// DEV: adding event listeners to each edit button.
editButtons.forEach(button => {
  button.addEventListener('click', toggleActive);
});
