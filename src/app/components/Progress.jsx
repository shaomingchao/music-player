import React from 'react';
import './ProgressStyle.scss';

class Progress extends React.Component{
    changeProgress(e){
        let progressBar = this.refs.progressBar;
        let progress = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.clientWidth;
        this.props.onProgressChange && this.props.onProgressChange(progress);
    }
    render(){
        return (
            <div className="components-progress" ref="progressBar" onClick={(e)=>this.changeProgress(e)}>
                <div className="progress" style={{width: `${this.props.progress}%`, background: this.props.barColor}}></div>
            </div>
        )
    }
}
export default Progress;