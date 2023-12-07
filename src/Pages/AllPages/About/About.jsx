import { memo } from "react";
import "./About.css";

function About() {
  return (
    <section className="About">
      <div className="AboutTwoDivs">
        <div className="AboutImgDiv">
          <img src="./Assets/AboutLogo.png" alt="" />
          <div class="typewriter">
            <h1 className="AboutTitle2">FRONT - END PROGRAMMER</h1>
          </div>
        </div>
        <div className="AboutTextDiv">
          <h1 className="AboutTitle">ABOUT ME</h1>
          <p className="AboutText">
            Hello I'm Hovhhnnes Sayadyan.Programmer from Armenia.I'm 13 years
            old. I was born in 2010. My hobby is Web site creating, digital
            games and football playing. I can write every kind of Front - End
            Web sites. I know HTML , CSS , JavaScript and React.I learned that
            languages in Erevan and countinue it in Artashat.I created
            AgromarketLLC.com and another websites.
          </p>
        </div>
      </div>
    </section>
  );
}

export default memo(About);
