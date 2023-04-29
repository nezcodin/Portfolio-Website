import hackathon from '../assets/video demos/Hackathon - 29 April 2023.mp4'
import screenshot1 from '../assets/screenshots/hackathon/Screenshot 2023-04-29 143654.png'
import screenshot2 from '../assets/screenshots/hackathon/Screenshot 2023-04-29 143716.png'
import screenshot3 from '../assets/screenshots/hackathon/Screenshot 2023-04-29 143734.png'
import screenshot4 from '../assets/screenshots/hackathon/Screenshot 2023-04-29 143759.png'
import screenshot5 from '../assets/screenshots/hackathon/Screenshot 2023-04-29 143916.png'
import screenshot6 from '../assets/screenshots/hackathon/Screenshot 2023-04-29 143941.png'

export const Hackathon = () => {

  const screenshots = [
    screenshot1,
    screenshot2,
    screenshot3,
    screenshot4,
    screenshot5,
    screenshot6
  ]

  const screenshotImages = screenshots.map((screenshot, index) => (
    <img key={index} src={screenshot} alt={`Screenshot ${index}`} className='screenshot' />
  ));

  return (
    <div className='project-page'>
      <h1 className='project-title'>Tick-iT Hackathon</h1>
      <div className='details-cont'>
        <div className='details'>
          <p>Tick-iT is a full-stack Django web application that allows users to browse through different venues and events happening at those venues. Users can create an account, log in, and purchase tickets for their favorite events. Tick-iT aims to provide a seamless ticket-buying experience for users.</p>
          <ul>
            <li>Spearheaded a team involving two other developers to create a full-stack SPA using Django and Material Theme Builder, assigning roles and ensuring clear responsibilities for effective project management</li>
            <li>Took the lead in bug testing, planning, designing the website, and setting up routes and frontend functionality to provide a seamless ticket-buying experience for users</li>
            <li>Utilized Python to develop frontend CRUD functionality for the "Venues" model, enabling users to view event and venue details, purchase tickets, and render backend data on the frontend</li>
          </ul>
          <button><a href='https://github.com/nezcodin/Tick-iT-Hackathon ' target='_blank' rel="noreferrer">See Tick-iT Hackathon Repository on GitHub</a></button>
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
          <source src={hackathon} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}