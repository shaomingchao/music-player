import React from 'react';
import './ListItemStyle.scss';

class ListItem extends React.Component {
    choicMusic(item,event){
        event.stopPropagation();
        this.props.choicMusic(item);
    }
    deleteMusic(item){
        this.props.deleteMusic(item);
    }
    render() {
        let item = this.props.data;
        return (
            <li className={`row components-listitem${this.props.focus ? ' focus' : ''}`} onClick={this.choicMusic.bind(this, item)}>
                <p><span className="bold">{item.title}</span> - {item.artist}</p>
                <p className="-col-auto delete" onClick={this.deleteMusic.bind(this,item)}></p>
            </li>
        )
    }
}

export default ListItem;