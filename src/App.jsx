import { HashRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import BlogDetails from "./components/Blog/BlogDetails";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route index element={<Home />} /> */}
          <Route path="/blog/blog-details" element={<BlogDetails />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
