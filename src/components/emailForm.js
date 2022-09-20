import "./emailForm.css";
import emailjs, { init } from "@emailjs/browser";
import { useRef } from "react";
import { Parallax } from "react-scroll-parallax";

const EmailForm = (props) => {
  // console.log(props.emailAppClick);
  const form = useRef();

  const sendEmail = (e) => {
    console.log(e.target);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_c5x11sm",
        "template_s2a1393",
        form.current,
        "t-EIVG4mi8CevOrKC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.reset();
  };
  return (
    <>
      <div className="EmailContainer">
        <Parallax speed={-10}>
          <div className="contactTitle">
            <div className="contactTitleBar">CONTACT</div>
          </div>
        </Parallax>
        <div className="mainMailingContainer">
          <Parallax speed={10}>
            <div className="leftbox">
              <div className="chatWithMeContainer">
                <div className="chatI">Let's Connect!</div>
                <div className="chatII">Collaborate</div>
                <div className="ideas">Ideas, thoughts</div>
                <div className="createSomething">
                  {" "}
                  and Let's create something together!
                </div>
                <div className="mailMeContainer">
                  <div className="mailMe">
                    you can also reach out to me here!
                  </div>
                  <div className="myMail">khatiwadabiraj10@gmail.com</div>
                </div>
              </div>
            </div>
          </Parallax>
          {/* <div className='mailsvgContainer'>
          <img className='mailAvatar' src={mail}></img>
        </div> */}
          <Parallax speed={-10}>
            <form className="formContainer" ref={form} onSubmit={sendEmail}>
              {/* <div className="titleBar">
            <div className="green"></div>
            <div className="yellow"></div>
            <div className="red"></div>
            <div className="emailTitleName">Email</div>
          </div> */}
              <div className="sendMeMsg">Send me a message!</div>
              {/* <div className="yourEmail labell">Your Email </div> */}
              <input
                className="emailInput inputbox"
                placeholder="Email address*"
                name="from_email"
                required
              ></input>
              {/* <div className="line"></div> */}
              {/* <div className="firstName labell">Your Name</div> */}
              <input
                className="nameInput inputbox"
                placeholder="Full name"
                name="from_name"
              ></input>
              <input
                className="nameInput inputbox"
                placeholder="Subject"
                // name="from_name"
              ></input>
              {/* <div className="secondline"></div> */}
              <div className="messageOg labell">Your Message here*</div>
              <textarea
                className="messageInput inputbox"
                name="message"
                required
              ></textarea>
              <button className="sendBtn" type="submit">
                Send Message
              </button>
            </form>
          </Parallax>
        </div>
      </div>
    </>
  );
};

export default EmailForm;
