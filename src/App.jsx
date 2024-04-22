import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const Home = lazy(() => import("./pages/Home"));
  const Repos = lazy(() => import("./pages/Repos"));
  const Repo = lazy(() => import("./pages/Repo"));
  const About = lazy(() => import("./pages/About"));
  const NotFound = lazy(() => import("./pages/NotFound"));
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repos" element={<Repos />} />
          <Route path="/repo/:name" element={<Repo />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Suspense>
    </>
  );
}

export default App;
