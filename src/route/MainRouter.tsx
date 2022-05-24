import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../component/Main/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;