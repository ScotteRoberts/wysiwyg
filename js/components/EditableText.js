export default class EditableText extends HTMLElement {
  // getter/setter active
  get active() {
    return this.hasAttribute('active');
    // can call this.active to use later in code.
  }

  set active(isActive) {
    if (isActive) {
      this.setAttribute('active', '');
    } else {
      this.removeAttribute('active');
    }

    // can call this.active = "something"
  }

  constructor() {
    super();

    this.toggleActive = this.toggleActive.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <button type="button" class="delete-button">Delete</button>
      <button type="button" class="edit-button">Edit</button>
      <button type="button" class="save-button">Save</button>
      <p class="text-element">Go ahead, edit me however you want!</p>

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
    const editableText = event.target.parentNode;
    console.log(editableText);
    editableText.parentNode.removeChild(editableText);
  }

  /**
   * Add 'active' class to wysiwgy-editable-text
   */
  toggleActive() {
    // this.classList.toggle('active');
    // this.setAttribute('active', '');
    // this.getAttribute('active'); // ''
    // this.hasAttribute('active'); // true or false
    this.active = !this.active;
  }

  /**
   * When fired, updated text (not style)
   * @param {Event} event
   */
  handleInput(event) {
    const textElement = this.querySelector('.text-element');
    if (event.target.type === 'text' || event.target.tagName === 'TEXTAREA') {
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
}
