/**
 * When fired, updated text (not style) of sibling '.text-element'
 * @param {Event} event
 */
export default function handleEditorInput(event) {
  const textElement = event.currentTarget.parentNode.querySelector('.text-element');
  if (event.target.type === 'text' || event.target.tagName === 'TAGNAME') {
    const text = event.target.value;
    textElement.innerText = text;
  } else {
    const value = event.target.value;
    const styleName = event.target.name;
    const unit = event.target.dataset.unit || '';
    // handle the styles
    textElement.style[styleName] = `${value}${unit}`;
  }
}
