import ReactPlayer from "react-player";
import React from 'react'

export default function EmbedVideo(){
    return(
        <div>
                <h3>Embed YouTube video - <a href="https://www.cluemediator.com">Clue Mediator</a></h3>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"
                />
        </div>
    )
}