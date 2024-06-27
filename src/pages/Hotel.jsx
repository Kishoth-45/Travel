import React, { useEffect } from 'react';
import { Outlet,Link } from "react-router-dom";
import '../Styles/destination-about.css';


const Hotel = () => {

    useEffect(()=>{
    
        const footer = document.querySelector('.footerbox');
        const hotelanime = document.querySelector('.hotelanime');

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

       


        // For the hotelanime: Slide in every time it comes into view
        if (hotelanime) {
            const hotelanimeObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('slide-in');
                    } else {
                        entry.target.classList.remove('slide-in');
                    }
                });
            }, { threshold: 0.1 });
            hotelanimeObserver.observe(hotelanime);

            return () => {
                observer.disconnect();
                hotelanimeObserver.disconnect();
                
            }
        }
     
    },[]);

    return (
        <>

            <div className="hotelbg">
                <h2 className='hotelanime'>Hotel</h2>
            </div>


            <div className="container mt-5">

                <div className="hotel">

                    <div className="hotel-places hp-1">
                        <h3 class="hotelrate">$500/person</h3>
                        <div className="hotel-content">
                            <p>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </p>
                            <p>8 days Tour</p>
                            <h2>Beverly Hills Hotel</h2>
                            <h3><i class="bi bi-geo-alt-fill location"></i> Los Angeles</h3>
                        </div>
                    </div>
                    <div className="hotel-places hp-2 margin-place">
                        <h3 class="hotelrate">$300/person</h3>
                        <div className="hotel-content">
                            <p>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </p>
                            <p>5 days Tour</p>
                            <h2>Rosewood</h2>
                            <h3><i class="bi bi-geo-alt-fill location"></i> Hong Kong</h3>
                        </div>
                    </div>
                    <div className="hotel-places hp-3 margin-place">
                        <h3 class="hotelrate">$700/person</h3>
                        <div className="hotel-content">
                            <p>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-half"></i>
                            </p>
                            <p>5 days Tour</p>
                            <h2>The Upper House</h2>
                            <h3><i class="bi bi-geo-alt-fill location"></i> Italy</h3>
                        </div>
                    </div>

                </div>



                <div className="hotel2 mt-5">

                    <div className="hotel-places hp-4 margin-place">
                        <h3 class="hotelrate">$800/person</h3>
                        <div className="hotel-content">
                            <p>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </p>
                            <p>10 days Tour</p>
                            <h2>Aman , Tokyo</h2>
                            <h3><i class="bi bi-geo-alt-fill location"></i> Tokyo</h3>
                        </div>
                    </div>
                    <div className="hotel-places hp-5 margin-place">
                        <h3 class="hotelrate">$200/person</h3>
                        <div className="hotel-content">
                            <p>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-half"></i>
                            </p>
                            <p>4 days Tour</p>
                            <h2>Raffles</h2>
                            <h3><i class="bi bi-geo-alt-fill location"></i> Singapore</h3>
                        </div>
                    </div>
                    <div className="hotel-places hp-6 margin-place">
                        <h3 class="hotelrate">$700/person</h3>
                        <div className="hotel-content">
                            <p>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </p>
                            <p>15 days Tour</p>
                            <h2>Soneva Fushi</h2>
                            <h3><i class="bi bi-geo-alt-fill location"></i> Maldives.</h3>
                        </div>
                    </div>

                </div>



                <div className="hotel2 mt-5">

                    <div className="hotel-places hp-7 margin-place">
                        <h3 class="hotelrate">$500/person</h3>
                        <div className="hotel-content">
                            <p>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-half"></i>
                            </p>
                            <p>8 days Tour</p>
                            <h2>Claridge's</h2>
                            <h3><i class="bi bi-geo-alt-fill location"></i> London</h3>
                        </div>
                    </div>
                    <div className="hotel-places hp-8 margin-place">
                        <h3 class="hotelrate">$600/person</h3>
                        <div className="hotel-content">
                            <p>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </p>
                            <p>6 days Tour</p>
                            <h2>The Plaza</h2>
                            <h3><i class="bi bi-geo-alt-fill location"></i> New York</h3>
                        </div>
                    </div>
                    <div className="hotel-places hp-9 margin-place">
                        <h3 class="hotelrate">$500/person</h3>
                        <div className="hotel-content">
                            <p>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </p>
                            <p>5 days Tour</p>
                            <h2>Hotel Ritz</h2>
                            <h3><i class="bi bi-geo-alt-fill location"></i> Paris</h3>
                        </div>
                    </div>

                </div>


            </div>


            <div className='footer-container mt-5 hotel-footerbg'>
            
                <div className="footerbox hotel-footerbox">
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
    )
}

export default Hotel;