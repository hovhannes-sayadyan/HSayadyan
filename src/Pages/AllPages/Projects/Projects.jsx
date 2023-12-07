import { memo } from "react";
import ProjectsCard from "./Components/ProjectsCard";
import './Projects.css'

function Projects() {
  return (
  <section className="ProjectsDiv">
    <div className="ProjectsTitle">
      <h1>MY PROJECTS</h1>
    </div>
    <ProjectsCard logo={`./Assets/CALCULATORLogo.avif`} name={`CALCULATOR`}/>
    <ProjectsCard logo={`./Assets/logoArmenia.png`} name={`TREVEL ARMENIA`}/>
    <ProjectsCard logo={`./Assets/logoFox.png`} name={`USER REGISTER`}/>
    <ProjectsCard logo={`./Assets/logoRestorant.png`} name={`RESTOURANT`}/>
    <ProjectsCard logo={`./Assets/ROCK-SCISSORS-PAPER-LOGO.jpg`} name={`ROCK-SCISSORS-PAPER-LOGO`}/>
    <ProjectsCard logo={`./Assets/X-O-LOGO.png`} name={`X O GAME`}/>
    <ProjectsCard logo={`/Assets/logo-math.png`} name={`MATH GAME`}/>
  </section>
  )
}

export default memo(Projects);
