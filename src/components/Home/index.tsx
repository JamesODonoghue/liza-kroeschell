import React, { Fragment } from 'react';
// import { ZoomClass } from '../ZoomClass';
import { Testimonials } from '../Testimonials';
// import { Confidence } from '../Confidence';
// import { About } from '../About';
// import { AboutNext } from '../AboutNext';
// import { Experience } from '../Experience';
import { Landing } from '../Landing';
// import { Footer } from '../Footer';
// import { Creativity } from '../Creativity';

export const Home = () => {
    return (
        <Fragment>
            <Landing />
            <Testimonials />
            {/* <About />
            <AboutNext />
            <Creativity />
            <Confidence />

            <Experience />
            <Footer /> */}
        </Fragment>
    );
};
