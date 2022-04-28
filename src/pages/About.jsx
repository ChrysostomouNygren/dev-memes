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
        I've been working retail for over 10 years, and felt like it was time to try out something new.<br />
        My previous educations includes lots of art and design, and trough a course in webdesign I was introduced to programming.</p>
        <ul>
          <li><a href="https://github.com/ChrysostomouNygren">Codes</a> (aka my github)</li>
          <li><a href="https://www.instagram.com/kottlas.miniatures/">Art</a></li>
          <li><a href="https://www.linkedin.com/in/katerina-chrysostomou-nygren/">Linkedin</a></li>
        </ul>
      </span>
      <Footer />
    </div>
  );
}

export default About;
