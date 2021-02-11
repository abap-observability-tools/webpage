import React from 'react';
import ReactPlayer from "react-player"

export default class Video extends React.Component {
    render() {
        return (<div className="container container--md align-center">
            <ReactPlayer
                url="https://www.youtube.com/watch?v=XV5brOMpzJA" />
        </div>)
    }
}