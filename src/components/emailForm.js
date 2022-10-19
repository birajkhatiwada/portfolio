import "./emailForm.css";
import emailjs, { init } from "@emailjs/browser";
import { useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import mailSvgImg from "./images/43.svg";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import mailSvg from "./images/mail.svg";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
      <div id="contactRef" className="EmailContainer">
        <div className="contactTitle">
          <div className="contactTitleBar">Contact</div>
        </div>
        <div className="mainMailingContainer">
          <div className="mailSvgContainer">
            <img className="mailSvg" src={mailSvg}></img>
          </div>
          <div className="mainMailingContainerSecond">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": {
                  m: 1,
                  width: "50ch",
                  color: "text.primary"
                },
                textField: {
                  border: "1px solid blue"
                }
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  required
                  id="filled-require"
                  // variant="filled"
                  name="from_email"
                  label="Email Address"
                  size="small"
                  // defaultValue="email"
                />
              </div>
              <div>
                <TextField
                  autoFocus={true}
                  id="outlined-required"
                  label="Full Name"
                  name="from_name"
                  // variant="filled"
                  size="small"

                  // defaultValue="email"
                />
              </div>
              <div>
                <TextField
                  id="outlined-required"
                  label="Subject"
                  // variant="filled"
                  size="small"

                  // defaultValue="email"
                />
              </div>
              <div>
                <TextField
                  required
                  color="info"
                  // className="textField"
                  // classes={{ className: "textField" }}
                  id="filled-multiline-static"
                  label="Message"
                  name="message"
                  multiline
                  size="small"
                  rows={4}
                  // defaultValue="Default Value"
                  // variant="filled"
                />
              </div>
              {/* <Button
                sx={{ width: "60ch" }}
                variant="contained"
                type="submit"
                endIcon={<SendIcon />}
              >
                Send
              </Button> */}
              <div className="sendBtnContainer">
                <button className="sendMsg">Send</button>
              </div>
            </Box>
          </div>
        </div>
        <div className="iconContainer">
          <div className="findMe">You can also find me here!</div>
          <a
            href="https://www.linkedin.com/in/birajkhatiwada/"
            className="socialMediaLink"
            target="_blank"
          >
            {" "}
            <LinkedInIcon
              hover
              fontSize="large"
              className="icon"
              sx={{ "&:hover": { color: "#6c62fb" } }}
            ></LinkedInIcon>
          </a>

          <a
            href="https://github.com/birajkhatiwada"
            className="socialMediaLink"
            target="_blank"
          >
            <GitHubIcon
              sx={{ "&:hover": { color: "#6c62fb" } }}
              fontSize="large"
              className="icon github"
            ></GitHubIcon>
          </a>

          <a href="" className="socialMediaLink" target="_blank">
            {" "}
            <InstagramIcon
              fontSize="large"
              className="icon instagram"
              sx={{ "&:hover": { color: "#6c62fb" } }}
            ></InstagramIcon>
          </a>
        </div>
      </div>
    </>
  );
};

export default EmailForm;

// <Parallax speed={0}>
//               <div className="leftbox">
//                 <div className="chatWithMeContainer">
//                   <Parallax
//                     translateX={[0, 15, "ease"]}
//                     startScroll={window.innerWidth < 1500 ? 4700 : 5300}
//                     endScroll={window.innerWidth < 1500 ? 4900 : 5500}
//                   >
//                     {" "}
//                     <div className="chatI chat">Let's Connect!</div>
//                   </Parallax>
//                   <Parallax
//                     translateX={[0, -15, "ease"]}
//                     startScroll={window.innerWidth < 1500 ? 4800 : 5400}
//                     endScroll={window.innerWidth < 1500 ? 5000 : 5600}
//                   >
//                     {" "}
//                     <div className="chatII chat">Collaborate</div>
//                   </Parallax>
//                   <Parallax
//                     translateX={[0, 7, "ease"]}
//                     startScroll={window.innerWidth < 1500 ? 4900 : 5500}
//                     endScroll={window.innerWidth < 1500 ? 5100 : 5700}
//                   >
//                     {" "}
//                     <div className="ideas chat">Ideas, thoughts</div>
//                   </Parallax>
//                   <Parallax
//                     translateX={[0, -2, "ease"]}
//                     startScroll={window.innerWidth < 1500 ? 5000 : 5600}
//                     endScroll={window.innerWidth < 1500 ? 5200 : 5800}
//                   >
//                     <div className="createSomething chat">
//                       and Let's create something together!
//                     </div>
//                   </Parallax>

//                   <div className="mailMeContainer">
//                     <Parallax
//                       scale={[1, 1.1]}
//                       startScroll={window.innerWidth < 1500 ? 5100 : 5700}
//                       endScroll={window.innerWidth < 1500 ? 5200 : 5900}
//                     >
//                       <div className="mailMe chat">
//                         you can reach out to me here ↓ or message me BELOW!
//                       </div>
//                     </Parallax>
//                     <Parallax
//                       startScroll={window.innerWidth < 1500 ? 5200 : 5800}
//                       endScroll={window.innerWidth < 1500 ? 5300 : 6000}
//                       scale={[1, 1.1]}
//                     >
//                       <div className="myMail chat">
//                         khatiwadabiraj10@gmail.com
//                       </div>
//                     </Parallax>
//                   </div>
//                 </div>
//               </div>
//             </Parallax>

{
  /* <Parallax speed={0}>
<div className="formContainerOuter">
  <form className="formContainer" ref={form} onSubmit={sendEmail}>
    <div className="sendMeMsg chat">Send me a message!</div>

    <input
      className="emailInput inputbox"
      placeholder="Email address*"
      name="from_email"
      required
    ></input>

    <input
      className="nameInput inputbox"
      placeholder="Full name"
      name="from_name"
    ></input>
    <input
      className="nameInput inputbox"
      placeholder="Subject"
    ></input>

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
</div>
</Parallax> */
}
