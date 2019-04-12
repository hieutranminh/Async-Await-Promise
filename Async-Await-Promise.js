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
// ASYNC AWAIT check time call API----------------------------
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

// PromiseAll check time call API----------------------------
function getOnce(urls){
  console.time('start');
  var getPromises = urls.map(url => {
    return getValue(url);
  });
  Promise.all(getPromises)
    .then(res=>{
      console.timeEnd('start');
      console.log('Done Promise All');
    })
    .catch(err=>{
      console.log('API Error');
    })
}
getOnce(urls);

// ASYNC AWAIT = Promise All----------------------------
async  function  getAPI () {
  console.time('start');
  try{
    let posts =  getValue('https://jsonplaceholder.typicode.com/posts');
    let comment =  getValue('https://jsonplaceholder.typicode.com/comments');
    let photos =  getValue('https://jsonplaceholder.typicode.com/photos');
    let a = [(await posts).data[0],
              (await comment).data[0],
              (await photos).data[0],
            ];
      console.log('in A');
  }catch(err){
    console.log('API Error');
  }
  console.timeEnd('start');
}
getAPI();

// ScrollX & animate jquery----------------------------
var animateFrame = false
$(document).on('touchstart', '.home__category', function () {
  animateFrame = true
})
$(document).on('touchmove', '.home__category', function () {
  animateFrame = false
})
$(document).on('click touchend', '.home__category span', function (e) {
  if (e.type === 'click') animateFrame = true
  if (animateFrame) {
    $(this).addClass('active')
    var scroller = $('.home__category')
    $('.home__category span').not($(this)).removeClass('active')
    var scrollTo = $(this).offset().left - scroller.width() / 2 + $(this).width() / 2 + scroller.scrollLeft()
    scroller.stop().animate({'scrollLeft': scrollTo}, 300)
    scroller.css('overflow-x', 'hidden')
    setTimeout(function () {
      scroller.css('overflow-x', 'auto')
    }, 100)
  }
})
