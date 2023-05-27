import React from 'react';
import game1 from '../../assets/img/game1.jpg';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <section id="header">
                <div className="container">
                    <h1>VenomPlay <br /><span>The first stake-to-play GameFi 
role-playing project on the blockchain with progress-saving NFTs</span></h1>
                    <div className='btnsWrap'>
                        <button></button>
                        <button>Join the restoration</button>
                    </div>
                </div>
            </section>
            <section id="gameList">
                <div className="container">
                    <div className="card">
                        <img src={game1} alt="game1" />
                        <h2>Wide range of game mechanics</h2>
                        <span>The combination of MMO and RTS genres provides the player with a wide variety of strategies and entertaining gameplay</span>
                        <Link to='/game'><button>Play</button></Link>
                    </div>
                    <div className="card">
                        <img src={game1} alt="game1" />
                        <h2>Wide range of game mechanics</h2>
                        <span>The combination of MMO and RTS genres provides the player with a wide variety of strategies and entertaining gameplay</span>
                        <Link to='/game'><button>Play</button></Link>
                    </div>
                    <div className="card">
                        <img src={game1} alt="game1" />
                        <h2>Wide range of game mechanics</h2>
                        <span>The combination of MMO and RTS genres provides the player with a wide variety of strategies and entertaining gameplay</span>
                        <Link to='/game'><button>Play</button></Link>
                    </div>
                    <div className="card">
                        <img src={game1} alt="game1" />
                        <h2>Wide range of game mechanics</h2>
                        <span>The combination of MMO and RTS genres provides the player with a wide variety of strategies and entertaining gameplay</span>
                        <Link to='/game'><button>Play</button></Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Main;