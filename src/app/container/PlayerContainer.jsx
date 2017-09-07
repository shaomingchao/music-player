import React from 'react';
import Player from '../components/Player';
import {connect} from 'react-redux';

const mapStateToProps=(state)=>{
    return {
       propMusicList:state.musicList,
       propPlayerStatus:state.playerStatus
    }
};
const PlayerContainer=connect(mapStateToProps)(Player)
export default PlayerContainer;
