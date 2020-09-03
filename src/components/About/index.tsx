import React from 'react';
import './styles.css';
// import LizaPose from 'assets/photos/liza_pose.jpg';

export const About = () => (
    <section className="about-section">
        <h2>Studious dancer with professional performance experience.</h2>
        <div className="about-main">
            <div className="bio">
                <div className="bio-item">
                    <span
                        style={{
                            fontFamily: 'Georgia',
                            fontSize: '36px',
                            backgroundColor: 'var(--color-blue-dark)',
                            borderRadius: '50%',
                            width: '64px',
                            height: '64px',
                            position: 'absolute',
                            color: '#fff',
                            textAlign: 'center',
                            lineHeight: '64px',
                            opacity: '.3',
                            margin: '-18px -36px',
                        }}
                    >
                        L
                    </span>
                    <p>
                        <span style={{ textTransform: 'uppercase', letterSpacing: '2px' }}>
                            <b>iza Kroeschell</b>{' '}
                        </span>
                        is a Bay Area dancer and dance teacher born and raised in Iowa. She graduated summa cum laude
                        from the Lines Ballet BFA program at Dominican University of California in 2015, and has since
                        performed locally with Bellwether Dance Project, dawsondancesf, .flee dance, and the movement
                        choir of Garrett + Moulton Productions, among others.
                    </p>
                    <p>
                        She has also performed in her hometown as a guest principal dancer in Iowa State Center’s The
                        Nutcracker.
                    </p>
                </div>
                <div className="bio-item">
                    <h4>Skilled educator who has trained with the best in her field.</h4>
                    <p>
                        Liza discovered a passion for teaching in 2012 while training under Ms. Corrine Nagata of Nagata
                        Dance, an organization that partners with San Francisco elementary schools to provide
                        recreational dance education.
                    </p>
                    <p>
                        Ms. Nagata's way of inspiring excellence in her students inspired Liza to co-author an essay
                        with Ms. Nagata about her teaching methods, which was published in 2017 as the final chapter of
                        the book, Dance Pedagogy for a Diverse World: Culturally Relevant Theory, Research, and
                        Practice.
                    </p>
                </div>
            </div>
            {/* <div className="image">
                <img src={LizaPose} alt="dramatic pose"></img>
            </div> */}
        </div>
    </section>
);
