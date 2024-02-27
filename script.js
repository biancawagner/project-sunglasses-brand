let ul = document.querySelector('nav ul');
let responsiveNav = document.querySelector('.responsivenav i');
let links = document.querySelectorAll('nav ul a');

function toggleMenu() {
  if (ul.classList.contains('open')) {
    ul.classList.remove('open');
  } else {
    ul.classList.add('open');
  }
}

ul.addEventListener('mouseleave', function() {
  ul.classList.remove('open');
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function() {
    toggleMenu();
  });
}
