import React from "react";
import "./styles.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-box">
        <a
          href="https://github.com/Marmikkumar"
          target="_blank"
          className="footer-link"
        >
          <i className="fa-brands fa-github footer-link"></i>
        </a>
        <a
          href="https://linkedin.com/in/marmik-kumar-055137238/"
          target="_blank"
          className="footer-link"
        >
          <i className="fa-brands fa-linkedin footer-link"></i>
        </a>
        <a
          href="mailto: marmik.kumar.ece23@heritageit.edu.in"
          target="_blank"
          className="footer-link"
        >
          <i className="fa-solid fa-envelope footer-link"></i>
        </a>
        <a
          href="https://1drv.ms/b/s!Ahr0SUxhkSMeg8Zjsx09NplR_2fwtw?e=B7wlvG"
          download="Marmik_resume.pdf"
          className="footer-link"
        >
          <i className="fa-solid fa-file footer-link"></i>
        </a>
      </div>
    </div>
  );
}
