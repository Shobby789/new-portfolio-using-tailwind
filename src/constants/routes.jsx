import { lazy } from "react";
import Layout from "../Layout";

const Home = lazy(() => import("../pages/Home"));
const AboutMe = lazy(() => import("../pages/AboutMe"));
const Portfolio = lazy(() => import("../pages/Portfolio"));
const Contact = lazy(() => import("../pages/Contact"));

export const routes = [
  {
    titke: "Home Page",
    url: "/",
    page: <Layout children={<Home />} />,
  },
  {
    titke: "About Page",
    url: "/about",
    page: <Layout children={<AboutMe />} />,
  },
  {
    titke: "Portfolio Page",
    url: "/portfolio",
    page: <Layout children={<Portfolio />} />,
  },
  {
    titke: "Contact Page",
    url: "/contact",
    page: <Layout children={<Contact />} />,
  },
];
