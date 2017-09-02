import React from 'react';
import ListPage from '../components/ListPage';
import {connect} from 'react-redux';
import {choiceMusic, deleteMusic} from "../actions/index";

const mapStateToProps=(state)=>{
    return {
        propMusicList:state.musicList
    }
};
const mapDispatchToProps=(dispatch)=> {
    return {
        deleteMusic: (item) => {
            dispatch(deleteMusic(item))
        },
        choiceMusic: (item) => {
            dispatch(choiceMusic(item))
        }
    }
}
const PageContainer=connect(mapStateToProps,mapDispatchToProps)(ListPage);
export default PageContainer;