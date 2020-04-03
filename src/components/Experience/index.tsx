import React from "react"
import "./styles.css"
let schools = [
    "Commodore Sloat Elementary School",
    "French American International School",
    "Junipero Serra Elementary School",
    "Alamo Elementary School",
    "Jewish Community Center of San Francisco",
    "Chinese Immersion School at DaVila ",
    "Alice Fong Yu Elementary School",
    "Edwin and Anita Lee Newcomer School",
    "Rosa Parks Elementary School",
    "William Cobb Elementary School",
    "Geary Dance Center",
    "Bay Area Ballet Conservatory",
    "Tutu School",
    "Bryant Elementary School",
    "Dianne Feinstein Elementary School",
    "San Francisco Friends School",
    "Horizons at San Francisco Friends School",
    "Lycee Francais de San Francisco"
]

schools = schools.sort()

export const Experience = () => (
    <section className="experience">
        <h1> Experience</h1>
        <h4> Liza has taught dance in schools throughout San Francisco.</h4>
        <ul>
            {schools.map((school, key) => (
                <li key={key}>{school}</li>
            ))}
        </ul>
    </section>
)
