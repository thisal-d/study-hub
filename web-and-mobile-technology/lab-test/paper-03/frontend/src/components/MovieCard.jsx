// Helper component: converts a 1-10 rating into ⭐ stars (out of 5)
function StarRating({ rating }) {
  // Convert 1-10 scale to 1-5 stars, rounded to nearest integer
  const stars = Math.round(rating / 2);
  const empty = 5 - stars;

  return (
    <div className="stars">
      {'⭐'.repeat(stars)}
      {'☆'.repeat(empty)}
      <small>{rating}/10</small>
    </div>
  );
}

function MovieCard({ movie, onDelete, onToggleWatched }) {
  return (
    <div className={`movie-card ${movie.watched ? 'watched' : ''}`}>
      <div className="movie-info">
        <span className="genre-badge">{movie.genre}</span>
        <h3>{movie.title} ({movie.releaseYear})</h3>
        <p>
          <strong>Director:</strong> {movie.director}
        </p>
        <StarRating rating={movie.rating} />
        <span className={`watched-badge ${movie.watched ? 'yes' : 'no'}`}>
          {movie.watched ? '✅ Watched' : '⏳ In Watchlist'}
        </span>
      </div>

      <div className="card-actions">
        <button className="btn-watched" onClick={() => onToggleWatched(movie._id)}>
          {movie.watched ? 'Mark Unwatched' : 'Mark Watched'}
        </button>
        <button className="btn-delete" onClick={() => onDelete(movie._id)}>
          🗑 Delete
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
