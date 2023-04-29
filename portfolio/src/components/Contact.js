export const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-box">
        <input placeholder="Subject" className="subject"></input>
        <textarea placeholder="What do you want to say? Please mention your name and a good way to reach back out to you." className="message"></textarea>
        <button type="submit">Send Email</button>
      </div>
      <p>Or send me a message over on <a href="https://www.linkedin.com/in/charlottefusco/" target="_blank" rel="noreferrer">LinkedIn</a>! Or send me a text here (319) 804-9186.</p>
    </div>
  )
}