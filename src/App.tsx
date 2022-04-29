import React from "react";
import "./assets/styles/global.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
