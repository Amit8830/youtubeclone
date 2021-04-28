import React from 'react'
import "./ChannelRow.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VerifiedIcon from '@material-ui/icons/CheckCircleOutline';

const ChannelRow = ({image,channel,subs,noOfVideo,description,verified}) => {
    return (
        <div className="channelRow">
        <AccountCircleIcon className="channelRow_logo" alt={channel} src={image} />
            <div className="channelRow_text">
                <h4>{channel} {verified && <VerifiedIcon />} </h4>
                <p>{subs} subscribers. {noOfVideo} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
