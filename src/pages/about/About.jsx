import React from 'react'
import "./about.scss";
import { BsBagFill } from "react-icons/bs";
import { BsFillBuildingsFill } from "react-icons/bs";
import { IoManSharp } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";




const About = () => {
  return (
    <section className="about">
      <div className="container">
         <div className="about-heading">
            <h5>About us</h5>
            <h5>Home/About us</h5>
         </div>
           <div className="about-wrapper">
               <div className="about-containt">
                  <h5>how We are</h5>
                   <h1>We're highly skilled and professionals team. </h1>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam ipsum dolore libero accusamus vel magnam consequatur, eaque officia possimus. Facere aut mollitia nobis voluptatibus aperiam ab necessitatibus ad, dolor fugiat.</p>
               </div>
                <div className="about-icon">
                    <div className="icon">
                        <span> <BsBagFill /></span> 
                          <div className="icon-ittal">
                            <h4> 175324</h4>
                            <p>Live Job</p>
                          </div>
                    </div>
                    <div className="icon">
                       <span>  <BsFillBuildingsFill /> </span>
                       <div className="icon-ittal">
                         <h4>97354</h4>
                         <p>Companines</p>
                       </div>
                    </div>
                    <div className="icon">
                       <span>  <IoManSharp /> </span>
                       <div className="icon-ittal">
                         <h4>97354</h4>
                         <p>Companines</p>
                       </div>
                    </div>
                </div>
           </div>
           <div className="companes">
              <div className="about-companes">
                   <img src="public/spanser (1).png" alt="not found" />
              </div>
              <div className="about-companes">
                   <img src="public/spanser (2).png" alt="not found" />
              </div>
              <div className="about-companes">
                   <img src="public/spanser (3).png" alt="not found" />
              </div>
              <div className="about-companes">
                   <img src="public/spanser (4).png" alt="not found" />
              </div>
              <div className="about-companes">
                   <img src="public/spanser (5).png" alt="not found" />
              </div>
              <div className="about-companes">
                   <img src="public/spanser (5).png" alt="not found" />
              </div>
           </div>
           <div className="about-images">
              <div className="item">
                  <img src="public/downl.jpg" alt="not found" />
              </div>
              <div className="item">
                  <img src="public/metting.jpg" alt="not found" />
              </div>
              <div className="item">
                  <img src="public/employee_img.jpg" alt="not found" />
              </div>
           </div>
            <div className="about-mission">
               <div className="mission-wrapper">
                    <div className="mission-item">
                       <h5>our mission</h5>
                       <h1>our mission is help people to find the perfect job.</h1>
                       <p> Praesent non sem facilisis, hendrerit nisi vitae, volutpat quam. Aliquam metis mauris, semper eu reos vitae, blandit tristique metus. Vestibulum maximus nec justo maximus.</p>
                    </div>
                     <div className="mission-image">
                         <img src="public/banner_img.png" alt="not found"/>
                     </div>
               </div>
            </div>
             <div className="about-testimonial">
                <div className="testimonial-image">
                   <img src="public/employee_img.jpg" alt="not found"/>
                </div>
                 <div className="testimonial-item">
                    <h5>testimonial</h5>
                    <h3> What our poeple says</h3>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, architecto! Distinctio veniam deleniti error sequi reprehenderit vel non doloribus a inventore cumque voluptatem cupiditate, debitis minus iure? Similique, iusto minima!</p>
                    <div className="man-info">
                       <h6>John Wick</h6>
                       <span>Creative Director</span>
                    </div>
                     <div className="testimonial-icon">
                        <div className="icon">
                           <FaArrowLeft className="arrow" />
                        </div>
                        <div className="icon">
                            <FaArrowRight className="arrow" />
                        </div>
                     </div>
                 </div>
             </div>
               <div className="about-descriptation">
                  <div className="descriptation-item">
                    <img src="public/e-commerce.jpg" alt="not found" />
                  </div>
                  <div className="descriptation-item">
                    <img src="public/feature.jpg" alt="not found" />
                  </div>  
             </div>
         </div>
     </section>
  )
}

export default About