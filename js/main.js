import handleEditorInput from './handleEditorInput.js';
import addParagraph from './addParagraph.js';

import Editor from './components/Editor.js';
import EditableText from './components/EditableText.js';
import EditableHeading from './components/EditableHeading.js';
import addTitle from './addTitle.js';

customElements.define('wysiwyg-editor', Editor);
customElements.define('wysiwyg-editable-text', EditableText);
customElements.define('wysiwyg-editable-heading', EditableHeading);

// DEV: listen for "input" events from editor
document.querySelectorAll('.editor').forEach(editor => {
  editor.addEventListener('input', handleEditorInput);
});

document.getElementById('add-button').addEventListener('click', addParagraph);

document.getElementById('add-title').addEventListener('click', addTitle);
