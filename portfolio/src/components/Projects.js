import { Route, Routes, Link } from 'react-router-dom'
import { Animeto } from './Animeto'
import { SoundScape } from './SoundScape'
import { Triviata } from './Triviata'
import { Hackathon } from './Hackathon'
import { StalkMarket } from './StalkMarket'

export const Projects = () => {
  return (
    <div className="projects-container">
      <p>Click one of the buttons to learn more about a specific project!</p>
      <div className="project-buttons">
        <button className="project-button">
          <Link to='animeto'>Animeto</Link>
        </button>
        <button className="project-button">
          <Link to='soundscape'>SoundScape</Link>
        </button>
        <button className="project-button">
          <Link to='triviata'>Triviata</Link>
        </button>
        <button className="project-button">
          <Link to='tick-it-hackathon'>Tick-It Hackathon</Link>
        </button>
        <button className="project-button">
          <Link to='the-stalk-market'>The Turnip Stalk Market</Link>
        </button>
        <Routes>
          <Route path="/projects/animeto" element={<Animeto />} />
          <Route path="/projects/soundscape" element={<SoundScape />} />
          <Route path="/projects/triviata" element={<Triviata />} />
          <Route path="/projects/tick-it-hackathon" element={<Hackathon />} />
          <Route path="/projects/the-stalk-market" element={<StalkMarket />} />
        </Routes>
      </div>
      <p>Only interest in the repositories? They're pinned on my GitHub!</p>
    </div>
  )
}