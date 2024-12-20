import "./App.css";
import { Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./constants/routes";
import Loader from "./components/Global/Loader";
import ScrollToTop from "./components/Global/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map((route, index) => (
            <Route path={route.url} element={route.page} key={index} />
          ))}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
