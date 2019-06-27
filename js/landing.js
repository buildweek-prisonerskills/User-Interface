const opaqueText = document.querySelectorAll('p');

opaqueText.forEach( elem => elem.addEventListener('mouseover', function() {
    console.log('Event fired.')
    }));

