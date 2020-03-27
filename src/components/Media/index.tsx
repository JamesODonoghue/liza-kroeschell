import React from "react"
class Media extends React.Component {
    render() {
        return (
            <section>
                <div className="main-content__header">
                    <h1>Media</h1>
                </div>
                <div className="main-content__body">
                    <article>
                        <iframe
                            style={{
                                border: 0,
                                width: "100%",
                                height: "400px"
                            }}
                            title="me-video"
                            src="https://www.youtube.com/embed/yBcIFWWU-dc?vq=hd1080"
                            width="560"
                            height="315"
                        ></iframe>
                    </article>
                </div>
            </section>
        )
    }
}
export default Media
