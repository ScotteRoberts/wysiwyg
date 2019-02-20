/**
 * Adds title to the document
 * @param {Event} event
 */
export default function addTitle(event) {
  //create element (title section)
  const newEditableHeading = document.createElement('wysiwyg-editable-heading');
  const main = document.querySelector('main');

  main.prepend(newEditableHeading);
}
