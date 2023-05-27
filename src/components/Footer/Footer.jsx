import React from 'react';

import logo from '../../assets/ico/logo.png';
import twitter from '../../assets/ico/twitter.png';
import dc from '../../assets/ico/dc.png';
import tg from '../../assets/ico/tg.png';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div>
                        <img className='logoImg' src={logo} alt="logo" />
                        <p>VenomPlay</p>
                        <span>The first stake-to-play game on TON</span>
                    </div>
                    <div>
                        <p>Join us</p>
                        <span>And prepare yourself for the great restoration before it starts</span>
                    </div>
                    <div className='socNet'>
                        <div>
                            <a href="#"><img src={twitter} alt="twitter" /></a>
                        </div>
                        <div>
                            <a href="#"><img src={dc} alt="dc" /></a>
                        </div>
                        <div>
                            <a href="#"><img src={tg} alt="tg" /></a>
                        </div>
                    </div>
                    <div>
                        <span><a href="#">F.A.Q</a></span>
                    </div>
                    <div>
                        <span>© 2022 Tonarchy</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;