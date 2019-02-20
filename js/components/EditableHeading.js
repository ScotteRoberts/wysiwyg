import EditableText from './EditableText.js';

export default class EditableHeading extends EditableText {
  // static properties are available on the class itself
  static get observedAttributes() {
    return ['heading'];
  }

  // getter/setter for heading
  get heading() {
    //this.heading
    if (this.hasAttribute('heading')) {
      return this.getAttribute('heading');
    }
    return 'h1';
  }

  set heading(value) {
    this.setAttribute('heading', value);
    // element.heading = 'h2';
  }

  render() {
    this.innerHTML = `
    <button type="button" class="delete-button">Delete</button>
      <button type="button" class="edit-button">Edit</button>
      <button type="button" class="save-button">Save</button>
      <${this.heading} 
        class="text-element">Go ahead, edit me however you want!
      </${this.heading}>

      <wysiwyg-editor></wysiwyg-editor>
    `;

    // DEV: all edit buttons
    this.querySelectorAll('.edit-button, .save-button').forEach(button => {
      button.addEventListener('click', this.toggleActive);
    });
    this.querySelector('.delete-button').addEventListener('click', this.handleDelete);

    // DEV: actions up
    this.querySelector('wysiwyg-editor').addEventListener('input', this.handleInput);
  }

  handleDelete(event) {
    const editableHeading = event.target.parentNode;
    editableHeading.parentNode.removeChild(editableHeading);
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    this.render();
  }
}
