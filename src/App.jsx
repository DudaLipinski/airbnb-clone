import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";

import dataCards from "./data/data";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Card cards={dataCards} />
    </div>
  );
}

export default App;
