import React, { Component } from "react";
import "../styles/memeGenerator.css";

// Att göra:
// 1. clear inputfield när generate-knappen trycks på
// 2.

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const randomNumber = Math.floor(
      Math.random() * this.state.allMemeImgs.length
    );
    const randomMemeImg = this.state.allMemeImgs[randomNumber].url;
    this.setState({ randomImg: randomMemeImg });
  }

  clearInput() {
    this.state = { topText: "", bottomText: "" };
  }

  render() {
    return (
      <div className="generator">
        <div className="form-box">
          <form className="meme-form">
            <input
              type="text"
              name="topText"
              placeholder="top text bruh"
              value={this.state.topText}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="bottomText"
              placeholder="bottom text bruh"
              value={this.state.bottomText}
              onChange={this.handleChange}
            />
            <button onClick={this.handleSubmit}>generate meme</button>
          </form>
        </div>
        <main className="meme">
          <div className="meme-img">
            <img src={this.state.randomImg} alt="" />
          </div>
          <h3 className="top">{this.state.topText}</h3>
          <h3 className="bottom">{this.state.bottomText}</h3>
        </main>
      </div>
    );
  }
}

export default MemeGenerator;
