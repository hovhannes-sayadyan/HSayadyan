import { memo , useState } from "react";
import "./ProjectsAll.css";

function ProjectsAll() {

  const [Number,SetNumber] = useState(0)
  const Img = [
    `./Assets/CALCULATORLogo.avif`,
    `./Assets/logoArmenia.png`,
    `./Assets/logoFox.png`,
    `./Assets/logoRestorant.png`,
    `./Assets/ROCK-SCISSORS-PAPER-LOGO.jpg`,
    `./Assets/X-O-LOGO.png`,
    `./Assets/logo-math.png`
  ]

  return (
    <section className="ProjectsAll">
      <div className="Pro">
        <h1>MY PROJECTS</h1>
        <img src="./Assets/WowLogo.png" alt="" />
      </div>
      <div className="ProjectAllCarusel">
        <img src="./Assets/ArrowFront.png" id="a1" className="ArrowProject" onClick={()=>{
          if (Number > 0) {
            SetNumber(Number-1)
          }else{
            SetNumber(6)
          }
        }} />
        <img src={Img[Number]} className="AllFirst" alt="" />
        <img src="./Assets/ArrowFront.png" className="ArrowProject" onClick={()=>{
          if (Number < 6) {
            SetNumber(Number+1)
          }else{
            SetNumber(0)
          }
        }} />
      </div>
    </section>
  );
}

export default memo(ProjectsAll);
