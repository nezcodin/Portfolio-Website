import animeto from '../assets/video demos/ANIMETO - 29 April 2023.mp4'
import screenshot1 from '../assets/screenshots/animeto/Screenshot 2023-04-29 012633.png'
import screenshot2 from '../assets/screenshots/animeto/Screenshot 2023-04-29 012657.png'

export const Animeto = () => {

  const screenshots = [
    screenshot1,
    screenshot2
  ]

  const screenshotImages = screenshots.map((screenshot, index) => (
    <img key={index} src={screenshot} alt={`Screenshot ${index}`} className='screenshot' />
  ));

  return (
    <div className='project-page'>
      <h1 className='project-title'>Animeto</h1>
      <div className='details-cont'>
        <div className='details'>
          <p>An anime search engine that helps users determine the next anime they should watch! Made possible using Jikan API.</p>
          <ul>
            <li>Anime search engine using Javascript, Jikan RESTful API, CSS, and HTML</li>
            <li>Used Javascript to call the Jikan API to allow users to search for an anime and populate with data on the front end</li>
            <li>Utilized CSS for styling and key framing to create custom loading animations </li>
          </ul>
          <button><a href='https://github.com/nezcodin/Animeto' target='_blank' rel="noreferrer">See Animeto Repository on GitHub</a></button>
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
          <source src={animeto} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}