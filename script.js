function searchLanguage() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const cards = document.querySelectorAll('.language-card');
    let found = false;

    cards.forEach(card => {
        const language = card.getAttribute('data-name').toLowerCase();
        if (language.includes(searchInput)) {
            card.style.display = 'block';
            found = true;
        } else {
            card.style.display = 'none';
        }
    });

    // Display message if no results are found
    if (!found) {
        alert("No results found");
    }
}
