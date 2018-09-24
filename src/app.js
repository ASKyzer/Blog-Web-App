import { http } from './http';
import { ui } from './ui';

// Get Post on load
document.addEventListener('DOMContentLoaded', getPosts);

// EVENT LISTENERS

// Listen for submit post button click
document.querySelector('#post-submit').addEventListener('click', submitPost);

// Listen for edit state
document.querySelector('#posts').addEventListener('click', enableEdit);

// Listen for delete post button click
document.querySelector('#posts').addEventListener('click', deletePost);

// Listen for cancel edit button click
document.querySelector('.form-container').addEventListener('click', cancelEdit)
// Listen for delete all posts button click



// Get Posts 
function getPosts() {
  http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data)) // call the showPosts method to show posts in UI
    .catch(err => console.log(err)); 
}

// Submit Post
function submitPost() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;

  // Make sure all fields are filled in before you can submit (Form Validations)
  if (title === '' || body === '') {
    ui.showAlert('Please fill out all fields before submitting.', 'alert alert-danger');
  } else {
    const data = {
      title,
      body
    }
  
    // Create Post
    http.post('http://localhost:3000/posts', data)
      .then(data => {
        ui.showAlert('Post Added!', 'alert alert-success');
        ui.clearFields();
        getPosts();
      })
      .catch(err => console.log(err))
  }

  
}

 // Delete Post
 function deletePost(e) {
    e.preventDefault();

    // event propogation
    if (e.target.parentElement.classList.contains('delete')) {
      // Get the id of the parent element from the dataset
      const id = e.target.parentElement.dataset.id;
      if (confirm('Are you sure?')) {
        http.delete(`http://localhost:3000/posts/${id}`)
          .then(data => {
            // Show Alert
            ui.showAlert('Post Removed', 'alert alert-success');
            // Get Posts again
            getPosts();
          })
          .catch(err => console.log(err));
        }
    }
}

// Enable Edit State
function enableEdit(e) {
  e.preventDefault();
  console.log(e.target);
  
  // event propogation 
  if (e.target.parentElement.classList.contains('edit')) {
    // Get the id of the post
    const id = e.target.parentElement.dataset.id;
    // bet the title of the post
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
    // Get the body of the post
    const body = e.target.parentElement.previousElementSibling.textContent;

    // Create data variable 
    const data = {
      id,
      title,
      body
    }
    
    // Fill the form with current post info
    ui.fillForm(data);
    // Change the add 'state' to the edit 'state'
    
    // Fill the input fields with the values
  }
}

 // Cancel Edit State 
 function cancelEdit(e) {
    if (e.target.classList.contains('post-cancel')) {
      // Change for state back to add
      ui.changeFormState('add');
      // Clear input fields
      ui.clearFields();
      // Remove edit button
      

    }
}