import React, { useEffect, MouseEvent, useState } from "react"

export interface IVideoProps {
    embedLink: string
}

const videos = [
    "woRRcl5-7mo",
    "761Ah9h4U-o",
    "Zcmved0uM_E?start=1481",
    "OJItiWIscSA",
    "t7khV6OqL6Q",
    "kSUXULbY3Jc",
    "bdjq-_6Mvvw"
]

export const VideoList = () => {
    const getImages = () => {}

    const buildFrames = () => {}

    return (
        <div className="wrapper">
            {videos.map(link => YoutubeVideo({ embedLink: link }))}
        </div>
    )
}
export const YoutubeVideo = ({ embedLink }: IVideoProps) => {
    const [iframe, setIframe] = useState()
    const [imgSrc, setImgSrc] = useState("")
    const [imgLoaded, setImgLoaded] = useState(false)
    const [frameSrc, setFrameSrc] = useState("")
    const [selected, setSelected] = useState(false)

    const handleClick = (e: MouseEvent) => {
        console.log(e)
        setSelected(true)
        buildIFrame()
    }

    const onImageLoad = () => {
        setImgLoaded(true)
    }

    const buildIFrame = () => {
        setFrameSrc(
            `https://www.youtube.com/embed/${embedLink}?rel=0&showinfo=0&autoplay=1`
        )
    }
    useEffect(() => {
        setImgSrc(`https://img.youtube.com/vi/${embedLink}/sddefault.jpg`)
    }, [])
    return (
        <div className="youtube" data-embed={embedLink} onClick={handleClick}>
            {selected ? (
                <iframe
                    frameBorder="0"
                    allowFullScreen={true}
                    src={frameSrc}
                ></iframe>
            ) : (
                <div>
                    <div className="play-button"></div>
                    <img src={imgSrc} onLoad={onImageLoad}></img>
                </div>
            )}
        </div>
    )
}
