import "./App.css";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./constants/routes";
import Loader from "./components/Global/Loader";
import ThemeToggler from "./components/Global/ThemeToggler";
import ScrollToTop from "./components/Global/ScrollToTop";

function App() {
  return (
    <>
      {/* <ThemeToggler /> */}
      {/* <ScrollToTop /> */}
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map((route, index) => {
            return <Route path={route.url} element={route.page} key={index} />;
          })}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
