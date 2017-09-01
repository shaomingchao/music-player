import React from 'react';
import Player from '../components/Player';
import {connect} from 'react-redux';

class PlayerContainer extends React.Component{

    render(){
        return (
            <Player data={this.props}/>
        )
    }
}

const mapStateToProps=(state)=>{
    return state.musicList
}

export default connect(mapStateToProps)(PlayerContainer)
