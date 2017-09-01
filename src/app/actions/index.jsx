import {FETCH_LIST, UPDATE_PLAYER} from "../constants/ActionTypes";


const receiveMusicList = lists => ({
    type: FETCH_LIST,
    data: lists.MUSIC_LIST
});

export const fetchMusicList=dispath=>{
    fetch("/public/config/config.json")
        .then(respone=>respone.json())
        .then(json=>dispath(receiveMusicList(json)))
};

export const updatePlayer=(state)=>{
    type:UPDATE_PLAYER
}