
import "./project.css";
import hire from "../assets/hire.png"
import Frame11 from"..//assets/Frame11.png"
import image from "../assets/image.png"
import component from "../assets/component.png"
import least from "../assets/least.png"
import pak from "../assets/pak.png"
import property2 from "../assets/property2.png"
const Project = () =>{
    return(
      <div className="Head">
       <div className="bedy">

    <section className="hire">
      <div className="hire-container">

    
        <div className="hire-img">
          <img src={hire} alt="profile" />
        </div>

       
        <div className="hire-content">
          <h2>
            Why <span>Hire me?</span>
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Duis lacus nunc, posuere in justo vulputate, bibendum sodales.
          </p>

          <div className="stats">
            <div>
              <h3>450+</h3>
              <p>Project Completed</p>
            </div>

            <div>
              <h3>450+</h3>
              <p>Happy Clients</p>
            </div>
          </div>

          <button className="hire-btn">Hire me</button>
        </div>

      </div>
    </section>

</div>
<div className="head2">
  <div className="top-row">
    <h1>Lets have a look at  my<span className="port"> Portfolio</span></h1>
    <button className="click">See All</button>
  </div>

  <div 
    className="picture"
    style={{
      backgroundImage: `url(${Frame11})`,
    }}
  >
  </div>
</div>

<div className="start">
  <div className="that">
    <h1>
      Testimaonials That Speak to <span className="result">My Results</span>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt rem sed dolorum pariatur perspiciatis dignissimos numquam recusandae non, porro quidem expedita quae quaerat quis et eius ea tempore voluptatibus quas!</p>
    </h1>
  </div>
   <div className="card-container">
 <div className="card">
  <div className="profile">
    <div className="profile1">
      <div
        className="image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h3 className="name">Fawzi Sayed</h3>
      <p className="position">UI/UX Designer</p>
      <p className="testimonial">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua."
      </p>
    </div>
  </div>
</div>

 <div className="card">
  <div className="profile">
    <div className="profile1">
      <div
        className="image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h3 className="name">Farooq Sultan</h3>
      <p className="position">Mern Stack Developer</p>
      <p className="testimonial">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua."
      </p>
    </div>
  </div>
</div>
</div>
</div>



<div className="All">
  <div className="have">
    <h1>Have an Awsome Project Idea? <span className="let"> Let's Discuss</span></h1>
    <input type="text" placeholder="Enter your email" />
    <button className="submit">Send</button>
    <p>4.9?/5 Average Ratings</p>
    <p>25+ Winning Awards</p>
    <p>Certified Product Designer</p>
     </div>
    <div className="image1" style={{ backgroundImage: `url(${component})` }}> </div>
    
  </div>

<div className="images">
  
  <h1>From My blog Post</h1>
  <button className="button"> Seen All</button>
 <div className="images-row">
  <div className="image2" style={{ backgroundImage: `url(${pak})` }}></div>
  <div className="image3" style={{ backgroundImage: `url(${least})` }}></div>
  <div className="image4" style={{ backgroundImage: `url(${property2})` }}></div>
</div>
 <div class="images-row">

  <div class="image-card">
    <div class="img image2"></div>
    <h3>Ui/UX Design</h3>
    <span>Farooq Sultan 10 Nov,2024</span>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, reiciendis! Veniam, ullam magni! Quas, rem quae. Nobis sequi mollitia repellat doloribus, incidunt consequuntur esse illo voluptatum minus, quod unde non?</p>
  </div>

  <div class="image-card">
    <div class="img image3"></div>
    <h3>Web Development</h3>
    <span> Ali Hussain 15 may,2026</span>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, reiciendis! Veniam, ullam magni! Quas, rem quae. Nobis sequi mollitia repellat doloribus, incidunt consequuntur esse illo voluptatum minus, quod unde non?</p>
  </div>

  <div class="image-card">
    <div class="img image4"></div>
    <h3>Mobile App Design</h3>
    <span> Usman Ali 20 Dec,2025</span>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, reiciendis! Veniam, ullam magni! Quas, rem quae. Nobis sequi mollitia repellat doloribus, incidunt consequuntur esse illo voluptatum minus, quod unde non?</p>
  </div>

</div>


</div>



</div>



    )
    
} 

export default Project