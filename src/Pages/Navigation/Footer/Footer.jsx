import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { memo } from "react";
import "./Footer.css";

function Contact() {
  return (
    <div className="Contact">
      <div className="ContactIconDiv">
        <h1 className="h1">CONTACT `</h1>
        <div className="ContactIconsDivs">
          <div className="ContactIconsDiv">
            <FaLocationDot className="ContactIcons" />
          </div>
          <div>
            <h3 className="h3">ADRESS՝</h3>
            <h4 className="h4">TOWN ARTASHAT</h4>
          </div>
        </div>
        <div className="ContactIconsDivs">
          <div className="ContactIconsDiv">
            <BsTelephoneFill className="ContactIcons" />
          </div>
          <div>
            <h3 className="h3">PHONE՝</h3>
            <h4 className="h4">+374 94 00 01 80</h4>
          </div>
        </div>
      </div>
      <div className="ContactTextField">
        <div className="White">
          <h1 className="h1">LETTER՝</h1>
          <div className="NameMail">
            <input
              type="text"
              placeholder="NAME"
              name="Name"
              className="NameInput2"
            />
            <input
              type="text"
              placeholder="E - MAIL"
              name="G-Mail"
              className="MailInput2"
            />
          </div>
          <textarea
            onChange={() => {
              const body = document.querySelector(`.LetterInput2`)?.value;
              console.log(body);
            }}
            type="text"
            placeholder="LETTER"
            name="Letter"
            className="LetterInput2"
          ></textarea>
          <a
            className="Submit2"
            onClick={() => {
              const a = document.querySelector(`.Submit2`);
              const subject = document.querySelector(`.NameInput2`).value;
              const GMail = document.querySelector(`.MailInput2`).value;
              const body = document.querySelector(`.LetterInput2`)?.value;
              const text = `Hello I'am ${subject}. ${body}. My G-Mail is ${GMail}`;
              a.href = `hhovhsnnes.sayadyan.ithink@gmail.com?subject= Letter from WebSite&body=${text}`;
              cosole.log(`h`)
            }}
          >
            SUBMIT
          </a>
        </div>
      </div>
    </div>
  );
}

export default memo(Contact);
