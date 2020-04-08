import React from "react"
import "./styles.css"
import { ZoomClass } from "../ZoomClass"
import { Testimonials } from "../Testimonials"
import { TeachingPhilosophy } from "../TeachingPhilosophy"
import { About } from "../About"
import { Experience } from "../Experience"
import { Landing } from "../Landing"
import { Footer } from "../Footer"
import ScrollAnimation from "react-animate-on-scroll"

export const Home = () => {
    return (
        <div>
            <Landing />
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <ZoomClass />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <Testimonials />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <TeachingPhilosophy />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <About />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <Experience />
            </ScrollAnimation>
            <Footer />
        </div>
    )
}
