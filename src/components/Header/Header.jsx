import React, { useState } from 'react';
import './Header.css';
import $ from 'jquery';

import logo from '../../assets/ico/logo.png';
import gh from '../../assets/ico/github.png';
import twitter from '../../assets/ico/twitter.png';
import dc from '../../assets/ico/dc.png';
import tg from '../../assets/ico/tg.png';
import en from '../../assets/ico/en.png';
import { Link } from 'react-router-dom';
// import ru from '../../assets/ico/ru.png';

const Header = () => {
    const[barState, setBarstate] = useState(true);
    const[connectMenuToggle, setConnectMenuToggle] = useState(true);

    const menuToggle = () => {
        if($(window).width() <= 1024) { // for mobile
            setBarstate(!barState);
            if(barState) {
                $('.bar1').css({'transform': 'rotate(-45deg) translate(-8px, 7px)'});
                $('.bar2').css({'opacity': '0'});
                $('.bar3').css({'transform': 'rotate(45deg) translate(-8px, -8px)'});
                $('header .listLangSwitcher').css({'transform': 'translate(0, 0)'});
                $('body').css({'overflow': 'hidden'});
                $('header .listLangSwitcher').css({'overflow':'scroll'});
            }
            else {
                $('.bar1').css({'transform': 'rotate(0deg) translate(0px, 0px)'});
                $('.bar2').css({'opacity': '1'});
                $('.bar3').css({'transform': 'rotate(0deg) translate(0px, 0px)'});
                $('header .listLangSwitcher').css({'transform': 'translate(0, -120%)'});
                $('body').css({'overflow': 'auto'});
                $('header .listLangSwitcher').css({'overflow':'hidden'});
            }
        }
    }

    const connectMenu = () => {
        setConnectMenuToggle(!connectMenuToggle);
        
        if(connectMenuToggle) {
            $('header .connectMnWrap').css({display: 'flex'});
        }
        else {
            $('header .connectMnWrap').css({display: 'none'});
        }
    }

    return (
        <div>
            <header>
                <div className="container">
                    <div className='logoSocNet'>
                        <div className='connectMenu'></div>
                        <div>
                            <Link to="/"><img className='logoImg' src={logo} alt="logo" /></Link>
                            <Link className="logo" to="/">VenomPlay</Link>
                        </div>
                        <div className="toggle">
                            <div id="menuToggleMobDiv" onClick={menuToggle}>
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                        </div>
                        <div className="socNet">
                            <a href='#'><img src={gh} alt="gh" /></a>
                            <a href='#'><img src={twitter} alt="twitter" /></a>
                            <a href='#'><img src={dc} alt="dc" /></a>
                            <a href='#'><img src={tg} alt="tg" /></a>
                        </div>
                    </div>
                    <div className='listLangSwitcher'>
                        <ul>
                            <li><a href="#">Play</a></li>
                            <li><a href="#">Mint</a></li>
                            <li><a href="#">Stake</a></li>
                            <li><a href="#">Swap</a></li>
                            <li><a href="#">Farm</a></li>
                            <li><a href="#">F.A.Q</a></li>
                        </ul>
                        <div className="socNet">
                            <a href='#'><img src={gh} alt="gh" /></a>
                            <a href='#'><img src={twitter} alt="twitter" /></a>
                            <a href='#'><img src={dc} alt="dc" /></a>
                            <a href='#'><img src={tg} alt="tg" /></a>
                        </div>
                        <div className="langSwitcher">
                            <a href="#"><img src={en} alt="en" /></a>
                        </div>
                        <div className='user'>
                            <p className='username'>erf12d23...</p>
                            <div className='connectMenu' onClick={connectMenu}>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                            <div className="connectMnWrap">
                                <button>Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;