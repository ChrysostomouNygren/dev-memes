import React from "react";
import { useNavigate } from "react-router-dom";
import Create from "../pages/Create";
import About from "../pages/About"

function Header() {

    let navigate = useNavigate();
    const home = () => {
        let path = `/`;
        navigate(path)
    }
    const create = () => {
        let path = `/create`;
        navigate(path);
    }
    const about = () => {
        let path = `/about`;
        navigate(path);
    }


  return (
    <header>
      <h1>dev memes</h1>
      <button onClick={home}>Home</button>
      <button onClick={create}>Create</button>
      <button onClick={about}>About</button>
      
    </header>
  );
}

export default Header;
