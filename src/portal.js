import { useHistory } from 'react-router-dom';
import portal_img from './imgs/portal.svg';
import './portal.css';
const Portal = () => {

    const history = useHistory();
    const to_home = () => {
        history.push('/');
    }
    return (
        <div className="portal">
            {/* <!-- SECTIONS --> */}
            <div className="login-page-sections">
                {/* <!-- illustrations --> */}
                <section id="login-page-illustration">
                    <img className="svg" src= {portal_img} alt=""/>
                </section>


                {/* <!-- login page --> */}
                <section id="login-page-form">
                    <form className="login-page-form">
                        {/* <!-- header --> */}
                        <div className="form-header">
                            <h5><span onClick = {to_home}>Ads & Services |</span> Admin</h5>
                        </div>

                        {/* <!-- icon --> */}
                        <div className="form-icon">
                            <i className="bi bi-person"></i>
                        </div>

                        {/* <!-- fields --> */}
                        <input type="text" placeholder="User ID" name = 'userID'/>
          
                        <input type="password" placeholder="Password" name = 'password'/>
                        <div className="submit">
                            <button className="login-page-submit">login <i className="bi bi-cursor"></i></button>
                        </div>

                    </form>
                </section>

            </div>{/* </div> <!-- end of sections --> */}
        </div>
    );
}
 
export default Portal;