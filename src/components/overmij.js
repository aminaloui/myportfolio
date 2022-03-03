import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import { motion } from 'framer-motion';


class OverMij extends Component {
    render() {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }} 
                
                className="player-wrapper">
                <ReactPlayer
                    className='react-player'
                    url='https://player.vimeo.com/video/436054679'
                    width='100%'
                    height='100%'
                />
            </motion.div>
        )
    }
}



export default OverMij;

