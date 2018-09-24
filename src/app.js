import { http } from './http';
import { ui } from './ui';

// Get Post on load
document.addEventListener('DOMContentLoaded', getPosts);

// EVENT LISTENERS

// Listen for submit post button click
document.querySelector('#post-submit').addEventListener('click', submitPost);

// Listen for update post button click

// Listen for edit post button click

// Listen for delete post button click
document.querySelector('#posts').addEventListener('click', deletePost);
// Listen for cancel edit button click

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