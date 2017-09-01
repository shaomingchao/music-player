import React,{Component} from 'react';
import ListItem from './ListItem';

export default class ListPage extends Component{
    render(){
        const musicList=this.props.data;
        console.log("1111111"+JSON.stringify(musicList))
        let Items = musicList && musicList.map((item) => {
            return (
                <ListItem
                    key={item.id}
                    data={item}
                    focus={this.props.data.currentMusitItem === item}
                ></ListItem>
            );
        });

        return (
            <ul>
                { Items }
            </ul>
        )
    }
}