import { Component, lazy, Suspense } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import Footer from "./components/footer/Footer";

import Navbar from "./components/navbar/Navbar";
import { MetaProvider } from "@solidjs/meta";

const App: Component = () => {
  const Home = lazy(() => import("./components/home/Home"));
  const Car = lazy(() => import("./components/car/Car"));

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <MetaProvider>
          <Navbar />
          <Routes>
            <Route path="/" component={Home} />
            <Route path="/car/:id" component={Car} />
            <Route
              path="/about"
              element={<div>This site was made with Solid</div>}
            />
            <Route
              path="*"
              element={
                <h1
                  style={{
                    display: "flex",
                    "justify-content": "center",
                    height: "75vh",
                    "align-items": "center",
                    "margin-top": "-100px",
                  }}
                >
                  404 Not found 😪
                </h1>
              }
            />
          </Routes>
          <Footer></Footer>
        </MetaProvider>
      </Suspense>
    </>
  );
};

export default App;