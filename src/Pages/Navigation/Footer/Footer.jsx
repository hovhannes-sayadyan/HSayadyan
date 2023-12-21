import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { memo } from "react";
import "./Footer.css";

function Contact() {
  return (
    <div className="Contact">
      <div className="ContactIconDiv">
        <h1 className="h1">CONTACT WITH US `</h1>
        <div className="ContactIconsDivs">
          <div className="ContactIconsDiv">
            <FaLocationDot className="ContactIcons" />
          </div>
          <div>
            <h3 className="h3">Address</h3>
            <h4 className="h4">City Artshat, Yrevan-Yeraskh 28/1</h4>
          </div>
        </div>
        <div className="ContactIconsDivs">
          <div className="ContactIconsDiv">
            <BsTelephoneFill className="ContactIcons" />
          </div>
          <div>
            <h3 className="h3">Phone</h3>
            <h4 className="h4">+374 94 08 16 56</h4>
            <h4 className="h4">+374 93 05 11 61</h4>
          </div>
        </div>
        <div className="ContactIconsDivs">
          <div className="ContactIconsDiv">
            <IoMail className="ContactIcons" />
          </div>
          <div>
            <h3 className="h3">Mail</h3>
            <h4 className="h4">agromarket.eu@gmail.com</h4>
          </div>
        </div>
      </div>
      <div className="ContactTextField">
       <div className="White">
        <h1 className="h1">ENTER YOUR LETTER</h1>
       <div className="NameMail">
          <input
            type="text"
            placeholder="Name"
            name="Name"
            className="NameInput"
          />
          <input
            type="text"
            placeholder="Gmail"
            name="G-Mail"
            className="MailInput"
          />
        </div>
        <textarea
        onChange={() => {
          const body = document.querySelector(`.LetterInput`)?.value
          console.log(body);
        }}
          type="text"
          placeholder="Write your letter"
          name="Letter"
          className="LetterInput"
        ></textarea>
        <a className="Submit" onClick={()=>{
          const a = document.querySelector(`.Submit`)
          const subject = document.querySelector(`.NameInput`).value
          const GMail = document.querySelector(`.MailInput`).value
          const body = document.querySelector(`.LetterInput`)?.value
          const text = `Hello I'am ${subject}. ${body}. My G-Mail is ${GMail}`
          a.href = `mailto:agromarket.eu@gmail.com?subject= Letter from WebSite&body=${text}`
        }}>SUBMIT</a>
      </div>
       </div>
    </div>
  );
}

export default memo(Contact);
