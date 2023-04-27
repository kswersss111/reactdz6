import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/content" element={<Content />} />
          <Route path="/footer/:id" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
