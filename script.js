document.querySelector('.fa-solid').addEventListener('click', function () {
    const searchInput = document.querySelector('.search-input');
    if (searchInput.classList.contains('show')) {
        searchInput.classList.remove('show');
    } else {
        searchInput.classList.add('show');
        searchInput.focus();
    }
});