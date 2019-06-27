const opaqueText = document.querySelectorAll('p');

const bgImage = document.querySelector('.wrapper');

opaqueText.forEach( elem => elem.addEventListener('mouseover', function() {
    elem.style.fontWeight = '900';
    bgImage.opacity = 0.5;
}));

opaqueText.forEach( elem => elem.addEventListener('mouseleave', function() {
    elem.style.fontWeight = 'normal';
}));
