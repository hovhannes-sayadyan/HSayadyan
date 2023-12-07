import { memo } from "react";
import "./AboutAll.css";

function AboutAll() {
  return (
    <section className="AboutAll">
      <img className="AboutAllImg" src="./Assets/MyImg.jpg" alt="" />
      <h1>
        <span>Hello </span>
        <span>I'm </span>
        <span>Hovhannes </span>
        <span>Sayadyan </span>
      </h1>
      <p className="AboutAllP">
        Hello I'm Hovhhnnes Sayadyan.Programmer from Armenia.I'm 13 years old. I
        was born in 2010. My hobby is Web site creating, digital games and
        football playing. I can write every kind of Front - End Web sites. I
        know HTML , CSS , JavaScript and React.I learned that languages in Erevan and
        countinue it in Artashat.I created AgromarketLLC.com and another websites.
      </p>
    </section>
  );
}

export default memo(AboutAll);
