import("./Home.css")
import Property10 from "../assets/Property10.png";
const Home=()=>{
    return(
        <section
              className="services"
              style={{
                backgroundImage: `url(${Property10})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              >
              </section>
    )
}
export default Home