import React from 'react';
import boot from "./boot.png";
import c from "./c++.png";
import cloud from "./cloud.png";
import comm from "./comm.png";
import css from "./css.png";
import git from "./git.png";
import html from "./HTML.png";
import java from "./java.png";
import js from "./js.png";
import lead from "./leader.png";
import db from "./modb.png";
import node from "./node.png";
import py from "./python.png";
import react from "./react.png";


import './Skill.css';

export default function Skill() {
  

  return (
    <div className="Skill">
      <h1>Skills and Tech Stack</h1>

      <div className='skills'>
      <img className='myskill' src={boot} alt="Deep"></img>
      <img className='myskill' src={c} alt="Deep"></img>
      <img className='myskill' src={cloud} alt="Deep"></img>
      <img className='myskill' src={css} alt="Deep"></img>
      <img className='myskill' src={html} alt="Deep"></img>
      <img className='myskill' src={react} alt="Deep"></img>
      <img className='myskill' src={db} alt="Deep"></img>
      <img className='myskill' src={node} alt="Deep"></img>
      <img className='myskill' src={git} alt="Deep"></img>
      <img className='myskill' src={java} alt="Deep"></img>
      <img className='myskill' src={js} alt="Deep"></img>
      <img className='myskill' src={py} alt="Deep"></img>
      <img className='myskill' src={comm} alt="Deep"></img>
      <img className='myskill' src={lead} alt="Deep"></img>
      </div>
      
    </div>
  );
}


