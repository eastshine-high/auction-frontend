import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import PostListPage from './pages/PostListPage';

//<Route element={<PostListPage />} path={['/@:username', '/']} exact />

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<PostListPage />} path="/" exact />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegisterPage />} path="/register" />
        <Route element={<WritePage />} path="/write" />
        <Route element={<PostPage />} path="/@:username/:postId" />
      </Routes>
    </>
  );
};
export default App;
