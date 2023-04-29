import { Link } from 'react-router-dom'

export const Projects = () => {
  return (
    <div className="projects-container">
      <p>Click one of the buttons to learn more about a specific project!</p>
      <div className="project-buttons">
        <button className="project-button">
          <Link to='/projects/animeto'>Animeto</Link>
        </button>
        <button className="project-button">
          <Link to='/projects/soundscape'>SoundScape</Link>
        </button>
        <button className="project-button">
          <Link to='/projects/triviata'>Triviata</Link>
        </button>
        <button className="project-button">
          <Link to='/projects/tick-it-hackathon'>Tick-It Hackathon</Link>
        </button>
        <button className="project-button">
          <Link to='/projects/the-stalk-market'>The Turnip Stalk Market</Link>
        </button>
      </div>
      <p>Only interested in the repositories? They're pinned on my <a href='https://github.com/nezcodin' target="_blank" rel="noreferrer">GitHub</a>!</p>
    </div>
  )
}