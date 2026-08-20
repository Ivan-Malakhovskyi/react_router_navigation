import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router";
import PageHeading from "../components/PageHeading/PageHeading";
import * as bookShelfAPI from "../services/bookshelf-api";
import { useGetAuthorByBook } from "../hooks/useGetAuthorByBook";

export default function BookDetailsView({ authors }) {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const controller = useRef(null);

  useEffect(() => {
    bookShelfAPI.fetchBookById(bookId).then(setBook);
  }, [bookId]);

  const author = useGetAuthorByBook(authors, book?.authorId);

  return (
    <>
      <PageHeading text={`Книга ${bookId}`} />

      <Link
        to="/books"
        style={{ marginBottom: "20px", display: "inline-block" }}
      >
        ⬅️ До книг
      </Link>

      {book && (
        <>
          <img src={book.imgUrl} alt={book.title} />
          <h2>{book.title}</h2>
          <p>Автор: {author.name}</p>
          <p>{book.descr}</p>
        </>
      )}
    </>
  );
}
