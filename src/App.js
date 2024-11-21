import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import Contact from "./components/Contact.jsx";
import Quiz from "./components/Quiz.jsx";
import Assistant from "./components/Assistant";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/assistant" element={<Assistant />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
