import triviata from '../assets/video demos/Triviata - 29 April 2023.mp4'
import screenshot1 from '../assets/screenshots/triviata/Screenshot 2023-04-29 033046.png'
import screenshot2 from '../assets/screenshots/triviata/Screenshot 2023-04-29 033102.png'
import screenshot3 from '../assets/screenshots/triviata/Screenshot 2023-04-29 033157.png'
import screenshot4 from '../assets/screenshots/triviata/Screenshot 2023-04-29 033215.png'
import screenshot5 from '../assets/screenshots/triviata/Screenshot 2023-04-29 033232.png'
import screenshot6 from '../assets/screenshots/triviata/Screenshot 2023-04-29 033256.png'

export const Triviata = () => {

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
      <h1 className='project-title'>Triviata</h1>
      <div className='details-cont'>
        <div className='details'>
          <p>Triviata is a quiz and flashcard platform that allows users to create and utilize quizzes and flashcards made by others.</p>
          <ul>
            <li>Collaborated with three software developers to create a quiz/flashcard app using React, Axios, CSS, Express, and PostgreSQL</li>
            <li>Spearheaded the development of the backend infrastructure in PostgresQL and Express by crafting comprehensive models, building end-to-end CRUD functionality for all models using controllers and routes, and validating it via Insomnia testing</li>
            <li>Leveraged Axios in React to extract data from the backend API built in PostgreSQL and Express, facilitating the frontend display of vital information and provided valuable guidance to team members on Axios calls and ensured their accuracy</li>
          </ul>
          <button><a href='https://github.com/lastnameisgold/triviata_app_frontend' target='_blank' rel="noreferrer">See Triviata Frontend Repository on GitHub</a></button>
          <button><a href='https://github.com/lastnameisgold/triviata_app_backend' target='_blank' rel="noreferrer">See Triviata Backend Repository on GitHub</a></button>
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
          <source src={triviata} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}