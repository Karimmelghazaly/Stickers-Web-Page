const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('main').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')){
    darkModeToggle.textContent = 'Switch to Light Mode';
} else{
    darkModeToggle.textContent = 'Switch to Dark Mode';
}

});

