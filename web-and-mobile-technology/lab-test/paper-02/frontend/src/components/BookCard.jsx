function BookCard({ book, onDelete, onToggle }) {
  const formattedDate = new Date(book.createdAt).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className={`book-card ${book.available ? '' : 'borrowed'}`}>
      <div className="book-info">
        <span className="genre-badge">{book.genre}</span>
        <h3>{book.title}</h3>
        <p>
          <strong>Author:</strong> {book.author}
        </p>
        <span
          className={`status-badge ${book.available ? 'available' : 'borrowed'}`}
        >
          {book.available ? '✅ Available' : '❌ Borrowed'}
        </span>
        <p className="isbn">ISBN: {book.isbn}</p>
        <p style={{ fontSize: '0.78rem', color: '#aaa', marginTop: '4px' }}>
          Added: {formattedDate}
        </p>
      </div>

      <div className="card-actions">
        <button
          className={`btn-toggle ${book.available ? 'borrow' : 'return'}`}
          onClick={() => onToggle(book._id)}
        >
          {book.available ? 'Borrow' : 'Return'}
        </button>
        <button className="btn-delete" onClick={() => onDelete(book._id)}>
          🗑 Delete
        </button>
      </div>
    </div>
  );
}

export default BookCard;
