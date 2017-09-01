import React from 'react';
import ListPage from '../components/ListPage';
import {connect} from 'react-redux';

class PageContainer extends React.Component{

    render(){
        return (
            <ListPage data={this.props.musicList}/>
        )
    }
}

const mapStateToProps=(state)=>{
    return state.musicList
};

export default connect(mapStateToProps)(PageContainer);