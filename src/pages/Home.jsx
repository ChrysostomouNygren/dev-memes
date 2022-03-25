import React from "react";
import Header from "../components/Header";
import MemeCarousel from "../components/MemeCarousel";

function Home() {

  return (
    <div>
      <Header />
      <main>
      <MemeCarousel />

      {/* Add a grid with all the memes, and make so if you click them they'll pop up in a modal for fuller size */}


      </main>
    </div>
  );
}

export default Home;
