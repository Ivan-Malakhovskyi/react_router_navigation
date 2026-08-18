import { lazy, Suspense, useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router";
import AppBar from "./components/AppBar/AppBar";
import Container from "./components/Container/Container";
import * as bookShelfAPI from "./services/bookshelf-api";
// import HomeView from './views/HomeView';
// import AuthorsView from './views/AuthorsView';
// import BooksView from './views/BooksView';
// import BookDetailsView from './views/BookDetailsView';
// import NotFoundView from './views/NotFoundView';
// import TableView from './views/TableView';

const HomeView = lazy(() => import("./views/HomeView"));
const AuthorsView = lazy(
  () => import("./views/AuthorsView" /* webpackChunkName: "authors-view" */),
);
const AuthorSubView = lazy(
  () => import("./views/AuthorSubView" /* webpackChunkName: "authors-view" */),
);
const BooksView = lazy(() => import("./views/BooksView"));
const BookDetailsView = lazy(() => import("./views/BookDetailsView"));
const NotFoundView = lazy(() => import("./views/NotFoundView"));
const TableView = lazy(() => import("./views/TableView"));

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
        <Routes>
          <Route path="/" exact element={<HomeView />} />

          <Route path="authors" element={<AuthorsView />}>
            <Route
              path={`:authorId`}
              element={<AuthorSubView authors={authors} />}
            />
          </Route>

          <Route path="books" exact element={<BooksView />} />

          <Route path="books/:bookId" element={<BookDetailsView />} />

          <Route path="table" element={<TableView />} />

          <Route path="*" element={<NotFoundView />} />
        </Routes>

        <Outlet />
      </Suspense>
    </Container>
  );
}
