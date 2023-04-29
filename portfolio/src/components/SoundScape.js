import soundscape from '../assets/video demos/SoundScape - 29 April 2023.mp4'
import screenshot1 from '../assets/screenshots/soundscape/Screenshot 2023-04-29 025853.png'
import screenshot2 from '../assets/screenshots/soundscape/Screenshot 2023-04-29 030001.png'
import screenshot3 from '../assets/screenshots/soundscape/Screenshot 2023-04-29 030017.png'

export const SoundScape = () => {

  const screenshots = [
    screenshot1,
    screenshot2,
    screenshot3
  ]

  const screenshotImages = screenshots.map((screenshot, index) => (
    <img key={index} src={screenshot} alt={`Screenshot ${index}`} className='screenshot' />
  ));

  return (
    <div className='project-page'>
      <h1 className='project-title'>SoundScape</h1>
      <div className='details-cont'>
        <div className='details'>
          <p>Music player using the Spotify API and React.</p>
          <ul>
            <li>Browser music player using React, Axios, Spotify API, and Spotify SDK Playback</li>
            <li>Developed interactive and responsive front-end using React, including components for music playing, song search, playlist functionality, and OAuth authentication
            </li>
            <li>Effortlessly retrieved data from Spotify's RESTful API using Axios within the React framework, enabling the seamless display of critical information like song details, artist information, and other relevant metadata directly on the user interface
            </li>
          </ul>
          <button><a href='https://github.com/nezcodin/SoundScape' target='_blank' rel="noreferrer">See SoundScape Repository on GitHub</a></button>
        </div>
      </div>
      <div className='screenshots-cont'>
        <h2>Screenshots</h2>
        <div className='scroll-cont'>
          {screenshotImages}
        </div>
      </div>
      <div className='video-demo'>
        <h2>Video Demo</h2>
        <video controls>
          <source src={soundscape} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}