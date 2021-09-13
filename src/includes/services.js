import { useState } from 'react';
import '../css/services.css';
import '../css/whyus.css';
import service1 from '../imgs/ads.jpg'
import service2 from '../imgs/announcement.jpg'
import service3 from '../imgs/studio.jpg'

const Services = () => {
    // STATE TO STORE SERVICES DETAILS
    const[services,addservice] = useState ([
        {head : 'Advertisements' , body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, explicabo', img : service1, effect : 'fade-right', id : 1},
        {head : 'Announcements' , body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, explicabo',  img : service2, effect : 'fade-in', id : 2},
        {head : 'Studio Bookings' , body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, explicabo',  img : service3, effect : 'fade-left', id : 3}
    ])
    return (
        <div className="services" id = 'services'>
            {/* head [styles imported from whyus.css] */}
            <header className = 'why-us-header' data-aos="fade-up">
                <h1>What We Offer?</h1>
                <div className = 'underline'></div>
            </header>


            {/* services cards */}
            <div className="service-cards-container">
                {/* service cards */}
                {services.map((service) =>(
                    // card
                    <div className="service-card-item" key = {service.id} data-aos = {service.effect}>
                        {/* img */}
                        <div className="service-img-holder">
                            <img className = 'service-img' src ={service.img} alt="img" />
                        </div>

                        {/* text & btn */}
                        <div className="service-text">
                            <h2>{service.head}</h2>
                            <p>{service.body}</p>
                            <button>Learn more</button>
                        </div>
                    </div>
                ))}
            </div>
        </div> // end of main services
    );
}
 
export default Services;