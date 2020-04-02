import React from "react"
import "./styles.css"
import { VideoList } from "../YoutubeVideo"
class Media extends React.Component {
    render() {
        return (
            <section className="media">
                <div className="main-content__header">
                    <h1>Media</h1>
                </div>
                <div className="main-content__body">
                    <VideoList></VideoList>
                    {/* <div className="youtube" data-embed="woRRcl5-7mo">
                        <div className="play-button"></div>
                    </div> */}
                    {/* <iframe
                        title="video_1"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/woRRcl5-7mo"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder="0"
                    ></iframe> */}
                    {/* <iframe
                        title="video_2"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/761Ah9h4U-o"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder="0"
                    ></iframe>
                    <iframe
                        title="video_3"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Zcmved0uM_E?start=1481"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder="0"
                    ></iframe>
                    <iframe
                        title="video_4"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/OJItiWIscSA"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder="0"
                    ></iframe>
                    <iframe
                        title="video_5"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/NKEFrH_wTEo"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder="0"
                    ></iframe>
                    <iframe
                        title="video_6"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/t7khV6OqL6Q"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder="0"
                    ></iframe>
                    <iframe
                        title="video_7"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/kSUXULbY3Jc"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder="0"
                    ></iframe>
                    <iframe
                        title="video_8"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/bdjq-_6Mvvw"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        frameBorder="0"
                    ></iframe> */}
                </div>
            </section>
        )
    }
}
export default Media
