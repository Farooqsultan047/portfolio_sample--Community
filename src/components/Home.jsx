import("./Home.css")
import Homepage from "../assets/Homepage.png";
const Home=()=>{
    return(
        <section
              className="services"
              style={{
                backgroundImage: `url(${Homepage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              >
              </section>
    )
}
export default Home