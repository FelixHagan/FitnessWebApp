import React from 'react';
import Proptypes from "prop-types";

const YoutubeItem = ({ exerciseVideoUrl }) => {
    return (
        <div className="youtube">
            <iframe 
                src={exerciseVideoUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded training video" 
            />
        </div>
    )
}
YoutubeItem.propTypes = {
    exerciseVideoUrl: Proptypes.string.isRequired
}


export default YoutubeItem
