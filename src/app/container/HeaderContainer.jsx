import React from 'react';
import {connect} from 'react-redux';
import Header from '../components/Header';

const mapStateToProps=(state)=>{
    return {
        propMusicList:state.musicList,
        propPlayerStatus:state.playerStatus
    }
};

const HeaderContainer =connect(mapStateToProps)(Header);
export default HeaderContainer;