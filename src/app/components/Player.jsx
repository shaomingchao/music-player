import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Progress from './Progress';
import './PlayerStyle.scss'
import {updatePlayer,selectMusic} from '../actions/index'
import {toolsPlayMusic} from "../utils/utils";

let duration=null;
const repeatList = [
    'cycle',
    'once',
    'random'
];
export default class Player extends Component {
    constructor(props){
        super(props);
        this.play=this.play.bind(this);
    }
    componentDidMount(){
        $("#player").bind($.jPlayer.event.timeupdate, (e) => {
            duration = e.jPlayer.status.duration;
            this.props.dispatch(updatePlayer({
                progress: e.jPlayer.status.currentPercentAbsolute,
                volume: e.jPlayer.options.volume * 100,
                leftTime: this.formatTime(duration * (1 - e.jPlayer.status.currentPercentAbsolute / 100))
            }))
        });
        $("#player").bind($.jPlayer.event.ended, (e) => {
            this.playWhenEnd();
        });
    }

    componentWillUnmount() {
        $("#player").unbind($.jPlayer.event.timeupdate);
        $("#player").unbind($.jPlayer.event.ended);
    }
    componentDidUpdate(){
    }
    formatTime(time) {
        time = Math.floor(time);
        let miniute = Math.floor(time / 60);
        let seconds = Math.floor(time % 60);

        return miniute + ':' + (seconds < 10 ? '0' + seconds : seconds);
    }
    playMusic(item) {
        console.log(item)
        toolsPlayMusic(item);
        this.props.dispatch(selectMusic({
            currentMusitItem:item
        }))
    }
    changeVolumeHandler(progress){
        $("#player").jPlayer("volume", progress)
    }
    changeProgressHandler(progress){
        $("#player").jPlayer("play", duration * progress);
        this.props.dispatch(updatePlayer({
            isPlay: true
        }));
    }
    changeRepeat(){
        const index=repeatList.indexOf(this.props.propPlayerStatus.repeatType);
        const newIndex=(index+1+repeatList.length)%repeatList.length;
        this.props.dispatch(updatePlayer({
            repeatType:repeatList[newIndex]
        }))
    }
    playWhenEnd(){
        if (this.props.propPlayerStatus.repeatType === 'random') {
            let index = this.findMusicIndex(this.props.propMusicList.currentMusitItem);
            let randomIndex = this.randomRange(0, this.props.propMusicList.musicList.length - 1);
            while(randomIndex === index) {
                randomIndex = this.randomRange(0, this.props.propMusicList.musicList.length - 1);
            }
            this.playMusic(this.props.propMusicList.musicList[randomIndex]);
        } else if (this.props.propPlayerStatus.repeatType === 'once') {
            this.playMusic(this.props.propMusicList.currentMusitItem);
        } else {
            this.next();
        }
    }
    randomRange(under, over) {
        return Math.ceil(Math.random() * (over - under) + under);
    }
    findMusicIndex(music) {
        let index = this.props.propMusicList.musicList.indexOf(music);
        return Math.max(0, index);
    }
    next(){
        const index=this.props.propMusicList.musicList.indexOf(this.props.propMusicList.currentMusitItem);
        const nextIndex=(index+1+this.props.propMusicList.musicList.length)%this.props.propMusicList.musicList.length;
        this.playMusic(this.props.propMusicList.musicList[nextIndex])
    }
    prev(){
        const index=this.props.propMusicList.musicList.indexOf(this.props.propMusicList.currentMusitItem);
        const nextIndex=(index-1+this.props.propMusicList.musicList.length)%this.props.propMusicList.musicList.length;
        this.playMusic(this.props.propMusicList.musicList[nextIndex])
    }
    play(){
        if (this.props.propPlayerStatus.isPlay) {
            $("#player").jPlayer("pause");
        } else {
            $("#player").jPlayer("play");
        }
        this.props.dispatch(updatePlayer({
            isPlay:!this.props.propPlayerStatus.isPlay
        }))
    }
    render() {
        let props = this.props.propMusicList;
        return (
            <div className="player-page">
                <h1 className="caption"><Link to="/list">我的私人音乐坊 &gt;</Link></h1>
                <div className="mt20 row">
                    <div className="controll-wrapper">
                        <h2 className="music-title">{props.currentMusitItem.title}</h2>
                        <h3 className="music-artist mt10">{props.currentMusitItem.artist}</h3>
                        <div className="row mt20">
                            <div className="left-time -col-auto">-{this.props.propPlayerStatus.leftTime}</div>
                            <div className="volume-container">
                                <i className="icon-volume rt" style={{top: 5, left: -5}}></i>
                                <div className="volume-wrapper">
                                    <Progress
                                        progress={this.props.propPlayerStatus.volume}
                                        onProgressChange={(progress)=>this.changeVolumeHandler(progress)}
                                        barColor='#aaa'
                                    >
                                    </Progress>
                                </div>
                            </div>
                        </div>
                        <div style={{height: 10, lineHeight: '10px'}}>
                            <Progress
                                progress={this.props.propPlayerStatus.progress}
                                onProgressChange={(progress)=>this.changeProgressHandler(progress)}
                                barColor="#a23"
                            >
                            </Progress>
                        </div>
                        <div className="mt35 row">
                            <div>
                                <i className="icon prev" onClick={()=>this.prev()}></i>
                                <i className={`icon ml20 ${this.props.propPlayerStatus.isPlay ? 'pause' : 'play'}`}
                                   onClick={this.play}></i>
                                <i className="icon next ml20" onClick={()=>this.next()}></i>
                            </div>
                            <div className="-col-auto">
                                <i className={`icon repeat-${this.props.propPlayerStatus.repeatType}`} onClick={()=>this.changeRepeat()}></i>
                            </div>
                        </div>
                    </div>
                    <div className="-col-auto cover">
                        <img src={props.currentMusitItem.cover} alt={props.currentMusitItem.title}/>
                    </div>
                </div>
            </div>
        )
    }
}