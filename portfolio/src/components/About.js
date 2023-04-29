import profilePicture from '../assets/profile.png'

export const About = () => {
  return (
    <div className='about-container'>
      <div>
        <img src={profilePicture} alt='profile' className='profile-picture' />
      </div>
      <div className='text-btn-cont'>
        <div className='about-text'>
          <h2 className='about-title'>Hey, thanks for stopping by!</h2>
          <p>My name is Charlotte Fusco. As a software engineer with a customer service background, I excel in providing creative solutions to complex problems while continuously learning and staying up-to-date with the latest trends in tech. My expertise in teamwork and customer-focused problem-solving allows me to effectively identify and resolve customer issues.</p>
          <p>Languages and Frameworks: JavaScript | Python | HTML5 | CSS3 | SQL | React | Node.js | PostgreSQL | Express</p>
          <p>Technologies: Git | GitHub | RESTful API | MacOS | Linux | Adobe After Effects | QuickBooks | Figma | Microsoft Excel</p>
        </div>
        <div className='about-buttons'>
          <button>
            <a href='https://github.com/nezcodin' target='_blank' rel="noreferrer">GitHub</a>
          </button>
          <button>
            <a href='https://www.linkedin.com/in/charlottefusco/' target='_blank' rel="noreferrer">LinkedIn</a>
          </button>
        </div>
      </div>
    </div>
  )
}