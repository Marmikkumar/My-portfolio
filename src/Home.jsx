import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import myimage from "./myimage.png;
import "./styles.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Footer />
      <div className="home">
        <div className="head-content">
          <h1>I'm a MERN Stack Web Devloper</h1>
          <p>
            <span>W</span>elcome to my portfolio! I'm excited to share my
            journey and experiences with the MERN stack in the world of web
            development. The MERN stack, comprising MongoDB, Express.js, React,
            and Node.js, has been my playground for creating dynamic,
            interactive, and full-stack web applications.
          </p>
        </div>
        <div className="fig">
          <img
            src={myimage}
            alt="photo"
          ></img>
        </div>
      </div>
    </>
  );
}
