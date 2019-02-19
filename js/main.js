import toggleActive from './toggleActive.js';
import handleEditorInput from './handleEditorInput.js';

// DEV: all edit buttons
const editButtons = document.querySelectorAll('.edit-button, .save-button');

// DEV: adding event listeners to each edit button.
editButtons.forEach(button => {
  button.addEventListener('click', toggleActive);
});

// DEV: listen for "input" events from editor
document.querySelectorAll('.editor').forEach(editor => {
  editor.addEventListener('input', handleEditorInput);
});
