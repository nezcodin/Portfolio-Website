import emailjs from "emailjs-com"
import { useRef, useState } from "react"

export const Contact = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState("Send Email")

  const sendEmail = (e) => {
    e.preventDefault();

    setButtonText("Sending...")

    emailjs.sendForm('service_5clewnu', 'portfolio-template', form.current, process.env.REACT_APP_API_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setButtonText("Sent!")
      }, (error) => {
        console.log(error.text);
        setButtonText("Try again!")
      });
  };

  return (
    <div className="contact">
      <form ref={form} onSubmit={sendEmail} className="contact-box">
        <input type="text" name="user_name" className="contact-input" placeholder="Your Name" />
        <input type="email" name="user_email" className="contact-input" placeholder="Your Email" />
        <input type="text" name="subject" className="contact-input" placeholder="Subject" />
        <textarea name="message" className="message" placeholder="What do you want to say?" />
        <button type="submit">{buttonText}</button>
      </form>

      <p>Or send me a message over on <a href="https://www.linkedin.com/in/charlottefusco/" target="_blank" rel="noreferrer">LinkedIn</a>! Or send me a text here (319) 804-9186.</p>
    </div>
  );
}

