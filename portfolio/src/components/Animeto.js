import animeto from '../assets/video demos/ANIMETO - 29 April 2023.mp4'
import screenshot1 from '../assets/screenshots/animeto/Screenshot 2023-04-29 012633.png'
import screenshot2 from '../assets/screenshots/animeto/Screenshot 2023-04-29 012657.png'

export const Animeto = () => {

  const screenshots = [
    screenshot1,
    screenshot2
  ]

  const screenshotImages = screenshots.map((screenshot, index) => (
    <img key={index} src={screenshot} alt={`Screenshot ${index}`} />
  ));



  return (
    <div>
      <h1>Animeto</h1>
      <div>
        {screenshotImages}
      </div>
      <div>
        <video controls>
          <source src={animeto} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}