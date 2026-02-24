import("./Home.css")
import Frametoo from "../assets/Frametoo.png";
const Home=()=>{
    return(
        <section
              className="services"
              style={{
                backgroundImage: `url(${Frametoo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              >
              </section>
    )
}
export default Home