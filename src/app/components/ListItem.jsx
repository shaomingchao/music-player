import React from 'react';
import './ListItemStyle.scss';

class ListItem extends React.Component {
    render() {
        let item = this.props.data;
        return (
            <li className={`row components-listitem${this.props.focus ? ' focus' : ''}`}>
                <p><span className="bold">{item.title}</span> - {item.artist}</p>
                <p className="-col-auto delete"></p>
            </li>
        )
    }
}

export default ListItem;