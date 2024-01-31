document.addEventListener('DOMContentLoaded', fetchBooks);
function fetchBooks() {
    fetch('/books')
        .then(response => response.json())
        .then(data => displayBooks(data))
        .catch(error => console.error('Error:', error));
}
function displayBooks(books) {
    const booksDiv = document.getElementById('books');
    booksDiv.innerHTML = '';
    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.innerText = `Titel: ${book.title}, Författare: ${book.author}`;
        booksDiv.appendChild(bookDiv);
    });
}

function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    fetch('/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, author }),
    })
        .then(response => response.json())
        .then(() => {
            fetchBooks();
            document.getElementById('title').value = '';
            document.getElementById('author').value = '';
        })
        .catch(error => console.error('Error:', error));
}
