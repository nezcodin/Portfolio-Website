export const Resume = () => {

  return (
    <div className="resume-container">
      <div className="inside-resume">
        <h1>Charlotte Fusco</h1>
        <div className="misc-info">
          <p className="inside-misc">Cedar Rapids, IA</p>
          <p className="inside-misc">Email: ch.fusco104@gmail.com</p>
          <p className="inside-misc">Phone: (319) 804-9186</p>
          <p className="inside-misc"><a href='https://github.com/nezcodin' target='_blank' rel="noreferrer">GitHub</a></p>
          <p className="inside-misc"><a href='https://www.linkedin.com/in/charlottefusco/' target='_blank' rel="noreferrer">LinkedIn</a></p>
        </div>
        <div>
          <p>As a software engineer with a customer service background, I excel in providing creative solutions to complex problems while continuously learning and staying up-to-date with the latest trends in tech. My expertise in teamwork and customer-focused problem-solving allows me to effectively identify and resolve customer issues.</p>
        </div>
        <h2>Skills and Technologies</h2>
        <div>
          <p>Languages and Frameworks: JavaScript, Python, HTML5, CSS3, SQL, React, Node.js, PostgreSQL, Express</p>
          <p>Technologies: Git, GitHub, RESTful API, MacOS, Linux, Adobe After Effects, QuickBooks, Figma, Microsoft Excel
          </p>
        </div>
        <h2>Software Engineering Projects</h2>
        <div>
          <h3>Triviata</h3>
          <ul>
            <li>Collaborated with three software developers to create a quiz/flashcard app using React, Axios, CSS, Express, and PostgresQL</li>
            <li>Spearheaded the development of the backend infrastructure in PostgresQL and Express by crafting comprehensive models, building end-to-end CRUD functionality for all models using controllers and routes, and validating it via Insomnia testing</li>
            <li>Leveraged Axios in React to extract data from the backend API built in PostgreSQL and Express, facilitating the frontend display of vital information and provided valuable guidance to team members on Axios calls and ensured their accuracy</li>
          </ul>
          <h3>SoundScape</h3>
          <ul>
            <li>Browser music player using React, Axios, Spotify API, and Spotify SDK Playback
            </li>
            <li>Developed interactive and responsive front-end using React, including components for music playing, song search, playlist functionality, and OAuth authentication</li>
            <li>Effortlessly retrieved data from Spotify's RESTful API using Axios within the React framework, enabling the seamless display of critical information like song details, artist information, and other relevant metadata directly on the user interface</li>
          </ul>
          <h3>Animeto</h3>
          <ul>
            <li>Anime search engine using Javascript, Jikan RESTful API, CSS, and HTML</li>
            <li>Used Javascript to call the Jikan API to allow users to search for an anime and populate with data on the front end</li>
            <li>Utilized CSS for styling and key framing to create custom loading animations </li>
          </ul>
        </div>
        <h2>Professional Experience</h2>
        <div>
          <h3>Commerical Accounts Manager</h3>
          <p>The Powder Shop</p>
          <p>August 2022-December 2022</p>
          <ul>
            <li>Managed commercial accounts and maintained accurate records of inventory, labor, and purchase orders to maximize revenue</li>
            <li>Facilitated positive customer experiences by providing assistance and direction to both retail and commercial customers via phone, email, and in-person, with a strong attention to detail to ensure order accuracy and customer retention</li>
            <li>Utilized QuickBooks and Microsoft Excel to manage the direct shipment and receipt of materials to meet shipping deadlines</li>
          </ul>
          <h3>Receptionist</h3>
          <p>Great Clips</p>
          <p>April 2022-August 2022</p>
          <ul>
            <li>Facilitated a positive customer experience by performing check-ins, making customer account modifications, and providing assistance with product recommendations and service pricing</li>
            <li>Successfully managed front-of-store product inventory to increase customer sales</li>
            <li>Exceeded product sales goals by 30% while maintaining overall salon cleanliness and supporting stylists</li>
          </ul>
          <h3>Front Store Associate</h3>
          <p>CVS</p>
          <p>February 2021-July 2022</p>
          <ul>
            <li>Consistently exceeded membership sign-up goals by 25% for ExtraCare and Carepass at multiple locations</li>
            <li>Efficiently carried out product planograms to increase sales and meet company standards</li>
          </ul>
          <h3>Adobe Video Editor</h3>
          <p>Freelance</p>
          <p>October 2015-April 2021</p>
          <ul>
            <li>Utilized online platforms and marketing tools to promote services and connect with customers</li>
            <li>Edited a diverse range of videos using Adobe After Effects for YouTube, advertising, Instagram, and fandom content while utilizing online resources to stay up-to-date with the latest trends in video editing</li>
            <li>Ensured customer satisfaction by maintaining effective communication, managing deadlines, and consistently seeking feedback to improve project outcomes</li>
          </ul>
        </div>
        <h2>Education</h2>
        <div className="education">
          <p>General Assembly</p>
          <p>April 2023</p>
          <p>George Washington High School</p>
          <p>March 2022</p>
        </div>
      </div>
      <div className="download">
        <h3>
          Want a copy?
        </h3>
        <button>
          <a href="https://drive.google.com/file/d/1ML-nv8_U2g7MtDVjMUrhDNKJCOuiESep/view?usp=sharing" target="_blank" rel="noreferrer">
            Download PDF Resume
          </a>
        </button>
        <button>
          <a href="https://docs.google.com/document/d/1-8B3mFKkjBBnMsv7KRupu0MQhYHrBjhM/edit?usp=sharing&ouid=115291327001333694159&rtpof=true&sd=true" target="_blank" rel="noreferrer">
            Download DOCX Resume
          </a>
        </button>
      </div>
    </div>
  )
}