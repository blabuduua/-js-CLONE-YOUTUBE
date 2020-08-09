import React from 'react';
import './ChannelRow.css';

import Avatar from '@material-ui/core/Avatar';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const ChannelRow = ({ image, channel, verified, subscriptions, nomberOfVideos, description }) => {
    return (
        <div>
            <div className="ChannelRow">
                <Avatar className="ChannelRow__avatar" alt="{channel}" src={image} />

                <div className="ChannelRow__text">
                    <h4>{channel} {verified && <CheckCircleOutlineIcon />}</h4>
                    <p>{subscriptions} subscribers - {nomberOfVideos} videos</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default ChannelRow;