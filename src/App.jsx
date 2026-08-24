import { lazy, useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import * as bookShelfAPI from "./services/bookshelf-api";
import { Layout } from "./components/Layout/Layout";

const HomePage = lazy(() => import("./pages/HomeView"));
const AuthorsPage = lazy(
  () => import("./pages/AuthorsView" /* webpackChunkName: "authors-view" */),
);
const AuthorSubView = lazy(
  () => import("./pages/AuthorSubView" /* webpackChunkName: "authors-view" */),
);
const BooksView = lazy(() => import("./pages/BooksView"));
const BookDetailsView = lazy(() => import("./pages/BookDetailsView"));
const NotFoundPage = lazy(() => import("./pages/NotFoundView"));
const TablePage = lazy(() => import("./pages/TableView"));

export default function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    bookShelfAPI.fetchAuthors().then(setAuthors);
  }, []);

  //! crypto.randomUUID() заміняє nanoid()

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="authors" element={<AuthorsPage authors={authors} />} />

        <Route
          path={`authors/:id`}
          element={<AuthorSubView authors={authors} />}
        />

        <Route path="books" element={<BooksView />} />

        <Route
          path="books/:bookId"
          element={<BookDetailsView authors={authors} />}
        />

        <Route path="table" element={<TablePage />}>
          <Route
            path="info"
            element={
              <div>
                <h2>Info</h2>
              </div>
            }
          />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
