import React from "react"
import { TeachingPhilosophy } from "../TeachingPhilosophy"
import { About } from "../About"
import { ZoomClass } from "../ZoomClass"
import "./styles.css"

function Landing() {
    return (
        <div>
            <div className="landing">
                <div>
                    <h1>
                        <b>Hi</b>, I'm Ms. Liza
                    </h1>
                    <h3>I teach dance to children in San Francisco</h3>
                    {/* <h4>SAN FRANCISCO BAY AREA DANCE TEACHING ARTIST</h4> */}
                </div>
            </div>

            <p className="headshot-credit">Headshot by Rob Kunkle, GoodLux</p>
            <ZoomClass />
            <section className="testimonials">
                <div>
                    <h1>"An Energy of Pure Joy"</h1>
                </div>
                <div className="testimonial">
                    <p>
                        "The 5-6 year olds at our public school in San Francisco
                        absolutely cherished our dance classes with Ms. Liza.
                        She created a fun environment for students to actively
                        engage and express themselves. So many smiles and an
                        energy of pure joy filled the room.
                    </p>
                    <p>
                        She taught children how to count beats and listen to
                        music, too. The children worked solo and often times
                        with a partner. These two approaches gave the children
                        the opportunity to be brave on their own as well as
                        cooperative with others.
                    </p>
                    <p>
                        I can honestly say, the children made several new
                        friends in the dance class"
                    </p>
                    <p>
                        <b>
                            <i>~Collen Wentworth, Kindergarten teacher</i>
                        </b>
                    </p>
                </div>
            </section>
            <TeachingPhilosophy />
            <About />
        </div>
    )
}

export default Landing
