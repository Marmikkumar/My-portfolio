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
            src="https://scontent.fpat1-2.fna.fbcdn.net/v/t39.30808-6/295062744_748933913013473_3326987055742169383_n.jpg?stp=dst-jpg_p206x206&_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=947906&_nc_ohc=cuHD8rx4FHQAX9Ul1p8&_nc_ht=scontent.fpat1-2.fna&oh=00_AfCfEc2hWsnfyC7mRJNf0AXGWL-7OlsPk8qyd_zgt1ugZA&oe=64DDB5D3"
            alt="photo"
          ></img>
        </div>
      </div>
    </>
  );
}
