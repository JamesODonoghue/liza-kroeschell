import React from "react"
import "./styles.css"
import { YoutubeVideo } from "components/YoutubeVideo"
export const ZoomClass = () => (
    <section className="zoom-section">
        <h3>
            <b>
                Today's 10am dance class has been cancelled in observance of the
                Dance Industry Blackout.
            </b>
        </h3>
        <p>
            The blackout calls for the dance industry to stop operations on
            Tuesday, June 2, to bring awareness to the police brutality and
            racial injustice in the U.S. Class will resume Thursday,{" "}
            <b>June 4 at 4pm PDT.</b>
        </p>
        <p>
            Many of our country's most popular dances--jazz, tap, hip hop, the
            twist!--started in the black community. This isn't something we
            always talk about when we're dancing, but black art and
            contributions from the black community have shaped the dance steps
            that we learn today. Instead of class today, watch this video and
            dance along!
        </p>
        <p>
            Thank you all so much for your support. I look forward to dancing
            with you again on Thursday! Best, Ms. Liza
        </p>

        <br></br>
        <div style={{ display: "flex", height: "320px", marginBottom: "6rem" }}>
            <YoutubeVideo embedLink="dpCBMwAweDI?"></YoutubeVideo>
        </div>

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
                <button className="secondary">
                    Email me for the zoom link!
                </button>
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
