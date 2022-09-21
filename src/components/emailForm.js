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
        <Parallax>
          <div className="contactTitle">
            <Parallax
              scale={[1, 1.5]}
              startScroll={window.innerWidth < 1500 ? 4500 : 4800}
              endScroll={window.innerWidth < 1500 ? 4700 : 5300}
              opacity={[1, 0]}
            >
              <div className="contactTitleBar">CONTACT</div>
            </Parallax>
          </div>
        </Parallax>
        <div className="mainMailingContainer">
          <div className="mainMailingContainerSecond">
            <Parallax speed={0}>
              <div className="leftbox">
                <div className="chatWithMeContainer">
                  <Parallax
                    translateX={[0, 50, "ease"]}
                    startScroll={window.innerWidth < 1500 ? 4700 : 5300}
                    endScroll={window.innerWidth < 1500 ? 4900 : 5500}
                  >
                    {" "}
                    <div className="chatI chat">Let's Connect!</div>
                  </Parallax>
                  <Parallax
                    translateX={[0, -50, "ease"]}
                    startScroll={window.innerWidth < 1500 ? 4800 : 5400}
                    endScroll={window.innerWidth < 1500 ? 5000 : 5600}
                  >
                    {" "}
                    <div className="chatII chat">Collaborate</div>
                  </Parallax>
                  <Parallax
                    translateX={[0, 30, "ease"]}
                    startScroll={window.innerWidth < 1500 ? 4900 : 5500}
                    endScroll={window.innerWidth < 1500 ? 5100 : 5700}
                  >
                    {" "}
                    <div className="ideas chat">Ideas, thoughts</div>
                  </Parallax>
                  <Parallax
                    translateX={[0, -20, "ease"]}
                    startScroll={window.innerWidth < 1500 ? 5000 : 5600}
                    endScroll={window.innerWidth < 1500 ? 5200 : 5800}
                  >
                    <div className="createSomething chat">
                      and Let's create something together!
                    </div>
                  </Parallax>

                  <div className="mailMeContainer">
                    <Parallax
                      scale={[1, 1.1]}
                      startScroll={window.innerWidth < 1500 ? 5100 : 5700}
                      endScroll={window.innerWidth < 1500 ? 5200 : 5900}
                    >
                      <div className="mailMe chat">
                        you can also reach out to me here!
                      </div>
                    </Parallax>
                    <Parallax
                      startScroll={window.innerWidth < 1500 ? 5200 : 5800}
                      endScroll={window.innerWidth < 1500 ? 5300 : 6000}
                      scale={[1, 1.1]}
                    >
                      <div className="myMail chat">
                        khatiwadabiraj10@gmail.com
                      </div>
                    </Parallax>
                  </div>
                </div>
              </div>
            </Parallax>
            {/* <div className='mailsvgContainer'>
          <img className='mailAvatar' src={mail}></img>
        </div> */}
            <Parallax speed={0}>
              <form className="formContainer" ref={form} onSubmit={sendEmail}>
                {/* <div className="titleBar">
            <div className="green"></div>
            <div className="yellow"></div>
            <div className="red"></div>
            <div className="emailTitleName">Email</div>
          </div> */}
                <div className="sendMeMsg chat">Send me a message!</div>
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
                <button className="sendBtn chat" type="submit">
                  Send Message
                </button>
              </form>
            </Parallax>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailForm;
