import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  const [categories] = useState([
    {
      name: "about me",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portfolio", description: "Portraits of people in my life" },
    { name: "contact", description: "Delicious delicacies" },
    {
      name: "resume",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <section className="m-5">
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
          <About></About>
      </main>
    </section>
  );
}

export default App;
