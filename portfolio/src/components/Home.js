import { About } from "./About"

export const Home = () => {
  return (
    <div>
      <About />
      <div className="buttons">
        <button className="home-button">Check out my projects!</button>
        <button className="home-button">Want my resume?</button>
        <button className="home-button">Let's chat!</button>
      </div>
    </div>
  )
}