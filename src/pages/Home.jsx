import React from "react";
import Header from "../components/Header";
import MemeCarousel from "../components/MemeCarousel";
// import { memes } from "../components/memes.json";

function Home() {
  // With this variable I randomize the order of the meme array that my atom provide me with, since I got sick of seeing the same meme at the top every time.
  // const randomMemeArray = memes.sort(() => Math.random() - 0.5);

  return (
    <div>
      <Header />
      <main>
      <MemeCarousel />
        {/* {randomMemeArray.map((item) => (
          <img src={item.url} />
        ))} */}
      </main>
    </div>
  );
}

export default Home;
