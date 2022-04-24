import './emailForm.css';
import emailjs, { init } from '@emailjs/browser';
import { useRef } from 'react';

const EmailForm = (props) => {
  console.log(props.emailAppClick);
  const form = useRef();

  const sendEmail = (e) => {
    console.log(e.target);
    e.preventDefault();
    emailjs
      .sendForm(
        'service_c5x11sm',
        'template_s2a1393',
        form.current,
        't-EIVG4mi8CevOrKC'
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
    <div>
      <form
        className={props.emailAppClick ? 'formContainer' : 'hideForm'}
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="titleBar">
          <div className="green"></div>
          <div className="yellow"></div>
          <div className="red"></div>
          <div className="emailTitleName">Email</div>
        </div>
        <div className="yourEmail">Your Email: </div>
        <input
          className="emailInput"
          placeholder="*abc@email.com"
          name="from_email"
          required
        ></input>
        <div className="line"></div>
        <label className="firstName">Name:</label>
        <input
          className="nameInput"
          placeholder="John Doe"
          name="from_name"
        ></input>
        <div className="secondline"></div>
        <textarea
          className="messageInput"
          placeholder="*Message here"
          name="message"
          required
        ></textarea>
        <button className="sendBtn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
