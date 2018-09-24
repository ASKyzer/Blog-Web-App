import { http } from './http';
import { ui } from './ui';

// Get Post on load
document.addEventListener('DOMContentLoaded', getPosts);

// Get Posts 
function getPosts() {
  http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data)) // call the showPosts method to show posts in UI
    .catch(err => console.log(err)); 
}

