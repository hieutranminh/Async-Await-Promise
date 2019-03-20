// IMPORT AXIOS
var axios = require('axios');
// Function fetch API & return Axios => Promise
function getValue(url) {
  console.log('Data Loading');
  return axios.get(url)
}
// Array URL fake API
var urls = [
  'https://jsonplaceholder.typicode.com/comments',
  'https://jsonplaceholder.typicode.com/photos',
  'https://jsonplaceholder.typicode.com/posts',
]
// ASYNC AWAIT check time call API
async  function  getAPI () {
  console.time('start');
  try{
    let posts = await getValue('https://jsonplaceholder.typicode.com/posts');
    console.log('posts done -', posts.config.url);
    let comment = await getValue('https://jsonplaceholder.typicode.com/comments');
    console.log('comment done -', comment.config.url);
    let photos = await getValue('https://jsonplaceholder.typicode.com/photos');
    console.log('photo done -', photos.config.url);
  }catch(err){
    console.log('API Error');
  }
  console.timeEnd('start');
}
getAPI();

// PromiseAll check time call API
// function getOnce(urls){
//   console.time('start');
//   var getPromises = urls.map(url => {
//     return getValue(url);
//   });
//   Promise.all(getPromises)
//     .then(res=>{
//       console.timeEnd('start');
//       console.log('Done Promise All');
//     })
//     .catch(err=>{
//       console.log('API Error');
//     })
// }
// getOnce(urls);
