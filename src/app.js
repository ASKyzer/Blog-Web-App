import { http } from './http';

document.addEventListener('DOMContentLoaded', getPosts);

function getPosts() {
  http.get('http://localhost:3000/posts')
    .then(data => console.log(data))
    .catch(err => console.log(err));
    
}

// const greeting = 'Hello World';
// console.log(greeting);

// const getData = async (url) => {
//   const response = await fetch(url);
//   const result = await response.json();
//   console.log(result);
// };

// getData('https://blogging-web-app-38b4a.firebaseio.com/posts');
