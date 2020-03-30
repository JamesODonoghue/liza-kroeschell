import React from "react"
import photo from "../../Lines.png"
import LizaClass from "../../assets/photos/IMG_8919.jpg"
import LizaBio from "../../assets/photos/IMG_0039-6.jpg"

import "./styles.css"

function Landing() {
    return (
        <div>
            <div className="landing">
                <div>
                    <h1>I'm Ms. Liza</h1>
                    <h3>
                        I teach dance to children in the San Francisco Bay Area
                    </h3>
                    {/* <h4>SAN FRANCISCO BAY AREA DANCE TEACHING ARTIST</h4> */}
                </div>
            </div>
            <section className="zoom-section">
                <h2>CALLING ALL KIDS!</h2>
                <p>
                    Ms. Liza will offer fun, 35-minute dance classes on Zoom
                    from March 30-April 4 at 4pm Pacfic Time.
                </p>
                <p>
                    Get the wiggles out after staying home safe all day! No
                    previous dance experience necessary. Find a safe space to
                    move and follow the Zoom link below!
                </p>
                <p>
                    <b>Ages 5-10: Monday, Wednesday, Friday</b>
                </p>
                <p>
                    <b>Ages 3-7: Tuesday, Thursday</b>
                </p>
                <p>Venmo donations @LizaKroeschell appreciated</p>
                <a href="mailto:liza.kroeschell@gmail.com?subject=Zoom Dance Class">
                    <button>Email me for the Zoom Link!</button>
                </a>
            </section>
            {/* <section className="testimonials">
                <div>
                    <h1>Teacher endorsment</h1>
                </div>
                <div className="testimonial-grid">
                    <div>
                        <img
                            src={LizaClass}
                            className="testimonial-photo"
                        ></img>
                    </div>
                    <div className="testimonial">
                        <p>
                            "The 5-6 year olds at our public school in San
                            Francisco absolutely cherished our dance classes
                            with Ms. Liza. She created a fun environment for
                            students to actively engage and express themselves.
                            So many smiles and an energy of pure joy filled the
                            room. She taught children how to count beats and
                            listen to music, too. The children worked solo and
                            often times with a partner. These two approaches
                            gave the children the opportunity to be brave on
                            their own as well as cooperative with others. I can
                            honestly say, the children made several new friends
                            in the dance class"
                        </p>
                        <p>~Collen Wentworth, Kindergarten teacher</p>
                    </div>
                </div>
            </section> */}
            <section className="blue">
                <div className="bio">
                    <div className="bio-header">
                        <h1>About Me</h1>
                        <img src={LizaBio}></img>
                    </div>
                    <div className="bio-grid">
                        <div className="bio-item">
                            <h4>
                                Studious dancer with professional performance
                                experience.
                            </h4>
                            <p>
                                Liza Kroeschell is a Bay Area dancer and dance
                                teacher born and raised in Iowa. She graduated
                                summa cum laude from the Lines Ballet BFA
                                program at Dominican University of California in
                                2015, and has since performed locally with
                                Bellwether Dance Project, dawsondancesf, .flee
                                dance, and the movement choir of Garrett +
                                Moulton Productions, among others. She has also
                                performed in her hometown as a guest principal
                                dancer in Iowa State Center’s The Nutcracker.
                            </p>
                        </div>
                        <div className="bio-item">
                            <h4>
                                Skilled educator who trained with the best in
                                the field.
                            </h4>
                            <p>
                                Liza discovered a passion for teaching in 2012
                                while training under Ms. Corrine Nagata of
                                Nagata Dance, an organization that partners with
                                San Francisco elementary schools to provide
                                recreational dance education. Ms. Nagata's way
                                of inspiring excellence in her students inspired
                                Liza to co-author an essay with Ms. Nagata about
                                her teaching methods, which was published in
                                2017 as the final chapter of the book, Dance
                                Pedagogy for a Diverse World: Culturally
                                Relevant Theory, Research, and Practice.
                            </p>
                        </div>
                        <div className="bio-item">
                            <h4>
                                Passionate professional teaching children to
                                dance in San Francisco.
                            </h4>
                            <p>
                                Liza is now a senior teacher with Nagata Dance..
                                Each year, she prepares a group of students to
                                perform in the Southwest Airlines Chinese New
                                Year Parade. In 2018, her students at Commodore
                                Sloat Elementary earned second place in the
                                parade! In addition to her work in public and
                                private elementary schools through Nagata Dance,
                                Liza is a dance teacher on faculty at the Jewish
                                Community Center of San Francisco and Geary
                                Dance Center.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Landing
