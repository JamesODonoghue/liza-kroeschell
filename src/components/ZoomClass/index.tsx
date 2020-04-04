import React from "react"

export const ZoomClass = () => (
    <section className="zoom-section">
        <h1 style={{ textAlign: "center" }}>Calling All Kids!</h1>
        <h4 style={{ fontWeight: "bold" }}>
            Ms. Liza teaches weekly open dance classes and is available for
            private lessons upon request.
        </h4>
        <p>
            <b>Open classes: Tuesdays and Thursdays at 4pm Pacfic Time.</b>
        </p>
        <p>
            Join Ms. Liza for fun, 45-minute dance classes on Zoom. Get the
            wiggles out after staying home safe all day!
        </p>
        <p>
            Each class will include an imaginative activity for children as
            young as three and a challenge step for those as old as ten. No
            previous dance experience necessary. All ages welcome!
        </p>
        <p>
            <i>Venmo donations @Liza-Kroeschell appreciated.</i>
        </p>

        <div>
            <a href="mailto:liza.kroeschell@gmail.com?subject=Zoom Open Dance Class">
                <button className="secondary">
                    Email me for the Zoom Link
                </button>
            </a>
        </div>
        <p>
            <b>Private Lessons</b>: Want to Dance MORE? Ms. Liza teaches private
            and small group dance lessons on Zoom. Pay what you can!
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
                <button>Schedule a private class!</button>
            </a>
        </div>
    </section>
)
