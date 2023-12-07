import { memo, useState } from "react";
import ServicesCard from "./Components/ServicesCard";
import "./Services.css";
import { IoIosArrowBack , IoIosArrowForward } from 'react-icons/io'

function Services() {
  const logos = [
    `./Assets/HtmlLogo.png`,
    `./Assets/CssLogo.png`,
    `./Assets/JsLogo.png`,
    `./Assets/ReactLogo.png`,
    `./Assets/SassLogo.png`,
    `./Assets/GitHubLogo.png`,
    `./Assets/GitLogo.png`,
    `./Assets/BootstapLogo.png`,
    `./Assets/NpmLogo.png`,
  ];
  const names = [
    `HTML`,
    `CSS`,
    `JS`,
    `REACT`,
    `SASS`,
    `GITHUB`,
    `GIT`,
    `BOOTSTRAP`,
    `NPM`
  ]
  const [Logo, SetLogo] = useState(0);
 if (window.innerWidth > 900) {
  return (
    <section className="ServicesDiv">
      <div className="ServicesTitle">
        <h1>MY SKILLS</h1>
      </div>
      <IoIosArrowBack className="Arrows"
        onClick={() => {
          if (Logo ===0 ) {
            SetLogo(5);
          } else {
            SetLogo(Logo-1)
          }
        }}
      />
      <ServicesCard logo={logos[Logo]} name={names[Logo]} />
      <ServicesCard logo={logos[Logo + 1]} name={names[Logo + 1]}/>
      <ServicesCard logo={logos[Logo + 2]} name={names[Logo + 2]}/>
      <ServicesCard logo={logos[Logo + 3]} name={names[Logo + 3]}/>
      <IoIosArrowForward className="Arrows"
        onClick={() => {
          if (Logo < 5) {
            SetLogo(Logo + 1);
          } else {
            SetLogo(0)
          }
        }}
      />
    </section>
  );
 } else {
  return (
    <section className="ServicesDiv">
      <div className="ServicesTitle">
        <h1>MY SKILLS</h1>
      </div>
      <IoIosArrowBack className="Arrows"
        onClick={() => {
          if (Logo ===0 ) {
            SetLogo(5);
          } else {
            SetLogo(Logo-1)
          }
        }}
      />
      <ServicesCard logo={logos[Logo]} name={names[Logo]} />
      <IoIosArrowForward className="Arrows"
        onClick={() => {
          if (Logo < 8) {
            SetLogo(Logo + 1);
          } else {
            SetLogo(0)
          }
        }}
      />
    </section>
  );
 }
}

export default memo(Services);
