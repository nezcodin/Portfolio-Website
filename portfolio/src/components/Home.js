import { About } from "./About"
import { Link } from "react-router-dom"
import { Icon } from '@iconify/react';

export const Home = () => {
  return (
    <div>
      <About />
      <div className="home-buttons">
        <button className="home-button">
          <Link to='/projects'>Check out my projects!</Link>
          <Icon icon='material-symbols:arrow-right-alt-rounded' className="icon-arrow" />
        </button>
        <button className="home-button">
          <Link to='/resume'>Want my resume?</Link>
          <Icon icon='material-symbols:arrow-right-alt-rounded' className="icon-arrow" />
        </button>
        <button className="home-button">
          <Link to='/contact'>Let's chat!</Link>
          <Icon icon='material-symbols:arrow-right-alt-rounded' className="icon-arrow" />
        </button>
      </div>
    </div>
  )
}