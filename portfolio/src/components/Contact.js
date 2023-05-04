import emailjs from "emailjs-com"
import { useRef } from "react"

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5clewnu', 'portfolio-template', form.current, process.env.REACT_APP_API_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contact">
      <form ref={form} onSubmit={sendEmail} className="contact-box">
        <div>
          <label>Name</label>
          <input type="text" name="user_name" className="subject" />
          <label>Email</label>
          <input type="email" name="user_email" className="subject" />
          <label>Subject</label>
          <input type="text" name="subject" className="subject" />
        </div>
        <label>Message</label>
        <textarea name="message" className="message" />
        <input type="submit" value="Send" />
      </form>

      <p>Or send me a message over on <a href="https://www.linkedin.com/in/charlottefusco/" target="_blank" rel="noreferrer">LinkedIn</a>! Or send me a text here (319) 804-9186.</p>
    </div>
  );
}

