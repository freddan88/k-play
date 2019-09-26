import React from 'react';
import logoLG from '../../Images/logo-footer.png';
import youtubeLogo from '../../Images/footer-logo-youtube.png';
import instagramLogo from '../../Images/footer-logo-instagram.png';
import facebookLogo from '../../Images/footer-logo-facebook.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="main-footer">
           <div className="div1">
               <div>
                   <img src={logoLG} alt="Logo" />
               </div>
               <div><p>K-play erbjuder videos och podcasts med syfte att fortbilda
                   kultursektorn och sprida kunskap. K-play drivs av Kulturakademin.</p></div>
            </div>
            <div className="div2">
                <ul className="div2__social-list">
                    <li>
                        <div className="highlight-circle">
                            <img src={youtubeLogo} alt="YouTube" />
                        </div>
                        <a href="https://www.youtube.com/channel/UCy0HB84UQmO6I3WTP9Flo2Q" target="_blank" rel="noopener noreferrer">YouTube</a>
                    </li>
                    <li>
                        <div className="highlight-circle">
                            <img src={instagramLogo} alt="Instagram" />
                        </div>
                        <a href="https://www.instagram.com/kulturakademin/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </li>
                    <li>
                        <div className="highlight-circle">
                            <img src={facebookLogo} alt="Facebook" />
                        </div>
                        <a href="https://sv-se.facebook.com/kulturAkademin" target="_blank" rel="noopener noreferrer">Facebook</a>
                    </li>
                    <li>
                        <div className="highlight-circle">
                            <img src={facebookLogo} alt="Facebook" />
                        </div>
                        <a href="https://soundcloud.com/user-994747535" target="_blank" rel="noopener noreferrer">Soundcloud</a>
                    </li>
                </ul>
                <ul className="div2__social-list">
                    <li><a href=" ">Om K-play</a></li>
                    <li><a href=" ">Kurskatalogen</a></li>
                    <li><a href=" ">Kontakta oss</a></li>
                    <li><a href=" ">Samarbetspartners</a></li>
                    <li><a href=" ">Patreon</a></li>
                </ul>
            </div>
            <cite>Copyright © 2019 Kulturakademin. All rights reserved.</cite>
        </footer>
    );
};

export default Footer;