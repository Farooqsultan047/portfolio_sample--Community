import "./services.css";
import bgImage from "../assets/property Default.png";


import frame60 from "../assets/Frame 60.png";

const Services = () => {

  const data = [
    {
      title: "UI / UX Design",
      img: frame60,
    },
    {
      title: "Web Design",
      img: frame60,
    },
    {
      title: "Landing Page",
      img: frame60,
    },
  ];

  return (
    <section
      className="services"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="services-top">
        <h2>
          My <span>Services</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="services-container">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.title}</h3>

            <div className="image-box">
              <img src={item.img} alt={item.title} />
            </div>

            <button className="arrow">→</button>
          </div>
        ))}
      </div>

      <div className="dots">
        <span></span>
        <span className="active"></span>
        <span></span>
      </div>
    </section>
  );
};

export default Services;
