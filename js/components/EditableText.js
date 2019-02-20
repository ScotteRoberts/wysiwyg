export default class EditableText extends HTMLElement {
  constructor() {
    super();

    this.toggleActive = this.toggleActive.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
      <button type="button" class="edit-button">Edit</button>
      <button type="button" class="save-button">Save</button>
      <p class="text-element">Go ahead, edit me however you want!</p>

      <wysiwyg-editor></wysiwyg-editor>
    `;

    // DEV: all edit buttons
    this.querySelectorAll('.edit-button, .save-button').forEach(button => {
      button.addEventListener('click', this.toggleActive);
    });

    // DEV: actions up
    this.querySelector('wysiwyg-editor').addEventListener('input', this.handleInput);
  }

  /**
   * Add 'active' class to wysiwgy-editable-text
   */
  toggleActive() {
    console.log(this);
    // The "this" is the wysiwyg-editable-text
    this.classList.toggle('active');
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
