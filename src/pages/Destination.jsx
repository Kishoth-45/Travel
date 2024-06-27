import React from "react";
import { useEffect } from 'react';
import { Outlet,Link } from "react-router-dom";
import '../Styles/destination-about.css'


const Destination = () => {
    useEffect(()=>{
    
        const footer = document.querySelector('.footerbox');
        const destianime = document.querySelector('.destianime');

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
        

        if (destianime) {
            const hotelanimeObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('slide-in');
                    } else {
                        entry.target.classList.remove('slide-in');
                    }
                });
            }, { threshold: 0.1 });
            hotelanimeObserver.observe(destianime);

            return () => {
                observer.disconnect();
                hotelanimeObserver.disconnect();
                
            }
        }
     
    },[]);
    return (
        <>
           <div className="destinationbg">
            <h2 className="destianime">Destination</h2>
           </div>
                
            <div className="container mt-5">

                <div className="destination">

                    <div className="destination-places dp-1">
                        <h3 class="placerate">$400 / person</h3>
                        <div className="destination-content">
                            <p>3 days Tour</p>
                            <h2>Munnar</h2>
                            <h3><i class="bi bi-geo-alt-fill"></i> Munnar Kerala, India</h3>
                            <div> <img src={require('../assets/images/icon-mountain-1.jpg')} height={'40px'} alt="munnar" /> Forest</div>
                        </div>
                    </div>
                    <div className="destination-places dp-2 margin-place">
                        <h3 class="placerate"> $600 / person</h3>
                        <div className="destination-content">
                            <p>6 days Tour</p>
                            <h2>The Shard</h2>
                            <h3> <i class="bi bi-geo-alt-fill"></i> London, England</h3>
                            <div>  <img src={require('../assets/images/icon-beach-2.jpg')} height={'40px'} alt="london" /> Beach</div>
                        </div>
                    </div>
                    <div className="destination-places dp-3 margin-place">
                        <h3 class="placerate">$500/person</h3>
                        <div className="destination-content">
                            <p>10 days Tour</p>
                            <h2>Dotonbori</h2>
                            <h3><i class="bi bi-geo-alt-fill"></i> Osaka, Japan</h3>
                            <div><img src={require('../assets/images/icon-city-2.jpg')} height={'40px'} alt="japan" /> City</div>
                        </div>
                    </div>

                </div>



                <div className="destination2 mt-5">

                    <div className="destination-places dp-7 margin-place">
                        <h3 class="placerate">$800/person</h3>
                        <div className="destination-content">
                            <p>7 days Tour</p>
                            <h2>Angel Falls</h2>
                            <h3><i class="bi bi-geo-alt-fill"></i> Venezuela</h3>
                            <div> <img src={require('../assets/images/icon-falls.jpg')} height={'40px'} alt="venezuela" />  Water Falls</div>
                        </div>
                    </div>
                    <div className="destination-places dp-8 margin-place">
                        <h3 class="placerate">$900/person</h3>
                        <div className="destination-content">
                            <p>11 days Tour</p>
                            <h2>Summer Palace</h2>
                            <h3><i class="bi bi-geo-alt-fill"></i> Palace in Beijing, China</h3>
                            <div><img src={require('../assets/images/icon-city-beach.jpg')} height={'40px'} alt="china" /> Beach</div>
                        </div>
                    </div>
                    <div className="destination-places dp-9 margin-place">
                        <h3 class="placerate">&400/person</h3>
                        <div className="destination-content">
                            <p>6 days Tour</p>
                            <h2>Eiffel Tower</h2>
                            <h3><i class="bi bi-geo-alt-fill"></i> Paris</h3>
                            <div><img src={require('../assets/images/icon-city-3.jpg')} height={'45px'} alt="london" /> Tower</div>
                        </div>
                    </div>

                </div>



                <div className="destination2 mt-5">

                    <div className="destination-places dp-4 margin-place">
                        <h3 class="placerate">$500/person</h3>
                        <div className="destination-content">
                            <p>5 days Tour</p>
                            <h2>Krabi</h2>
                            <h3><i class="bi bi-geo-alt-fill"></i> Thailand</h3>
                            <div> <img src={require('../assets/images/travel-logo-2.jpg')} height={'40px'} alt="london" /> Beach</div>
                        </div>
                    </div>
                    <div className="destination-places dp-5 margin-place">
                        <h3 class="placerate">$300/person</h3>
                        <div className="destination-content">
                            <p>3 days Tour</p>
                            <h2> The Cardamom Hills </h2>
                            <h3><i class="bi bi-geo-alt-fill"></i> Kerala, India</h3>
                            <div><img src={require('../assets/images/icon-mountain-4.jpg')} height={'40px'} alt="london" />  Mountain</div>
                        </div>
                    </div>
                    <div className="destination-places dp-6 margin-place">
                        <h3 class="placerate">$700/person</h3>
                        <div className="destination-content">
                            <p>7 days Tour</p>
                            <h2>Palolem Beach</h2>
                            <h3><i class="bi bi-geo-alt-fill"></i> I-land</h3>
                            <div><img src={require('../assets/images/icon-beach-3.jpg')} height={'30px'} width={'40px'} alt="london" /> Beach</div>
                        </div>
                    </div>

                </div>


            </div>


            <div className='footer-container mt-5 destination-footerbg'>
             <div className="footerbox destination-footerbox">
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

export default Destination;