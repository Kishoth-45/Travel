import React, { useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import '../Styles/destination-about.css';

const About = () => {

  useEffect(() => {

    const footer = document.querySelector('.footerbox');
    const aboutanime = document.querySelector('.aboutanime');

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in');
          observer.unobserve(entry.target); // Unobserve the element after adding the class
        }
      });
    };

    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (footer) {
      observer.observe(footer);
    }


    if (aboutanime) {
      const hotelanimeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
          } else {
            entry.target.classList.remove('slide-in');
          }
        });
      }, { threshold: 0.1 });
      hotelanimeObserver.observe(aboutanime);

      return () => {
        observer.disconnect();
        hotelanimeObserver.disconnect();

      }
    }

  }, []);


  return (
    <>
      <div id="carouselExampleCaptions" className="carousel aboutcarousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={require('../assets/images/nature-1.jpg')} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block">
              <h3>“Travel far enough, you meet yourself.”</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src={require('../assets/images/nature-2.jpg')} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block">
              <h3>“We live in a wonderful world that is full of beauty, charm and adventure.”</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src={require('../assets/images/nature-3.jpg')} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block">
              <h3>“One Life. One World. Explore it!”</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src={require('../assets/images/nature-5.jpg')} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block">
              <h3>“Making memories to last a lifetime”</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src={require('../assets/images/nature-7.jpg')} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-md-block">
              <h3>“Life should have more mountains and less stress”</h3>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="aboutus mt-5">
        <h2 className='aboutanime'>About Us</h2>
        <div className="subabout">
          <div></div>
        </div>
      </div>
      <div className="aboutcontain">
        <div className="abouttext">
          <h1>Make Your Tour Memorable and Safe With Us</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <Link to="/" className="aboutlink">Search Destination</Link>
        </div>
      </div>

      <div className='footer-container about-footerbg'>

        <div className="footerbox about-footerbox">
          <div className="footer">
            <div className="footer-about">
              <h2>About</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <div className="footer-icons">
                <Link to='https://www.twitter.com'> <i class="bi bi-twitter"></i> </Link>
                <Link to='https://www.facebook.com/khiladi.kishoth.3'> <i class="bi bi-facebook"></i> </Link>
                <Link to='https://www.instagram.com/khiladiking45/'> <i class="bi bi-instagram"></i> </Link>
              </div>
            </div>

            <div className="footer-information">
              <h2>Information</h2>
              <p>Online Enquiry</p>
              <p>General Enquiries</p>
              <p>Booking Conditions</p>
              <p>Privacy and Policy</p>
              <p>Refund Policy</p>
              <p>Call Us</p>
            </div>

            <div className="footer-experience">
              <h2>Experience</h2>
              <p>Adventure</p>
              <p>Hotel and Restaurant</p>
              <p>Beach</p>
              <p>Nature</p>
              <p>Camping</p>
              <p>Party</p>
            </div>

            <div className="footer-contact">
              <h2>Contact</h2>
              <div className="footer-contact-box">
                <div><i className="bi bi-geo-alt-fill location"></i></div>
                <div className="flex-flow-box"><p>203 Falk St. Mountain View, San Francisco, California, USA</p></div>
              </div>

              <div className="footer-contact-box">
                <div><i className="bi bi-telephone-fill"></i></div>
                <div className="flex-flow-box"><p>+2 392 3527 250</p></div>
              </div>

              <div className="footer-contact-box">
                <div><i className="bi bi-send-fill"></i></div>
                <div className="flex-flow-box"><p>info@yourdomain.com</p></div>
              </div>
            </div>
          </div>
          <div className="copyrights">
            Copyright ©2024 All rights reserved | This project is made by Kishoth-45
          </div>
        </div>
      </div>

      <Outlet />
    </>
  )
}

export default About;
