import '../css/whyus.css';

// IMPORTING LOCAL IMAGES
import illustration1 from '../imgs/location.svg';
import illustration2 from '../imgs/staff.svg';
import illustration3 from '../imgs/save.svg';

const Whyus = () => {
    return(
        // MAIN CONTAINER
        <div className = 'why-us' id = 'whyus'>
            <header className = 'why-us-header'>
                <h1>Why Advertise With Us?</h1>
                <div className = 'underline'></div>
            </header>

            {/* cards container */}
            <div className = 'why-us-cards'>

                {/* card 1 */}
                <div className = 'why-us-card-item'>
                    {/* illustration */}
                    <section className = 'illustration-area' data-aos="fade-right">
                        <img className= 'illustration' src = {illustration1} alt = 'illustration'/>
                    </section>

                    {/* text */}
                    <section className = 'text-area' data-aos="fade-left">
                        <h5>We're Everywhere</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus reprehenderit sit molestiae impedit ea nostrum?</p>
                    </section>
                </div>

                {/* card 2 */}
                <div className = 'why-us-card-item'>
                    {/* illustration */}
                    <section className = 'illustration-area' data-aos="fade-left">
                        <img  className= 'illustration' src = {illustration2} alt = 'illustration'/>
                    </section>

                    {/* text */}
                    <section className = 'text-area' data-aos="fade-right">
                        <h5>Qualified and Productive Staff</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus reprehenderit sit molestiae impedit ea nostrum?</p>
                    </section>
                </div>

                {/* card3 */}
                <div className = 'why-us-card-item'>
                    {/* illustration */}
                    <section className = 'illustration-area' data-aos="fade-right">
                        <img  className= 'illustration' src = {illustration3} alt = 'illustration'/>
                    </section>

                    {/* text */}
                    <section className = 'text-area' data-aos="fade-left">
                        <h5>Comparatively low cost</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus reprehenderit sit molestiae impedit ea nostrum?</p>
                    </section>
                </div>


            </div>{/* end of cards */}
            

        </div> // end of why us

    );
}
 
export default Whyus;