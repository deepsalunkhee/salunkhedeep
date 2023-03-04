import './App.css';
import Intro from './Intro/Intro';
import Skill from './Skill/Skill';
import Snowfall from 'react-snowfall';
import Exp from './Exp/Exp';
import Projects from './Projects/Projects';

function App() {

  return (
    <div className="App">
      <div className="Snowfall-wrapper">
        <Snowfall />
      </div>
      <Intro/>
      <Skill/>
      <Exp/>
      <Projects/>
    </div>
  );
}

export default App;

