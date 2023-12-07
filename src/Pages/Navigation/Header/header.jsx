import { memo, useState } from "react";
import routes from "../../../Routes/routes";
import { Link } from "react-router-dom";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import "./header.css";

function Header() {
  const [Open,SetOpen] = useState(true)
  let LiList = routes.map((el, i) => {
    return (
      <Link className="LinkA" to={el.path}>
        {el.linkName}
      </Link>
    );
  });
  console.log(window.innerWidth);
  return (
    <header className={Open?`Header`:`HeaderFalse`}>
      <div className="LogoDiv">
        <img className="Logo" src="./Assets/HeaderLogo.png" alt="" />
      </div>
      <ul className={Open?`LinkUl`:`Open`}>
        {LiList}
      </ul>
      <div className={Open?`ThreeIcons`:`OpenIcons`}>
        <a href="https://www.facebook.com/profile.php?id=100048657914897&locale=ru_RU"><BsFacebook className="Icons"/></a>
        <a href="https://www.instagram.com/_hov_sayadyan_/"><BsInstagram className="Icons"/></a>
        <a href="https://twitter.com/Hov_Sayadyan"><BsTwitter className="Icons"/></a>
      </div>
      <img className="Menu" onClick={()=>{
        SetOpen(!Open)
      }} src={Open?"./Assets/MenuBar.png":"./Assets/Xlogo.png"} alt="" />
    </header>
  );
}

export default memo(Header);
