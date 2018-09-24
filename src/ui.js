class UI {
  constructor() {
    this.post = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.id = document.querySelector('#id');
    this.postSubmit = document.querySelector('#post-submit');
    this.forState = 'add';
  }

  showPosts(posts) {
    let output = '';

    posts.forEach((post) => {
      output += `
      <div class="card mb-3">
        <div class="card-body">
          <h4 class="card-title">${post.title}</h4>
          <p class="card-text">${post.body}</p>
          <a href="#" class="edit card-link" data-id="${post.id}">
            <i class="fa fa-pencil"></i>
          </a>
          <a href="#" class="delete card-link" data-id="${post.id}">
            <i class="fa fa-remove"></i>
          </a>
        </div>
      </div>
      `;
    });
    this.post.innerHTML = output;
  }

  showAlert(message, className) {
    this.clearAlert();

    // Create div
    const div = document.createElement('div');
    // Add Classes
    div.className = className;
    // Add Text
    div.appendChild(document.createTextNode(message));
    // Get Parent
    const container = document.querySelector('.post-container');
    // Get posts to insert before
    const posts = document.querySelector('#posts');
    // Insert alert div into DOM
    container.insertBefore(div, posts);

    // Set time out for alert
    setTimeout(() => {
      this.clearAlert();
    }, 2500);
  }

  // Clear alert message 
  clearAlert() {
    // look for the alert class
    const currentAlert = document.querySelector('.alert');
    // If there is an alert class, then remove it
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear fields 
  clearFields() {
    this.titleInput.value = '';
    this.bodyInput.value = '';
  }

  // Fill form to edit
  fillForm(data) {
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.id.value = data.id;

    // Call to change form state to edit instead of add
    this.changeFormState('edit');
  }

  // Clear ID input 
  clearIdInput() {
    this.id.value = '';
  }

  changeFormState(type) {
    if (type === 'edit') {
      // Change the text of the button
        this.postSubmit.textContent = 'Update Post';
      // Change the color of the button
        this.postSubmit.className = 'btn btn-secondary btn-block';

        // Create a cancel button
        const button = document.createElement('button');
        button.className = 'post-cancel mt-1 btn btn-info btn-block';
        button.appendChild(document.createTextNode('Cancel Edit'));

        // Get Parent
        const cardForm = document.querySelector('.card-form');
        // Get Element to insert before
        const formEnd = document.querySelector('.form-end');
        //Insert cancel button
        cardForm.insertBefore(button, formEnd);
    } else {
        // Change the text of the button
        this.postSubmit.textContent = 'Add Post';
        // Change the color of the button
        this.postSubmit.className = 'btn btn-secondary btn-block';
        // Remove cancel button if there 
        if (document.querySelector('.post-cancel')) {
          document.querySelector('.post-cancel').remove();
        }
        // Clear ID from hidden field
        this.clearIdInput();
        // Clear texts
        this.clearFields();
    }
  }
}

export const ui = new UI();