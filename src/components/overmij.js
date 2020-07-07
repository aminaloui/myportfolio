import React, { Component } from 'react';
import ReactPlayer from 'react-player'


class OverMij extends Component {
    render() {
        return (

            <div className="player-wrapper">
        <ReactPlayer
          className='react-player'
          url='https://player.vimeo.com/video/436054679'
          width='100%'
          height='100%'
        />
            </div>
        )
    }
}



export default OverMij;

