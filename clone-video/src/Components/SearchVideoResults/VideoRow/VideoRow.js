import React from 'react'
import './VideoRow.css'

import Avatar from '@material-ui/core/Avatar';

function VideoRow({ views, subscription, description, timestamp, channel, title, image }) {
    return (
        <div className="VideoRow">
            <img className="VideoRow__thumbnail" src={image} alt="" />

            <div className="VideoRow__text">
                <h4>{title}</h4>
                <p className="VideoRow__headLine">{channel} -{" "}
                    <span className="VideoRow__subscription"><span className="VideoRow__subscriptionNumber">{subscription}</span> Subscribers</span>{" "}
                    {views} views - {timestamp}
                </p>
                <p className="VideoRow__description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow
