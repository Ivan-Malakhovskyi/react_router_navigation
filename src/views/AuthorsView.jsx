import { useState, useEffect, lazy, Suspense } from "react";
import {
  NavLink,
  Route,
  useMatch,
  useMatches,
  useResolvedPath,
} from "react-router";
import * as bookShelfAPI from "../services/bookshelf-api.js";
import PageHeading from "../components/PageHeading/PageHeading";
// import AuthorSubView from './AuthorSubView';

const AuthorSubView = lazy(() => import("./AuthorSubView.jsx"));

export default function AuthorsView({ authors }) {
  const { url, pathname } = useResolvedPath();

  return (
    <>
      <PageHeading text="Автори" />

      {authors && (
        <ul>
          {authors.map((author) => (
            <li key={author.id}>
              <NavLink to={`${pathname}/${author.id}`}>{author.name}</NavLink>
            </li>
          ))}
        </ul>
      )}
      <hr />

      <Suspense fallback={<h1>Завантажуємо підмаршрут...</h1>}>
        <Route path={`${pathname}/:authorId`}>
          {authors && <AuthorSubView authors={authors} />}
        </Route>
      </Suspense>
    </>
  );
}
