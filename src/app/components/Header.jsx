import React,{Component} from 'react';
import './HeaderStyle.scss'
import {toolsPlayMusic} from "../utils/utils";

class Header extends Component{
    componentDidMount(){
        $("#player").jPlayer({
            supplied:"mp3",
            wmode:"window",
            useStateClassSkin:true
        });
    }
    shouldComponentUpdate(nextProps, nextState){
        return !(nextProps.propMusicList.currentMusitItem==this.props.propMusicList.currentMusitItem)
            || this.props.propMusicList.musicList.length==0
    }
    componentDidUpdate(){
        console.log("+++"+this.props.propMusicList.musicList.length)
        if(this.props.propMusicList.musicList.length>0) {
            toolsPlayMusic(this.props.propMusicList.currentMusitItem);
        }
    }
    render(){
        return (
            <div className="row components-header">
                <img src="/public/images/logo.png" alt="" width="40" className="-col-auto"/>
                <h1 className="caption">Music Player Build By React</h1>
            </div>
        )
    }
}
export default Header;