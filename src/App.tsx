import { Component, lazy } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import Footer from "./components/footer/Footer";

import Navbar from "./components/navbar/Navbar";
import Car from "./components/Car";

const App: Component = () => {
  const Home = lazy(() => import("./components/home/Home"));

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/car/:id" component={Car} />
        <Route
          path="/about"
          element={<div>This site was made with Solid</div>}
        />
        <Route path="*" element={<h1>404 Not found</h1>} />
      </Routes>
      <Footer></Footer>
    </>
  );
};

export default App;
