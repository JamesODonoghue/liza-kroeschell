import React, { useEffect } from 'react';
import headshot from 'assets/photos/headshot.jpg';
import './styles.css';

export const Landing = () => {
    const landingStyle = {};
    useEffect(() => {}, []);
    return (
        <div>
            <div className="creativity">Creativity</div>
            <div className="landing" style={landingStyle}>
                <div className="landing__content">
                    <div className="landing__hero">
                        <div className="landing__title">
                            <h1>
                                <b>Hi</b>, I'm Ms. Liza. I inspire children through <b className="pink">dance</b>.
                            </h1>
                            <button>Contact</button>
                        </div>
                        <div className="landing__image">
                            <img alt={'profile_image'} src={headshot} width="600"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="circles">
                <div className="circle sm"></div>
                <div className="circle md"></div>
                <div className="circle lg"></div>
            </div>
            {/* <p className="headshot-credit">Headshot by Rob Kunkle, GoodLux</p> */}
        </div>
    );
};
