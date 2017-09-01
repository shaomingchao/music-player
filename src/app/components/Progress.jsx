import React from 'react';
import './ProgressStyle.scss';

class Progress extends React.Component{
    changeProgress(){

    }
    render(){
        return (
            <div className="components-progress" ref="progressBar" onClick={this.changeProgress}>
                <div className="progress" style={{width: `${this.props.progress}%`, background: this.props.barColor}}></div>
            </div>
        )
    }
}
export default Progress;