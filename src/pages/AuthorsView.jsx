import { useState, useEffect, lazy, Suspense } from "react";
import {
  NavLink,
  Outlet,
  Route,
  useMatch,
  useMatches,
  useParams,
  useResolvedPath,
} from "react-router";
import * as bookShelfAPI from "../services/bookshelf-api.js";
import PageHeading from "../components/PageHeading/PageHeading";
// import AuthorSubView from './AuthorSubView';

const AuthorSubView = lazy(() => import("./AuthorSubView.jsx"));

export default function AuthorsView({ authors }) {
  return (
    <>
      <PageHeading text="Автори" />

      {authors && (
        <ul>
          {authors.map((author) => (
            <li key={author.id}>
              <NavLink to={`/authors/${author.id}`}>{author.name}</NavLink>
            </li>
          ))}
        </ul>
      )}
      <hr />
    </>
  );
}
