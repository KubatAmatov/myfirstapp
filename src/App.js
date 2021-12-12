import React from "react";
import "./App.css";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Gifts from "./components/Gifts";
import Content from "./components/Content";
import Floor from "./components/Floor";
import OrengeFloor from "./components/OrengeFloor";
import TheerdFloor from "./components/TheerdFloor";
function App() {
  return (
    <>
      <Header />
      <Content />
      <Floor />
      <AboutUs />
      <Gifts />
      <OrengeFloor />
      <TheerdFloor />
    </>
  );
}

export default App;
