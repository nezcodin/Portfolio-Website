import { Route, Routes, Link } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import { Projects } from './Projects'
import { Resume } from './Resume'
import { Contact } from './Contact'
import { Animeto } from './Animeto'
import { SoundScape } from './SoundScape'
import { Triviata } from './Triviata'
import { Hackathon } from './Hackathon'
import { StalkMarket } from './StalkMarket'

export const NavBar = () => {
  return (
    <div>
      <nav>
        <ul className='nav-link-container'>
          <li className='nav-link'>
            <Link to="/">Home</Link>
          </li>
          <li className='nav-link'>
            <Link to="/about">About</Link>
          </li>
          <li className='nav-link'>
            <Link to="/projects">My Projects</Link>
          </li>
          <li className='nav-link'>
            <Link to="/resume">Resume</Link>
          </li>
          <li className='nav-link'>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/*" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/animeto" element={<Animeto />} />
        <Route path="/projects/soundscape" element={<SoundScape />} />
        <Route path="/projects/triviata" element={<Triviata />} />
        <Route path="/projects/tick-it-hackathon" element={<Hackathon />} />
        <Route path="/projects/the-stalk-market" element={<StalkMarket />} />
      </Routes>
    </div>
  )
}