import React from 'react';
import NagataOne from 'assets/photos/nagata_one.jpg';
import './styles.css';

export const AboutNext = () => (
    <section className="about-next">
        <div className="image">
            <img src={NagataOne} alt="nagata one"></img>
        </div>
        <div style={{ maxWidth: '25rem' }}>
            <h4>Passionate professional teaching children to dance in San Francisco.</h4>
            <p>
                Liza is now a senior teacher with Nagata Dance. Each year, she prepares a group of students to perform
                in the Southwest Airlines Chinese New Year Parade.
            </p>
            <p>
                In 2018, her students at Commodore Sloat Elementary earned second place in the parade! In addition to
                her work in public and private elementary schools through Nagata Dance, Liza is a dance teacher on
                faculty at the Jewish Community Center of San Francisco and Geary Dance Center.
            </p>
        </div>
    </section>
);
