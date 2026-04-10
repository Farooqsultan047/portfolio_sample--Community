import "./Home.css";
import homeee from "../assets/homeee.png";

const Home = () => {
  return (
    <section className="homeHero-section">
      
      {/* Background Image */}
      <img src={homeee} alt="bg" className="homeHero-bgImg" />

      {/* Overlay Content */}
      <div className="homeHero-content">

        <p className="homeHero-hello">Hello!</p>

        <h1 className="homeHero-title">
          I'm <span>Jenny</span>, <br />
          Product Designer
        </h1>

        <p className="homeHero-desc">
          Jenny’s exceptional product design ensure our website’s success.
          Highly Recommended
        </p>

        <div className="homeHero-buttons">
          <button className="homeHero-portfolio">Portfolio ↗</button>
          <button className="homeHero-hire">Hire me</button>
        </div>

        <div className="homeHero-experience">
          ⭐⭐⭐⭐⭐
          <p>
            <strong>10 Years</strong><br />
            Experience
          </p>
        </div>

      </div>
    </section>
  );
};

export default Home;