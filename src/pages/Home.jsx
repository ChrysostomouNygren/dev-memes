import React from "react";
import Header from "../components/Header";
import { memes } from "../components/memes.json";

// randomize memes
function Home() {

  const randomMeme = memes[Math.floor(Math.random() * memes.length)]
  
  return (
    <div>
      <Header />
      <main>

        {memes.map((item) => (
          <img src={item.url} />
        ))}
      </main>
    </div>
  );
}

export default Home;
