import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Progress from './Progress';
import './PlayerStyle.scss'

export default class Player extends Component {
    constructor(){
        super();
        this.state={
            leftTime:0,
            volume:1,
            progress:0,
            isPlay:"play",
            isInit:false
        }
        this.play=this.play.bind(this);
    }
    componentDidMount(){
        $("#player").jPlayer({
            supplied:"mp3",
            wmode:"window",
            useStateClassSkin:true
        });

        $("#player").bind($.jPlayer.event.timeupdate, (e) => {
            const duration = e.jPlayer.status.duration;
            this.setState({
                progress: e.jPlayer.status.currentPercentAbsolute,
                volume: e.jPlayer.options.volume * 100,
                leftTime: this.formatTime(duration * (1 - e.jPlayer.status.currentPercentAbsolute / 100))
            });
        });
    }

    componentWillUnmount() {
        $("#player").unbind($.jPlayer.event.timeupdate)
    }
    componentDidUpdate(){
        if(this.state.isInit===false)
        {
            if(this.props.data.musicList.length>0) {
                this.playMusic(this.props.data.musicList[0]);
                this.setState({
                    isInit: true
                })
            }
        }
    }
    formatTime(time) {
        time = Math.floor(time);
        let miniute = Math.floor(time / 60);
        let seconds = Math.floor(time % 60);

        return miniute + ':' + (seconds < 10 ? '0' + seconds : seconds);
    }
    playMusic(item) {
        $("#player").jPlayer("setMedia", {
            mp3: item.file
        }).jPlayer('play');
        // this.setState({
        //     currentMusitItem: item
        // });
    }
    changeVolumeHandler(){

    }
    changeProgressHandler(){

    }
    changeRepeat(){

    }
    next(){
        const index=this.props.data.musicList.indexOf(this.props.data.currentMusitItem);
        console.log(index)
        const nextIndex=(index+1+this.props.data.musicList.length)%this.props.data.musicList.length;
        this.playMusic(this.props.data.musicList[nextIndex])

    }
    prev(){
        const index=this.props.data.musicList.indexOf(this.props.data.currentMusitItem);
        const nextIndex=(index-1+this.props.data.musicList.length)%this.props.data.musicList.length;
        this.playMusic(this.props.data.musicList[nextIndex])
    }
    play(){
        if (this.state.isPlay) {
            $("#player").jPlayer("pause");
        } else {
            $("#player").jPlayer("play");
        }
        this.setState({
            isPlay: !this.state.isPlay
        });
    }
    render() {
        let props = this.props.data;
        return (
            <div className="player-page">
                <h1 className="caption"><Link to="/list">我的私人音乐坊 &gt;</Link></h1>
                <div className="mt20 row">
                    <div className="controll-wrapper">
                        <h2 className="music-title">{props.currentMusitItem.title}</h2>
                        <h3 className="music-artist mt10">{props.currentMusitItem.artist}</h3>
                        <div className="row mt20">
                            <div className="left-time -col-auto">-{this.state.leftTime}</div>
                            <div className="volume-container">
                                <i className="icon-volume rt" style={{top: 5, left: -5}}></i>
                                <div className="volume-wrapper">
                                    <Progress
                                        progress={this.state.volume}
                                        onProgressChange={this.changeVolumeHandler}
                                        barColor='#aaa'
                                    >
                                    </Progress>
                                </div>
                            </div>
                        </div>
                        <div style={{height: 10, lineHeight: '10px'}}>
                            <Progress
                                progress={this.state.progress}
                                onProgressChange={this.changeProgressHandler}
                                barColor="#a23"
                            >
                            </Progress>
                        </div>
                        <div className="mt35 row">
                            <div>
                                <i className="icon prev" onClick={()=>this.prev()}></i>
                                <i className={`icon ml20 ${this.state.isPlay ? 'pause' : 'play'}`}
                                   onClick={this.play}></i>
                                <i className="icon next ml20" onClick={()=>this.next()}></i>
                            </div>
                            <div className="-col-auto">
                                <i className={`icon repeat-${props.repeatType}`} onClick={this.changeRepeat}></i>
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