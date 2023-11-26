import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { MainPage } from "./components/pages/MainPage";
import { PostPage } from "./components/pages/PostPage";
import { PostsPage } from "./components/pages/PostsPage";
import { AddPostPage } from "./components/pages/AddPostPage";
import { LogingPage } from "./components/pages/LoginPage";
import { RegisterPage } from "./components/pages/RegisterPage";
import { EditPostPage } from "./components/pages/EditPostPage";

function App() {
  return (
    //<Layout>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="posts" element={<PostsPage />} />
      <Route path=":id" element={<PostPage />} />
      <Route path=":id/edit" element={<EditPostPage />} />
      <Route path="new" element={<AddPostPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="login" element={<LogingPage />} />
    </Routes>
    //</Layout>
  );
}

export default App;
