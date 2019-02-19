/**
 * When fired, updated text (not style) of sibling '.text-element'
 * @param {Event} event
 */
export default function handleEditorInput(event) {
  if (event.target.type === 'text' || event.target.tagName === 'TAGNAME') {
    const textElement = event.currentTarget.parentNode.querySelector('.text-element');
    const text = event.target.value;
    textElement.innerText = text;
  }
}
