import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Outlet, Route, Routes } from "react-router";
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";
import * as bookShelfAPI from "./services/bookshelf-api";

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
    <Container>
      <AppBar />

      <Suspense fallback={<h1>Завантажуємось...</h1>}>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="authors" element={<AuthorsPage authors={authors} />} />

            <Route
              path={`/authors/:id`}
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
          </Routes>
        </main>
      </Suspense>
    </Container>
  );
}
