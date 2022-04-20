import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {

    let navigate = useNavigate();
    const home = () => {
        navigate(`/`)
    }
    const create = () => {
        navigate(`/create`);
    }
    const about = () => {
        navigate(`/about`);
    }
    const all = () => {
      navigate(`/all`);
    }


  return (
    <header>
      <h1>dev memes</h1>
      <button onClick={home}>Home</button>
      <button onClick={all}>All ze memez</button>
      <button onClick={create}>Create</button>
      <button onClick={about}>About</button>
      
    </header>
  );
}

export default Header;
