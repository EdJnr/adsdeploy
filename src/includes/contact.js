import '../css/contact.css';
import '../css/whyus.css';
const Contact = () => {
    return (
        <div className="contact" id = 'contact'>
            {/* header */}
            <header className = 'why-us-header' data-aos="fade-up">
                <h1>Lets Get In Touch!</h1>
                <div className = 'underline'></div>
            </header>

            {/* content */}
            <div className="contact-us-content">
                {/* infos */}
                <div className="contact-infos" data-aos="fade-right">
                    <div className="contact-location">
                        <p><i className="material-icons">room</i>Your company location</p>
                    </div>
                    <div className="contact-email">
                        <p><i className="material-icons">email</i>your_company@gmail.com</p>
                    </div>
                    <div className="contact-phone">
                        <p><i className="material-icons">call</i>(+123) 458 556 8848</p>
                    </div>
                    <div className="contact-social-media">
                        <a href=""><i class="bi bi-facebook"></i></a>
                        <a href=""><i class="bi bi-twitter"></i></a>
                        <a href=""><i class="bi bi-instagram"></i></a>
                    </div>
                </div>


                {/* form */}
                <form className ="contact-form" data-aos="fade-left">
                    <h6>form</h6>
                    <input id="name" className="contact-form-name" type="text" name="name" placeholder="What's your name"/>

                    <input id="message" className="contact-form-message" type="text" name="message" placeholder="Tell us something....."/>
                    <button id="contact-form-submit">Send <i className="bi bi-cursor"></i></button>
                </form>

            </div>
        </div>// end of contact main
    );
}
 
export default Contact;