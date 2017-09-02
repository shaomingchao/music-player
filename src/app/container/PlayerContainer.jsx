import React from 'react';
import Player from '../components/Player';
import {connect} from 'react-redux';

// class PlayerContainer extends React.Component{
//
//     render(){
//         return (
//             <Player {...this.props}/>
//         )
//     }
// }

const mapStateToProps=(state)=>{
    return {
       propMusicList:state.musicList,
       propPlayerStatus:state.playerStatus
    }
};
const PlayerContainer=connect(mapStateToProps)(Player)
export default PlayerContainer;
