import React from 'react';
import './styles.css';
import { ZoomClass } from '../ZoomClass';
import { Testimonials } from '../Testimonials';
import { TeachingPhilosophy } from '../TeachingPhilosophy';
import { About } from '../About';
import { Experience } from '../Experience';
import { Landing } from '../Landing';
import { Footer } from '../Footer';

export const Home = () => {
    return (
        <div>
            <Landing />
            <ZoomClass />
            <Testimonials />
            <TeachingPhilosophy />
            <About />
            <Experience />
            <Footer />
        </div>
    );
};
