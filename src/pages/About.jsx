import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function About() {
  return (
    <div>
      <Header />
        <h2>About me and the project</h2>
      <span>
        <p>My name is Katerina, an aspiring frontend- & app developer based in Stockholm, Sweden.<br />
        Wan't some more of my sillyness or to hire me? Check out these links:
        </p>
        <ul>
          <li><a href="https://www.linkedin.com/in/katerina-chrysostomou-nygren/">Linkedin</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="https://github.com/ChrysostomouNygren">Github</a></li>
          <li><a href="https://www.instagram.com/kottlas.miniatures/">Art</a></li>
        </ul>
      </span>
      <Footer />
    </div>
  );
}

export default About;
