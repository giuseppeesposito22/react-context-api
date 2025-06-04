import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

import AboutPage from "./pages/AboutPage";

import DefaultLayout from "./layouts/DefaultLayout";

import path from "./data/path";

// import delle pagine sotto il path posts

import PostListPage from "./pages/posts/PostListPage";
import PostDetailPage from "./pages/posts/PostDetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path={path.HOME()} element={<HomePage />} />
            <Route path={path.ABOUT()} element={<AboutPage />} />

            {/* rotte che hanno in comune il prefisso posts */}
            <Route path="/posts">
              <Route path="" element={<PostListPage />} />
              <Route path=":id" element={<PostDetailPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
