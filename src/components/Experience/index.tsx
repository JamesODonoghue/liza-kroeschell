import React from 'react';
import './styles.css';
let schools = [
    'Commodore Sloat Elementary School',
    'French American International School',
    'Junipero Serra Elementary School',
    'Alamo Elementary School',
    'Jewish Community Center of San Francisco',
    'Chinese Immersion School at De Avila ',
    'Alice Fong Yu Elementary School',
    'Edwin and Anita Lee Newcomer School',
    'Rosa Parks Elementary School',
    'William Cobb Elementary School',
    'Geary Dance Center',
    'Bay Area Ballet Conservatory',
    'Tutu School',
    'Bryant Elementary School',
    'Dianne Feinstein Elementary School',
    'San Francisco Friends School',
    'Horizons at San Francisco Friends School',
    'Lycée Français de San Francisco',
];

schools = schools.sort();

export const Experience = () => (
    <section className="experience">
        <div className="section-header">
            <h2> Experience</h2>
        </div>
        <ul>
            {schools.map((school, key) => (
                <li key={key}>{school}</li>
            ))}
        </ul>
    </section>
);
