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