import React, { Fragment } from 'react';
import { Testimonials } from '../Testimonials';
import { Landing } from '../Landing';
import { Creativity } from 'components/Creativity';
import { Confidence } from 'components/Confidence';
// import { Experience } from 'components/Experience';
import { Footer } from 'components/Footer';
import { Experience } from 'components/Experience';

export const Home = () => {
    return (
        <Fragment>
            <Landing />
            <div className="h-16 lg:h-24 rounded-b-50 max-w-full w-screen bg-white absolute"></div>
            <Testimonials />
            <div className="h-16 lg:h-24 rounded-b-50 max-w-full w-screen bg-teal-100 absolute"></div>
            {/* <About /> */}
            {/* <AboutNext /> */}
            <Creativity />
            <Confidence />
            <div className="h-16 lg:h-24 rounded-b-50 max-w-full w-screen bg-teal-300 absolute"></div>
            <Experience />
            {/* <Maps /> */}
            <div className="h-16 lg:h-24 rounded-b-50 max-w-full w-screen bg-white absolute"></div>
            <Footer />
        </Fragment>
    );
};
