import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <h3 className="contact-p">
          <Link to='/contact' className="contact-link">Contact Me</Link>
        </h3>
        <ul className="footer-link-container">
          <li className="footer-link">Email: ch.fusco104@gmail.com</li>
          <li className="footer-link">Phone: (319) 804-9186</li>
          <li className="footer-link"><a href="https://www.linkedin.com/in/charlottefusco/" target="_blank" rel="noreferrer" className="linkedin">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  )
}