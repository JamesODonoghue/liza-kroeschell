import React from "react"
import "./styles.css"
export const ZoomClass = () => (
    <section className="zoom-section">
        <h1>Dance with me!</h1>
        <h3>
            <b>Private Lessons</b>
        </h3>
        <p>
            Ms. Liza teaches private and small group dance
            lessons on Zoom. Pay what you can!
        </p>
        <p>
            Email{" "}
            <b>
                <a href="mailto:liza.kroeschell@gmail.com?subject=Zoom Private Class">
                    liza.kroeschell@gmail.com
                </a>
            </b>{" "}
            for more information about individualized dance instruction tailored
            to your child’s interests and goals.
        </p>

        <div>
            <a href="mailto:liza.kroeschell@gmail.com?subject=Zoom Private Class">
                <button>Schedule a private class</button>
            </a>
        </div>
    </section>
)
