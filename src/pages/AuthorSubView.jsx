import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router";
import { fetchBooks } from "../services/bookshelf-api";

export default function AuthorSubView({ authors }) {
  const [bookByAuthor, setBookByAuthor] = useState([]);
  const { id } = useParams();
  const author = authors.find((author) => author.id === Number(id));

  useEffect(() => {
    if (!id) return;

    const fetchBookByAuthor = async () => {
      const resp = await fetchBooks();
      const authorById = resp.filter(({ authorId }) => authorId === Number(id));
      setBookByAuthor(authorById);
    };

    fetchBookByAuthor();
  }, [id]);

  return (
    <>
      <h2>{author.name}</h2>

      {bookByAuthor.length !== 0 ? (
        <ul>
          {bookByAuthor.map((book) => (
            <li key={book.id}>
              <Link to={`/books/${book.id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>OOps something was wrong</p>
      )}

      <hr />
    </>
  );
}
