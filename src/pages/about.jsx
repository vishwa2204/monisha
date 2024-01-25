import React from 'react';

import '../assests/css/about.css';

import { Link } from 'react-router-dom';

// R-Icons 
import { CiHome } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { GoGoal } from "react-icons/go";
import { FaRegEye } from "react-icons/fa6";

// Images 
import aboutBanner from '../../src/assests/images/monisha/4.jpeg';
import aboutSec1 from '../assests/images/monisha/home/3.jpeg';
import aboutSec2 from '../assests/images/monisha/home/2.jpg';
import aboutProject from '../assests/images/monisha/service/bathroom.jpg'
import aboutProject1 from '../assests/images/monisha/service/2.jpg'
import aboutProject2 from '../assests/images/monisha/service/moduler.jpg'
import aboutProject3 from '../assests/images/monisha/service/modulerkitchen.jpg'
import aboutProject4 from '../assests/images/monisha/service/poojaunit.jpg'


function About() {
  return (
    <>
      <section className="about-banner">
        <div className="about-banner-images">
          <img src={aboutBanner} alt="aboutBanner" />

          <div className="about-content">
            <h1>About Us</h1>
          </div>
          <div className="about-banner-nav">
            <div className="aboutNav">
              <CiHome className='some' /> <Link to="/" ><span>Home</span> </Link> / About
            </div>

          </div>
        </div>
      </section>

      {/* About Banner End  */}

      <section className="about-section">
        <div className="about-page-container container">
          <div className="about-section-content">
            <span>About Monisha Interior</span>
            <h2>Unleashing the Power of Imagination, Redefining Spaces with Us</h2>
            <h4>We have been committed to providing the best services in the business since 1998.</h4>

            <p><b>Diverse aesthetics:</b> You may build a room that genuinely reflects your unique style thanks to the large choice of aesthetic types available at interior designs in Coimbatore, which appeal to every inclination.</p>

            <p><b>Attention to detail:</b> We pay close attention to every little detail in your interior design, making sure that nothing is overlooked and that every little detail enhances the overall look.</p>

            <p><b>Color expertise:</b> Thanks to our in-depth knowledge of the color wheel, we can create aesthetically pleasing and calming color schemes that improve the atmosphere of your places.</p>

          </div>
          <div className="about-section-images">
            <img src={aboutSec1} className='about-img1' alt="about-sec" />
            <img src={aboutSec2} className='about-img2' alt="about-sec" />

            <div className="about-sec-exp">
              <h2>25Years</h2>
              <span>of Experiences</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section End  */}

      {/* About Mini Content Start */}

      <section className="about-mini-content">
        <div className="about-mini-container container">
          <div className="about-content-box">
            <h2>The Best Interior Work Company</h2>
            <p>Here is the method and various stages for you to shop for custom made modular kitchen, wardrobe and lifestyle from us. At each stage, our experienced and skilled team will assist you to form your choice and decisions, simpler and easier.</p>

            <Link>
              <span className='about-connect'>
                Connect to Experts
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Mini Content End */}

      {/* About Project Start */}

      <section className="about-project-section">
        <div className="about-project-container container">
          <div className="about-project-title">
            <span>Our Projects</span>
            <h2>Showcasing Our <span>Latest Masterpieces</span> </h2>
          </div>
          <div className="about-project-content">
            <div className="about-project-background">
              <div className="about-project-contact">
                <p>Do You Have Any Questions? Call.</p>
                <IoCallOutline className='about-call' />
                <h5>Contact</h5>
                <a href="tel:9788537772">9788537772</a>
                <a href="tel:9443348032">9443348032</a>
              </div>
            </div>
            <div className="about-project-images">
              <div className="about-images-contain">
                <img src={aboutProject1} alt="ourProjects" />
                <img src={aboutProject2} alt="ourProjects" />
                <img src={aboutProject3} alt="ourProjects" />
                <img src={aboutProject4} alt="ourProjects" />
              </div>
              <div className="about-mission-vision">
                <h2>Interior Design In Hosur</h2>
                <h3>Creating the Art of Stylish Living</h3>
                <p>Our love for transformative design is what fuels our passion at Monisha Interiors. Every space, in our opinion, has the capacity to uplift and inspire the lives of those who occupy it.</p>
                <div className="about-mission-container">
                  <div className="about-mission-boxs">
                    <GoGoal className='about-mis-icon' />
                    <h3>Mission</h3>
                    <p>Our designs are elegant, and our staff members have a wealth of expertise managing several challenging projects under their belts.</p>
                  </div>
                  <div className="about-mission-boxs">
                    <FaRegEye className='about-mis-icon' />
                    <h3>Vision</h3>
                    <p>Our sole goal is to witness your delighted expression, admiration in your gaze, and disdain in your heart when you ultimately realize your dreams—but this time, with actual objects instead of imaginary ones.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Project End */}
    </>
  )
}

export default About