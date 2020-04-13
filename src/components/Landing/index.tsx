import React, { useEffect, useState } from "react"
import headshot from "assets/photos/headshot.jpg"
import headshot_small from "assets/photos/headshot_small.jpg"
import BackgroundImageOnLoad from "background-image-on-load"
import "./styles.css"

export const Landing = () => {
    const [smallLoaded, setSmallLoaded] = useState(false)
    const [largeLoaded, setLargeLoaded] = useState(false)

    const landingStyle = {
        backgroundColor: `${!smallLoaded ? "grey" : ""}`,
        backgroundImage: `url(${
            !smallLoaded && !largeLoaded
                ? ""
                : smallLoaded && !largeLoaded
                ? headshot_small
                : headshot
        })`,
    }
    useEffect(() => {}, [])
    return (
        <div>
            <div className="landing" style={landingStyle}>
                <BackgroundImageOnLoad
                    src={headshot_small}
                    onLoadBg={() => setSmallLoaded(true)}
                />
                <BackgroundImageOnLoad
                    src={headshot}
                    onLoadBg={() => setLargeLoaded(true)}
                />
                <div className="landing__content">
                    <h1>
                        <b>Hi</b>, I'm Ms. Liza
                    </h1>
                    <p>
                        <b>I teach dance to children in San Francisco</b>
                    </p>
                </div>
            </div>
            <p className="headshot-credit">Headshot by Rob Kunkle, GoodLux</p>
        </div>
    )
}
