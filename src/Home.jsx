import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
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
            src="https://scontent.fpat3-2.fna.fbcdn.net/v/t39.30808-6/295062744_748933913013473_3326987055742169383_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=w_17tLcD08IAX9ne27o&_nc_ht=scontent.fpat3-2.fna&oh=00_AfCVni5OAoPIKu2zL7Yk1PIUXZ56rRgcz5tqJnZ_NfwfeQ&oe=64E1AA53"
            alt="photo"
          ></img>
        </div>
      </div>
    </>
  );
}
