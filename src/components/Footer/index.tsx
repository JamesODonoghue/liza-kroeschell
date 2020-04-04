import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./styles.css"
export const Footer = () => {
    return (
        <footer>
            <div className="social-media">
                <div className="facebook">
                    <a href="https://www.facebook.com/liza.kroeschell">
                        <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                    </a>
                </div>
                <div className="instagram">
                    <a href="https://www.instagram.com/lizakroeschell/">
                        <FontAwesomeIcon icon={["fab", "instagram"]} />
                    </a>
                </div>
                <div className="youtube-social">
                    <a href="https://www.youtube.com/channel/UCoknyjXqdGefORakI0gMWwg">
                        <FontAwesomeIcon icon={["fab", "youtube"]} />
                    </a>
                </div>
            </div>
            <div>
                <h4>liza.kroeschell@gmail.com</h4>
            </div>
        </footer>
    )
}
