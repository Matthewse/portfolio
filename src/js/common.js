const helloText = document.querySelector('.title__hello');
const titleText = document.querySelector('.title__text');
const titleDescription = document.querySelector('.title__description');
const scrollDown = document.querySelector('.scroll-down');

const addVisibleClass = () => {
   helloText.classList.add('title__hello-visible');
   titleText.classList.add('title__text-visible');
   titleDescription.classList.add('title__description-visible');
   scrollDown.classList.add('scroll-down-visible');
}

history.pushState('', document.title, window.location.pathname);

document.addEventListener('DOMContentLoaded', addVisibleClass());