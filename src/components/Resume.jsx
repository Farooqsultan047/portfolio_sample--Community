import "./resume.css"
const Resume = () =>{
    return(
        <div className="container">
            <h1>
             My <span> Work Experince </span>
             </h1>
             <div className="timeline">
        <div className="first-section">
        <div className="item">
            <h3>Cognizant, Mumbai</h3>
            <p>Sep 2016-july 2020</p>
            
        </div>
         <div className="item">
            <h3>Sugee PVT Limited, Mumbai</h3>
            <p>sep 2020-july 2023</p>
            </div>
             <div className="item">
            <h3>Cinestox, Mumbai</h3>
            <p>Sep 2023</p>
        </div>
        </div>

        <div className="second-section">
            <div className="itemi">
            <h3>Experince Designer</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa maiores magnam doloremque animi illo voluptates, aliquid amet vitae voluptate  </p>
            </div>
              <div className="itemi">
            <h3>UI/UX Designer</h3>
           <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos officiis asperiores non ratione aperiam aut nihil molestiae, quasi sapiente </p>
           </div>
           <div className="itemi">
        <h3>Lead UX Designer</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iure repudiandae, labore voluptatum pariatur ratione sunt quisquam optio. </p>
        </div>
        </div>
         </div>
        </div>
    )
} 
export default Resume 