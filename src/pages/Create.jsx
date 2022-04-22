import React from "react";
import Header from "../components/Header";
import MemeGenerator from "../components/MemeGenerator";
import Footer from "../components/Footer";

function Create() {
  return (
    <div>
      <Header />
      <h2 className="generator-headline">meme generator!</h2>
      <MemeGenerator />
      <Footer />
    </div>
  );
}

export default Create;
