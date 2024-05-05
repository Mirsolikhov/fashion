import './footer.css'

import facebook from './../../img/socials/fb.svg'
import instagram from './../../img/socials/inst.svg'
import twitter from './../../img/socials/tw.svg'
import linkedin from './../../img/socials/in.svg'

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container">
                <div className="footer__container">
                    <div className="socials__box">
                        <div className="socials__header">FASHION</div>
                        <div className="socials__text">Complete your style with awesome clothes from us.</div>
                        <div className="socials">
                            <img src={facebook} alt="fb" />
                            <img src={instagram} alt="inst" />
                            <img src={twitter} alt="tw" />
                            <img src={linkedin} alt="in" />
                        </div>
                    </div>
                    <div className="links__box">
                        <div className="company__link">
                            <a href="#!">Company</a>
                            <a href="#!">About</a>
                            <a href="#!">Contact us</a>
                            <a href="#!">Support</a>
                            <a href="#!">Careers</a>
                        </div>
                        <div className="quick__link">
                            <a href="#!">Quick Link</a>
                            <a href="#!">Share Location</a>
                            <a href="#!">Orders Tracking</a>
                            <a href="#!">Size Guide</a>
                            <a href="#!">FAQs</a>
                        </div>
                        <div className="legal">
                            <a href="#!">Legal</a>
                            <a href="#!">Terms & conditions</a>
                            <a href="#!">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;
