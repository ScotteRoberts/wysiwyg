/**
 * Adds new paragraph to document
 * @param {Event} event
 */
export default function addParagraph(event) {
  // create element (section w/ the class of 'editable-text')
  const newEditableText = document.createElement('wysiwyg-editable-text');
  // append that to main (before out button)
  document.querySelector('main').insertBefore(newEditableText, event.target);
}
