/**
 * Add 'active' class to target parent's element
 * @param {Event} event
 */
export default function toggleActive(event) {
  const editableText = event.target.parentElement;
  editableText.classList.toggle('active');
}
