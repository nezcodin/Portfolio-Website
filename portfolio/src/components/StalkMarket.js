import stalkMarket from '../assets/video demos/Stalk Market - 29 April 2023.mp4'
import screenshot1 from '../assets/screenshots/stalk market/Screenshot 2023-04-29 145540.png'
import screenshot2 from '../assets/screenshots/stalk market/Screenshot 2023-04-29 145602.png'
import screenshot3 from '../assets/screenshots/stalk market/Screenshot 2023-04-29 145813.png'
import screenshot4 from '../assets/screenshots/stalk market/Screenshot 2023-04-29 145911.png'
import screenshot5 from '../assets/screenshots/stalk market/Screenshot 2023-04-29 145936.png'
import screenshot6 from '../assets/screenshots/stalk market/Screenshot 2023-04-29 145955.png'
import screenshot7 from '../assets/screenshots/stalk market/Screenshot 2023-04-29 150008.png'
import screenshot8 from '../assets/screenshots/stalk market/Screenshot 2023-04-29 150043.png'

export const StalkMarket = () => {

  const screenshots = [
    screenshot1,
    screenshot2,
    screenshot3,
    screenshot4,
    screenshot5,
    screenshot6,
    screenshot7,
    screenshot8
  ]

  const screenshotImages = screenshots.map((screenshot, index) => (
    <img key={index} src={screenshot} alt={`Screenshot ${index}`} className='screenshot' />
  ));

  return (
    <div className='project-page'>
      <h1 className='project-title'>The Turnip Stalk Market</h1>
      <div className='details-cont'>
        <div className='details'>
          <p>Introducing a revolutionary new way to exchange turnip prices in Animal Crossing: New Horizons! Say goodbye to scouring endless Reddit forums and Discord channels, and hello to this sleek and user-friendly turnip price exchange web app. Powered by React and Django with Tailwind for styling, this full-stack platform simplifies the process of buying and selling turnips by connecting players in real-time.
            <br />
            <br />
            Creating an account and signing in is easy - simply register with your email, password, and other information related to your New Horizons island, and you're ready to start. Once logged in, you can create posts advertising your turnip prices to others, inviting them to come to your island and sell. Want to find the best deals? Browse posts from other users and discover the best turnip prices available. Leave comments to coordinate meeting times or just to chat with other players.
            <br />
            <br />
            With our turnip price exchange web app, buying and selling turnips has never been easier or more convenient. Save time and maximize your profits by joining our community today.</p>
          <ul>
            <li>Created a full-stack SPA Animal Crossing: New Horizons turnip price exchange web app using React, Django, and Tailwind CSS, providing a user-friendly platform for exchanging turnip prices in real-time</li>
            <li>Implemented user authentication and authorization using JWT in React and Django, enabling users to create accounts, log in, and manage their profiles with full CRUD functionality</li>
            <li>Developed backend functionality to support user profiles and account management, as well as CRUD functionality for posts and comments, using Django models and integrating with the frontend using React</li>
          </ul>
          <button><a href='https://github.com/nezcodin/The-Turnip-Stalk-Market' target='_blank' rel="noreferrer">See The Stalk Market Repository on GitHub</a></button>
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
          <source src={stalkMarket} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}