import "./App.css";
import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./constants/routes";
import Loader from "./components/Global/Loader";
import ScrollToTop from "./components/Global/ScrollToTop";
import Lenis from "@studio-freight/lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2, // default is 1.2, lower = faster, higher = smoother
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom ease (smooth acceleration/deceleration)
      direction: "vertical", // or 'horizontal'
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: true, // can set to true for smoother touch scroll
      touchMultiplier: 1.5, // increases touch scroll sensitivity
      infinite: false, // enable infinite scrolling if desired
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
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
