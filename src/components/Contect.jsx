
import "./contact.css";

const Contect = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Lets Connect there</h2>
        <button className="hire-btn">Hire me ↗</button>
         <br/>
      </div>
    
      <div className="footer-content">
        {/* Left: Logo + Text + Social */}
        <div className="footer-left">
          <div className="logo">
            <div className="logo-icon">JC</div>
            <span>JCREA</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            congue interdum ligula a dignissim. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed lobortis orci elementum egestas
            lobortis.
          </p>
         
        </div>

        {/* Center: Navigation & Contact */}
        <div className="footer-center">
          <div className="nav">
            <h4>Navigation</h4>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Service</li>
              <li>Resume</li>
              <li>Project</li>
            </ul>
          </div>
          <div className="contact">
            <h4>Contact</h4>
            <ul>
              <li>+20 11 43 63 73 41</li>
              <li>fawziayed1209@gmail.com</li>
              <li>fawziiux.com</li>
            </ul>
          </div>
        </div>

        {/* Right: Newsletter */}
        <div className="footer-right">
          <h4>Get the latest information</h4>
          <div className="newsletter">
            <input type="email" placeholder="Email Address" />
            <button>→</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>Copyright © 2023 Fawziiuiux. All Rights Reserved.</span>
        <span>User Terms & Conditions | Privacy Policy</span>
      </div>
    </footer>
  );
};

export default Contect;