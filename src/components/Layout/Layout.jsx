import React, { Suspense } from "react";
import { Outlet } from "react-router";
import Container from "../Container";
import AppBar from "../AppBar";

export const Layout = () => {
  return (
    <Container>
      <AppBar />

      <main>
        <Suspense fallback={<h1>Завантажуємось...</h1>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
