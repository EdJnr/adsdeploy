import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import { useHistory } from "react-router-dom";
import '../css/landing.css' 

const Landing = () => {
    // display status of menu list
    const[menu_list, show_menu_list] = useState(false);
    const[nav_on_scroll,set_nav_on_scroll] = useState(false);
    const[boxShadow,setBoxShadow] = useState(false)
    const history = useHistory();
    //menu list bring toggle
    const menu_list_toggle = (state) =>{
        show_menu_list(state)
    }
    //screens
    const show_menu_btn = useMediaQuery({query : '(max-width : 799px)'});
    const show_links = useMediaQuery({query : '(min-width : 800px)'});


    //nav
    window.addEventListener('scroll', () =>{
        const vh = window.innerHeight;

        if (window.pageYOffset >= 65) {
            set_nav_on_scroll(true);
            if(window.pageYOffset >= vh){
                setBoxShadow(true);
            }else{
                setBoxShadow(false);
            }
        }
        else{
            set_nav_on_scroll(false);
        }
    })

    const toPortal = ()=>{
        history.push('/portal');
    }
    
    return (
        <div className="landing-page" id = 'landing'>
            {/* NAVBAR */}
            <nav className = 'navbar'>
                {/* brand */}
                <div className="brand">
                    <a href=""><span className = 'greenb'><i className="bi bi-x-diamond-fill"></i></span> Ads <span className = 'amper'>&</span> Services</a>
                </div>

                {/* links [larger screens] */}
                { show_links && <div className="links">
                    <Link
                        activeClass="active"
                        to="landing"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Home</Link>

                    <Link
                        activeClass="active"
                        to="whyus"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >About</Link>

                    <Link
                        activeClass="active"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Services</Link>

                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Contact</Link>
                    <button className="links-btn" onClick = {toPortal}>Admin</button>
                </div>}

                {/* menu button [for smaller screens] */}
                { show_menu_btn && <div onClick = {() => menu_list_toggle(true)} className="menu-btn">
                    <i className="bi bi-list"></i>
                </div>}
            </nav>

            {/* navbar 2 [after scroll] */}
            { nav_on_scroll && <nav id = 'nav2' className ={boxShadow && 'boxshadow'}>
                {/* brand */}
                <div className="brandb">
                    <a href=""><span className = 'greenb'><i className="bi bi-x-diamond-fill"></i></span> Ads <span className = 'amper'>&</span> Services</a>
                </div>

                {/* links [larger screens] */}
                { show_links && <div className="linksb">
                    <Link
                        activeClass="active"
                        to="landing"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Home</Link>

                    <Link
                        activeClass="active"
                        to="whyus"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >About</Link>

                    <Link
                        activeClass="active"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Services</Link>

                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Contact</Link>
                    <button className="links-btn" onClick ={toPortal}>Admin</button>
                </div>}

                {/* menu button [for smaller screens] */}
                { show_menu_btn && <div onClick = {() => menu_list_toggle(true)} className="menub-btn">
                    <i className="bi bi-list b"></i>
                </div>}
            </nav>}

            {/* menu list [for small screens] */}
            { menu_list && <div className="menu-list">
                <div onClick = {() => menu_list_toggle(false)} className="close-btn">
                    <i className="bi bi-x-lg"></i> 
                </div>

                <div className="menu-list-content">
                    <div className="menu-list-item">
                    <Link
                        activeClass="active"
                        to="landing"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick = {() => show_menu_list(false)}
                    >Home</Link>
                        <i className="bi bi-house-fill"></i>
                    </div>

                    <div className="menu-list-item">
                    <Link
                        activeClass="active"
                        to="whyus"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick = {() => show_menu_list(false)}
                    >About</Link>
                        <i className="bi bi-question-circle-fill"></i>
                    </div>

                    <div className="menu-list-item">
                    <Link
                        activeClass="active"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick = {() => show_menu_list(false)}
                    >Services</Link>
                        <i className="bi bi-layers-fill"></i>
                    </div>

                    <div className="menu-list-item">
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick = {() => show_menu_list(false)}
                    >Contact</Link>
                        <i className="bi bi-telephone-fill"></i>
                    </div>

                    <button className = 'menu-list-btn' onClick ={toPortal}>Admin</button>
 
                    <div className="menu-list-social">
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-twitter"></i>
                        <i class="bi bi-instagram"></i>
                    </div>
                </div>

            </div>}

            {/* MAIN CONTENT AREA */}
            <div className="banner-content">
                {/* header */}
                <header className ="banner-heading">
                    <h1 className="banner-welcome"><span className="hide-on-small">Welcome to </span><span class="green" style = {{color : 'green'}}>Ads</span> <span style ={{fontFamily : 'Quicksand', fontWeight : 500}}>&</span> Services</h1>
                </header>

                {/* text */}
                <div className="banner-text">
                    <p>Enjoy the most conveninient and affordable advertisement packages. <span className = 'hide-on-smallb'>Let's discuss an advertisement plan for your business now</span> </p>
                </div>

                {/* {buttons} */}
                <div className="banner-btns">
                    <Link
                        className = 'learn_more'
                        activeClass="active"
                        to="whyus"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Learn more</Link>

                    <Link
                        className = 'contact_us'
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Contact us</Link>
                </div>
            </div>

            {/* arrow
            <div className="arrow-down animate__animated animate__heartBeat">
                <i className="bi bi-chevron-double-down  animate__bounceInDown"></i>
            </div> */}


        </div>// end of Landing page
    );
}
 
export default Landing;