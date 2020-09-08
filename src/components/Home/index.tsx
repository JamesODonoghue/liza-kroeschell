import React, { Fragment } from 'react';
import { Testimonials } from '../Testimonials';
import { Landing } from '../Landing';
import { Creativity } from 'components/Creativity';
import { Confidence } from 'components/Confidence';
// import { Experience } from 'components/Experience';
import { Footer } from 'components/Footer';

export const Home = () => {
    return (
        <Fragment>
            <Landing />
            <div className="h-12 lg:h-32 rounded-b-50 max-w-full w-screen bg-white absolute"></div>
            <Testimonials />
            <div className="h-12 lg:h-32 rounded-b-50 max-w-full w-screen bg-teal-100"></div>
            {/* <About /> */}
            {/* <AboutNext /> */}
            <Creativity />
            <Confidence />
            <div className="h-12 lg:h-32 rounded-b-50 max-w-full w-screen bg-white absolute"></div>
            {/* <Experience /> */}
            <Footer />
        </Fragment>
    );
};
