import React, { useEffect, useState } from 'react';
import './Game.css';

import fullScreen from '../../assets/ico/fullScreen.png';
import defaultScreen from '../../assets/ico/defaultScreen.png';
import tg from '../../assets/ico/tg.png';
import report from '../../assets/ico/report.png';

const Game = () => {
    const[fullScreenToggle, setFullScreenToggle] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0); // scroll top, when open page
    }, []);

    const playGame = () => { // show game
        document.querySelector('#canvas').style.display = 'block';
        document.querySelector('#canvas').scrollIntoView({block: 'center'});
        setFullScreenToggle(true);
    }

    const close = () => { // close game
        document.querySelector('#canvas').style.display = 'none';
        window.scrollTo(0, 0);

        setFullScreenToggle(true);
        document.querySelector('#canvas').style.position = 'relative';
        document.querySelector('#canvas').style.marginTop = '150px';
        document.querySelector('body').style.overflow = 'auto';
    }

    const screenToggle = () => {
        setFullScreenToggle(!fullScreenToggle);

        if(fullScreenToggle) {
            document.querySelector('#canvas').style.position = 'fixed';
            document.querySelector('#canvas').style.width = '100%';
            document.querySelector('#canvas').style.top = '0';
            document.querySelector('#canvas').style.left = '0px';
            document.documentElement.clientWidth > 600 ? document.querySelector('#canvas').style.marginTop = '0' : document.querySelector('#canvas').style.marginTop = '0';
            document.querySelector('body').style.overflow = 'hidden';
            document.querySelector('.canv').style.width = '100%';
            document.querySelector('.canv').style.height = '100%';
            document.querySelector('.canv').style.paddingBottom = '100%';
            document.querySelector('.canv').style.position = 'absolute';
            document.querySelector('.canv').style.left = '0';

            if(document.documentElement.clientWidth > 1600) {
                document.querySelector('#canvas').style.height = '95vh';
            }
            if(document.documentElement.clientWidth < 1920) {
                document.querySelector('#canvas').style.height = '95vh';
            }
            if(document.documentElement.clientWidth < 1800) {
                document.querySelector('#canvas').style.height = '94vh';
            }
            if(document.documentElement.clientWidth < 1400) {
                document.querySelector('#canvas').style.height = '92vh';
            }
            if(document.documentElement.clientWidth < 600) {
                document.querySelector('#canvas').style.height = '93vh';
            }
        }
        else {
            setFullScreenToggle(true);
            document.querySelector('#canvas').style.position = 'relative';
            document.querySelector('#canvas').style.marginTop = '150px';
            document.querySelector('body').style.overflow = 'auto';
            document.querySelector('.canv').style.paddingBottom = '0%';
            document.querySelector('.canv').style.position = 'static';

            document.addEventListener('keydown', function(event) {
                setFullScreenToggle(true);
                if (event.key === 'Escape') { // while ESC is down
                    document.querySelector('#canvas').style.position = 'relative';
                    document.querySelector('#canvas').style.marginTop = '150px';
                    document.querySelector('body').style.overflow = 'auto';
                    document.querySelector('.canv').style.paddingBottom = '0%';
                    document.querySelector('.canv').style.position = 'static';
                }
            });
        }
    }

    return (
        <div id='game'>
            <h1>wefwe</h1>
            <div className="wrap">
                <div className='previews'>
                    <div className="col">
                        <div className='miniPreview'>p</div>
                        <div className='miniPreview'>p</div>
                        <div className='miniPreview'>p</div>
                    </div>
                    <div className="col">
                        <div className='mainPreview'>bp</div>
                    </div>
                </div>
                <div className="col">
                    <button onClick={playGame}>Play</button>
                    <span>Escape from Zeya is a blockchain-based strategy game. Mine resources, upgrade your base and compete in tournaments with other Zeya survivors!</span>
                    <div className='report'>
                        <div><img src={tg} alt="tg" /><a href="#">Community</a></div>
                        <div><img src={report} alt="report" /><a href="#">Community</a></div>
                    </div>
                </div>
            </div>

            <div className="canv">
                <div id="canvas">
                    <div className="content">
                        <span className='close' onClick={close}>✕</span>
                        <img onClick={screenToggle} src={fullScreenToggle ? fullScreen : defaultScreen} alt="fullScreen" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Game;