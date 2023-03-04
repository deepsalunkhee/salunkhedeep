import React, { useState, useEffect } from "react";
import DS from "./DS.jpg";
import "./Intro.css";
import DeepSalunkhe from './CV.pdf'

export default function Intro() {
  const [text, setText] = useState("");
  const content = "Teech enthusiast, a curious brain, always eager to learn, interested in full stack Web development, cloud management , competitive programming, open source, Data Science, AI, ML....and the list continues 😊";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText((prevText) => prevText + content.charAt(i));
      i++;
      if (i > content.length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Intro">
      <div className="Myinfo">
       <a href="https://www.linkedin.com/in/deep-salunkhe-917931225/" target="blank"> <h1>Deep Salunkhe</h1>  </a> 
        <h2>{text}</h2>
        <a href="https://www.canva.com/design/DAFT8yn0b2s/g2feqHkzw8-6ukNv3w234w/view?utm_content=DAFT8yn0b2s&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="blank"><button className="button">View CV</button></a>
      </div>
      <div className="Myimg">
      <a href="https://www.linkedin.com/in/deep-salunkhe-917931225/" target="blank"><img src={DS} alt="Deep"/></a> 
      </div>
    </div>
  );
}
