class UI {
  constructor() {
    this.post = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.id = document.querySelector('#id');
    this.postSubmit = document.querySelector('.post.submit');
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

  clearAlert() {
    // look for the alert class
    const currentAlert = document.querySelector('.alert');
    // If there is an alert class, then remove it
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearFields() {
    this.titleInput.value = '';
    this.bodyInput.value = '';
  }
}

export const ui = new UI();