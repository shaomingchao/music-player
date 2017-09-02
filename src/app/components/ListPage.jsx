import React,{Component} from 'react';
import ListItem from './ListItem';

export default class ListPage extends Component{
    render(){
        const propMusicList=this.props.propMusicList;
        let Items = propMusicList.musicList.length>0 && propMusicList.musicList.map((item) => {
            return (
                <ListItem
                    deleteMusic={(item)=>{this.props.deleteMusic(item)}}
                    choiceMusic={(item)=>{this.props.choiceMusic(item)}}
                    key={item.id}
                    data={item}
                    focus={this.props.propMusicList.currentMusitItem === item}
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