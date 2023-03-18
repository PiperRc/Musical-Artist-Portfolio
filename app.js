// navbar

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const navbar = document.querySelector('.navbar');
const main = document.querySelector('main');


hamburger.addEventListener('click', () => {
  if (nav.classList.contains('nav-width')) {
    nav.classList.remove('nav-width');
    navbar.classList.remove('navbar-visible');
    main.classList.remove('main-opacity');
    hamburger.classList.remove('hamburger-click');
  }
  else {
    nav.classList.add('nav-width');
    navbar.classList.add('navbar-visible');
    main.classList.add('main-opacity');
    hamburger.classList.add('hamburger-click');
  }

})
// scrolling animations for photos

const images = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting)
    if (entry.isIntersecting) observer.unobserve(entry.target)
  })
}, {
  threshold: .25,

})

images.forEach(img => {
  observer.observe(img)
})
// MAKE MODAL APPEAR AND DISAPPEAR

const shareBtn = document.querySelector('.share_link');
const modal = document.querySelector('.modal');
const container = document.querySelector('.container');

shareBtn.addEventListener('click', (e) => {

  e.preventDefault();
  if (modal.classList.contains('modal-display')) {
    modal.classList.remove('modal-display');

  }
  else {
    modal.classList.add('modal-display');
    shareBtn.style.visibility = 'hidden';
    shareBtn.style.opacity = '0';

    container.style.opacity = '.2'
  }

});


container.addEventListener('mousedown', (e) => {
  if (modal.classList.contains('modal-display') && e.target !== modal) {
    modal.classList.remove('modal-display');
    shareBtn.style.visibility = 'visible';
    shareBtn.style.opacity = '1'


    container.style.opacity = '1'

  }
});



// COPY LINK IN MODAL

const websiteLink = document.querySelector('.copy_link input');
const copyButton = document.querySelector('.copy_link button');

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(websiteLink.value);


    copyButton.innerHTML = 'Copied!'

    setTimeout(() => {
      copyButton.innerHTML = 'Copy text'
    }, 3000)

  } catch (err) {
    console.error('Failed to copy: ', err);
  }
})







