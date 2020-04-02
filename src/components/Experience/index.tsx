import React from "react"
import LizaBio from "../../assets/photos/headshot_small.jpg"
import "./styles.css"
const schools = [
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

export const Experience = () => (
    <section className="experience">
        <h1> Experience</h1>
        <h3> Liza teaches or has taught at the following schools:</h3>
        <ul>
            {schools.map((school, key) => (
                <li key={key}>{school}</li>
            ))}
        </ul>
    </section>
)
