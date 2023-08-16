import React from "react";
import Navbar from "./Navbar";
import "./styles.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="head-content">
          <h1>I'm a Full Stack Web Devloper</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio enim
            consequatur officia natus numquam reiciendis necessitatibus non
            voluptatum quasi illo, consectetur consequuntur obcaecati iste?
            Doloremque odit quibusdam ad excepturi porro.
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
