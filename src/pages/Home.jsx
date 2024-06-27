import React, { useEffect } from 'react';
import '../Styles/travel.css'; // Adjust the path if needed
import natureVideo from '../assets/video/travel-3.mp4'; // Correct import for video file
import { Outlet, Link } from 'react-router-dom';
import natureVideo2 from '../assets/video/naturebg-1.mp4'



const Home = () => {
 
    useEffect(() => {
        const nature = document.querySelector('.nature');
        const iconvideo = document.querySelector('#iconvideo');
        const naturevideo = document.querySelector('.naturevideo');
        const bgvideo = document.getElementById('background-video');
        const welcome = document.querySelector('.welcome1');
        const homeanime = document.querySelector('.homeanime');

        const handleVideoToggle = (event) => {
            event.preventDefault();

            if (!iconvideo.classList.contains('fa-pause')) {
                iconvideo.classList.add('fa-pause');
                iconvideo.classList.remove('fa-play');
                nature.style.background = 'none';
                welcome.style.visibility = 'hidden';
                bgvideo.play();
            } else {
                bgvideo.pause();
                iconvideo.classList.remove('fa-pause');
                iconvideo.classList.add('fa-play');
                welcome.style.visibility = 'visible';
                nature.style.background = 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(../assets/images/naturebg.jpg)';
                nature.style.backgroundAttachment = 'fixed';
                nature.style.backgroundSize = 'cover';
                nature.style.backgroundPosition = 'center';
            }
        };

        const initCarousel = () => {
            const carousel = document.querySelector(".carousel");
            const arrowBtns = document.querySelectorAll(".wrapper i");
            const wrapper = document.querySelector(".wrapper");
            const firstCard = carousel.querySelector(".slidercard");

            if (!firstCard) return;

            const firstCardWidth = firstCard.offsetWidth;

            let isDragging = false,
                startX,
                startScrollLeft,
                timeoutId;

            const dragStart = (e) => {
                isDragging = true;
                carousel.classList.add("dragging");
                startX = e.pageX || e.touches[0].pageX;
                startScrollLeft = carousel.scrollLeft;
            };

            const dragging = (e) => {
                if (!isDragging) return;

                const x = e.pageX || e.touches[0].pageX;
                const newScrollLeft = startScrollLeft - (x - startX);

                if (newScrollLeft <= 0 || newScrollLeft >= carousel.scrollWidth - carousel.offsetWidth) {
                    isDragging = false;
                    return;
                }

                carousel.scrollLeft = newScrollLeft;
            };

            const dragStop = () => {
                isDragging = false;
                carousel.classList.remove("dragging");
            };

            const autoPlay = () => {
                if (window.innerWidth < 800) return;

                const totalCardWidth = carousel.scrollWidth;
                const maxScrollLeft = totalCardWidth - carousel.offsetWidth;

                if (carousel.scrollLeft >= maxScrollLeft) return;

                timeoutId = setTimeout(() =>
                    carousel.scrollLeft += firstCardWidth, 2500);
            };

            carousel.addEventListener("mousedown", dragStart);
            carousel.addEventListener("mousemove", dragging);
            document.addEventListener("mouseup", dragStop);
            carousel.addEventListener("touchstart", dragStart);
            carousel.addEventListener("touchmove", dragging);
            document.addEventListener("touchend", dragStop);
            wrapper.addEventListener("mouseenter", () =>
                clearTimeout(timeoutId));
            wrapper.addEventListener("mouseleave", autoPlay);

            arrowBtns.forEach(btn => {
                btn.addEventListener("click", () => {
                    carousel.scrollLeft += btn.id === "left" ?
                        -firstCardWidth : firstCardWidth;
                });
            });

            autoPlay();
        };

        naturevideo.addEventListener('click', handleVideoToggle);
        setTimeout(initCarousel, 0);

        const footer = document.querySelector('.footerbox');

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

        let hotelanimeObserver;
        if (homeanime) {
            hotelanimeObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('slide-in');
                    } else {
                        entry.target.classList.remove('slide-in');
                    }
                });
            }, { threshold: 0.1 });
            hotelanimeObserver.observe(homeanime);
        }

        return () => {
            naturevideo.removeEventListener('click', handleVideoToggle);
            observer.disconnect();
            if (hotelanimeObserver) hotelanimeObserver.disconnect();
        };

    }, []);


    return (
        <>
            <div className="nature">
                <div className="videoplay">
                    <video loop autoPlay muted id="background-video">
                        <source src={natureVideo} type="video/mp4" />
                    </video>
                </div>

                <div className="welcome">
                    <div className="welcome1 homeanime">
                        <p className="subwelcome">Welcome to Pacific</p>
                        <h3>Discover Your Favorite Place with Us</h3>
                        <p className="subtext">Travel to any corner of the world, without going around in circles</p>
                    </div>
                    <div className="naturevideo">
                        <i className="fa-solid fa-play" id="iconvideo"></i>
                    </div>
                </div>
            </div>

            <div className="services">
                <div>
                    <div className="services-body ">
                        <div className="About-services About-1">
                            <div className="service-icon">
                                <i className="fa-solid fa-biohazard"></i>
                            </div>
                            <div className="services-over-1">
                                <h3 className="title">Activities</h3>
                                <p className="description">A small river named Duden flows by their place and supplies it with the
                                    necessary</p>
                            </div>
                        </div>
                        <div className="About-services About-2">
                            <div className="service-icon">
                                <i className="fa-solid fa-person-walking-luggage"></i>
                            </div>
                            <div className="services-over-2">
                                <h3 className="title">Private Guide</h3>
                                <p className="description">A small river named Duden flows by their place and supplies it with the
                                    necessary</p>
                            </div>
                        </div>
                    </div>
                    <div className="services-body ">
                        <div className="About-services About-3">
                            <div className="service-icon">
                                <i className="fa-solid fa-motorcycle"></i>
                            </div>
                            <div className="services-over-3">
                                <h3 className="title">Travel Arrangements</h3>
                                <p className="description">A small river named Duden flows by their place and supplies it with the
                                    necessary</p>
                            </div>
                        </div>

                        <div className="About-services About-4">
                            <div className="service-icon">
                                <i className="fa-solid fa-route"></i> </div>
                            <div className="services-over-4">
                                <h3 className="title">Location Manager</h3>
                                <p className="description">A small river named Duden flows by their place and supplies it with the
                                    necessary</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="media-body">
                    <h2>Welcome To Pacific</h2>
                    <h1>It's time to start your adventure</h1>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of sentences fly into your mouth.

                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                        the
                        blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
                        language
                        ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
                    </p>
                    <Link to="/Destination">Search Destination</Link>
                </div>
            </div>

            <div className="places">
                <div className="places-head">
                    <h3>Pacific Provide Places</h3>
                    <h1>Select Your Destination</h1>
                </div>
            </div>

            <div className="wrapperbody">
                <div className="wrapper">
                    <i id="left" className="fa-solid fas fa-angle-left"></i>
                    <ul className="carousel">
                        <li className="slidercard">
                            <div className="tourimg1">
                                <h3 className="placetitle">Philippines</h3>
                            </div>
                        </li>
                        <li className="slidercard">
                            <div className="tourimg2">
                                <h3 className="placetitle">Canada</h3>
                            </div>
                        </li>
                        <li className="slidercard">
                            <div className="tourimg3">
                                <h3 className="placetitle">Thailand</h3>
                            </div>
                        </li>
                        <li className="slidercard">
                            <div className="tourimg4">
                                <h3 className="placetitle">Australia</h3>
                            </div>
                        </li>
                        <li className="slidercard">
                            <div className="tourimg5">
                                <h3 className="placetitle">Italy</h3>
                            </div>
                        </li>
                        <li className="slidercard">
                            <div className="tourimg6">
                                <h3 className="placetitle">Greece</h3>
                            </div>
                        </li>
                        <li className="slidercard">
                            <div className="tourimg7">
                                <h3 className="placetitle">Switzerland</h3>
                            </div>
                        </li>
                        <li className="slidercard">
                            <div className="tourimg8">
                                <h3 className="placetitle">France</h3>
                            </div>
                        </li>
                    </ul>
                    <i id="right" className="fa-solid fas fa-angle-right"></i>
                </div>
            </div>

             

            <div className='footer-container mt-5'>
                <div className="videoplay">
                    <video loop autoPlay muted id="background-video">
                        <source src={natureVideo2} type="video/mp4" />
                    </video>
                </div>
             <div className="footerbox">
                <div className="footer">

                    <div className="footer-about">
                        <h2>About</h2>
                        <p>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                        </p>
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
                       <div>  <i class="bi bi-geo-alt-fill location"></i> </div> 
                       <div className="flex-flow-box"> <p> 203 Falk St. Mountain View, San Francisco, California, USA </p></div>
                    </div>

                    <div className="footer-contact-box">
                        <div><i class="bi bi-telephone-fill"></i></div>
                        <div className="flex-flow-box"> <p> +2 392 3527 250 </p></div>
                   </div>

                   <div className="footer-contact-box">
                       <div><i class="bi bi-send-fill"></i></div>
                       <div className="flex-flow-box"><p> info@yourdomain.com</p></div>
                   </div>
                     
                   
                    
                    </div>


                </div>

                <div className="copyrights">
                Copyright ©2024 All rights reserved | This project is made  by Kishoth-45
                </div>
               </div>
            </div>
            
            <Outlet />
        </>
    );
};

export default Home;
