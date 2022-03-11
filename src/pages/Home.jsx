import React from "react";
import Header from "../components/Header";
import { memes } from "../components/memes.json";

// Importera memes
function Home() {

  return (
    <div>
      <Header />
      <main>
        {memes.map((item, index) => (
          <img src={item.url} />
        ))}
      </main>
    </div>
  );
}

export default Home;
