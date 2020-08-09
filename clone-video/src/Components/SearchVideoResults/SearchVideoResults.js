import React from 'react';
import './SearchVideoResults.css';

import TuneIcon from '@material-ui/icons/Tune';

import ChannelRow from './ChannelRow/ChannelRow'

const SearchVideoResults = () => {
    return (
        <div className="searchVideoResults">
            <div className="searchVideoResults__filter">
                <TuneIcon />
                <h2>ФИЛЬТР</h2>
            </div>
            <hr />

            <ChannelRow image="https://www.kindpng.com/picc/m/216-2164574_green-sports-gear-matrix-path-of-neo-matrix.png"
                channel="МАТРИЦА" verified subscriptions="777K" nomberOfVideos={111}
                description="— Всё... нереально? — Что есть реальность? И как определить её?..." />
            <hr />


        </div>
    );
}

export default SearchVideoResults;