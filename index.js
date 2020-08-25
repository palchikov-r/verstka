let hideButton = document.getElementById('hide');

let hideState = false;

hideButton.addEventListener('click', () => {
    hideState = !hideState;
    console.log(hideState);
    const content = document.querySelector('.footerText div:first-child');
    const arrow = document.querySelector('p i');
    arrow.className = `fa fa-angle-${hideState ? 'down' : 'up'}`;
    content.classList.toggle('hidden');
})