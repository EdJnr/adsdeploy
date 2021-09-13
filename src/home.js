import BreakText from "./includes/breaktext";
import Contact from "./includes/contact";
import Footer from "./includes/footer";
import Landing from "./includes/landing";
import Services from "./includes/services";
import Whyus from "./includes/whyus";
import './home.css';
import Portal from './portal';
import { Link, animateScroll as scroll } from "react-scroll";

const Home = () => {
    return (
        <div className="home">
            <Landing/>
            <Whyus/>
            <BreakText/>
            <Services/>
            <Contact/>
            <Footer/>
        </div>
    );
}
 
export default Home;