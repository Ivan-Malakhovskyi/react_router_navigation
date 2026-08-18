import { useParams, Link } from "react-router";

export default function AuthorSubView({ authors }) {
  const { authorId } = useParams();
  const author = authors.find((author) => author.id === Number(authorId));

  return (
    <>
      <h2>{author.name}</h2>

      {authors.length !== 0 ? (
        <ul>
          {author.books.map((book) => (
            <li key={book.id}>
              <Link to={`/books/${book.id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>OOps something was wrong</p>
      )}
    </>
  );
}
