import React from 'react';
import './SearchVideoResults.css';

import TuneIcon from '@material-ui/icons/Tune';

import ChannelRow from './ChannelRow/ChannelRow'
import VideoRow from './VideoRow/VideoRow'

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

            <VideoRow views="101K" subscription="100M" 
                description="Ты думаешь, что моя реакция и сила здесь, в этом мире, зависит от мускулов? Нет. Я даже воздухом не дышу." 
                timestamp="40 seconds ago" channel="МАТРИЦА" title="Примешь красную таблетку — войдешь в страну чудес." 
                image="https://iadsb.tmgrup.com.tr/7204c2/1200/627/0/6/645/344?u=https://idsb.tmgrup.com.tr/2019/08/21/new-matrix-movie-announced-with-keanu-reeves-returning-as-neo-1566337894945.jpg" />
            <VideoRow views="101K" subscription="100M" 
                description="Ты думаешь, что моя реакция и сила здесь, в этом мире, зависит от мускулов? Нет. Я даже воздухом не дышу." 
                timestamp="40 seconds ago" channel="МАТРИЦА" title="Примешь красную таблетку — войдешь в страну чудес." 
                image="https://iadsb.tmgrup.com.tr/7204c2/1200/627/0/6/645/344?u=https://idsb.tmgrup.com.tr/2019/08/21/new-matrix-movie-announced-with-keanu-reeves-returning-as-neo-1566337894945.jpg" />
            <VideoRow views="101K" subscription="100M" 
                description="Ты думаешь, что моя реакция и сила здесь, в этом мире, зависит от мускулов? Нет. Я даже воздухом не дышу." 
                timestamp="40 seconds ago" channel="МАТРИЦА" title="Примешь красную таблетку — войдешь в страну чудес." 
                image="https://iadsb.tmgrup.com.tr/7204c2/1200/627/0/6/645/344?u=https://idsb.tmgrup.com.tr/2019/08/21/new-matrix-movie-announced-with-keanu-reeves-returning-as-neo-1566337894945.jpg" />
            <VideoRow views="101K" subscription="100M" 
                description="Ты думаешь, что моя реакция и сила здесь, в этом мире, зависит от мускулов? Нет. Я даже воздухом не дышу." 
                timestamp="40 seconds ago" channel="МАТРИЦА" title="Примешь красную таблетку — войдешь в страну чудес." 
                image="https://iadsb.tmgrup.com.tr/7204c2/1200/627/0/6/645/344?u=https://idsb.tmgrup.com.tr/2019/08/21/new-matrix-movie-announced-with-keanu-reeves-returning-as-neo-1566337894945.jpg" />
            <VideoRow views="101K" subscription="100M" 
                description="Ты думаешь, что моя реакция и сила здесь, в этом мире, зависит от мускулов? Нет. Я даже воздухом не дышу." 
                timestamp="40 seconds ago" channel="МАТРИЦА" title="Примешь красную таблетку — войдешь в страну чудес." 
                image="https://iadsb.tmgrup.com.tr/7204c2/1200/627/0/6/645/344?u=https://idsb.tmgrup.com.tr/2019/08/21/new-matrix-movie-announced-with-keanu-reeves-returning-as-neo-1566337894945.jpg" />
            <VideoRow views="101K" subscription="100M" 
                description="Ты думаешь, что моя реакция и сила здесь, в этом мире, зависит от мускулов? Нет. Я даже воздухом не дышу." 
                timestamp="40 seconds ago" channel="МАТРИЦА" title="Примешь красную таблетку — войдешь в страну чудес." 
                image="https://iadsb.tmgrup.com.tr/7204c2/1200/627/0/6/645/344?u=https://idsb.tmgrup.com.tr/2019/08/21/new-matrix-movie-announced-with-keanu-reeves-returning-as-neo-1566337894945.jpg" />
            <VideoRow views="101K" subscription="100M" 
                description="Ты думаешь, что моя реакция и сила здесь, в этом мире, зависит от мускулов? Нет. Я даже воздухом не дышу." 
                timestamp="40 seconds ago" channel="МАТРИЦА" title="Примешь красную таблетку — войдешь в страну чудес." 
                image="https://iadsb.tmgrup.com.tr/7204c2/1200/627/0/6/645/344?u=https://idsb.tmgrup.com.tr/2019/08/21/new-matrix-movie-announced-with-keanu-reeves-returning-as-neo-1566337894945.jpg" />
            <VideoRow views="101K" subscription="100M" 
                description="Ты думаешь, что моя реакция и сила здесь, в этом мире, зависит от мускулов? Нет. Я даже воздухом не дышу." 
                timestamp="40 seconds ago" channel="МАТРИЦА" title="Примешь красную таблетку — войдешь в страну чудес." 
                image="https://iadsb.tmgrup.com.tr/7204c2/1200/627/0/6/645/344?u=https://idsb.tmgrup.com.tr/2019/08/21/new-matrix-movie-announced-with-keanu-reeves-returning-as-neo-1566337894945.jpg" />
            <VideoRow views="101K" subscription="100M" 
                description="Ты думаешь, что моя реакция и сила здесь, в этом мире, зависит от мускулов? Нет. Я даже воздухом не дышу." 
                timestamp="40 seconds ago" channel="МАТРИЦА" title="Примешь красную таблетку — войдешь в страну чудес." 
                image="https://iadsb.tmgrup.com.tr/7204c2/1200/627/0/6/645/344?u=https://idsb.tmgrup.com.tr/2019/08/21/new-matrix-movie-announced-with-keanu-reeves-returning-as-neo-1566337894945.jpg" />
            <VideoRow views="101K" subscription="100M" 
                description="Ты думаешь, что моя реакция и сила здесь, в этом мире, зависит от мускулов? Нет. Я даже воздухом не дышу." 
                timestamp="40 seconds ago" channel="МАТРИЦА" title="Примешь красную таблетку — войдешь в страну чудес." 
                image="https://iadsb.tmgrup.com.tr/7204c2/1200/627/0/6/645/344?u=https://idsb.tmgrup.com.tr/2019/08/21/new-matrix-movie-announced-with-keanu-reeves-returning-as-neo-1566337894945.jpg" />
        </div>
    );
}

export default SearchVideoResults;