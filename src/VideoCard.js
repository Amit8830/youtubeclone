import React from 'react';
import './VideoCard.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const VideoCard =  ( {image, title, channel, views, timestamp, channelImage}) => {
    return (
        <div className="videoCard">
            <img className="videoCard_thumbnail" src={image} alt="" />
            <div className="videoCard_info">
                <AccountCircleIcon className="videoCard_acco" alt={channel} src={channelImage} />
                <div className="videoCard_text">
                    <h4>{title}</h4>
                    <p>{channel} </p>
                    <p>{views} . {timestamp}</p>
                </div>

            </div>

        </div>
    )
}

export default VideoCard
