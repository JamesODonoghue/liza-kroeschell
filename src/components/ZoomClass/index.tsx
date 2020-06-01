import React from "react"
import "./styles.css"
export const ZoomClass = () => (
    <section className="zoom-section">
        <h1>Dance with Ms. Liza!</h1>
        <p>
            Ms. Liza is offering open dance classes for kids and private lessons
            upon request. Support a local independent teaching artist. Invite a
            friend and get moving!
        </p>
        <h3>
            <b>Open classes</b>
        </h3>
        <p>
            <b>Ages 5-10 Hip-Hop: Tuesdays at 10am and Thursdays at 4pm</b>
        </p>
        <p>
            Join Ms. Liza for fun, 45-minute dance classes on Zoom. Get the
            wiggles out after staying home safe all day!
        </p>
        <p>No previous dance experience necessary. All ages welcome!</p>
        <p>
            Donations are appreciated
            <br></br>
            <b>
                <a href="https://venmo.com/code?user_id=2131492754948096247">
                    Venmo: @Liza-Kroeschell
                </a>
            </b>
            <br></br>
            <b>
                <a href="https://paypal.me/lkroeschell">Paypal: lkroeschell</a>
            </b>
        </p>

        <div>
            <a href="mailto:liza.kroeschell@gmail.com?subject=Zoom Open Dance Class">
                <button className="secondary">Access to the Zoom class</button>
            </a>
        </div>
        <h3>
            <b>Private Lessons</b>
        </h3>
        <p>
            Want to Dance MORE? Ms. Liza teaches private and small group dance
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
                <button>Schedule a private class!</button>
            </a>
        </div>
    </section>
)
