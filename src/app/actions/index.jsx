import * as ActionTypes from "../constants/ActionTypes";

const receiveMusicList = lists => ({
    type: ActionTypes.FETCH_LIST,
    data: lists.MUSIC_LIST
});

export const fetchMusicList = dispath => {
    fetch("/public/config/config.json")
        .then(respone => respone.json())
        .then(json => dispath(receiveMusicList(json)))
};

export const updatePlayer = (item) => ({
    type: ActionTypes.UPDATE_PLAYER,
    data: item
})
export const selectMusic = (item) => ({
    type: ActionTypes.SELECT_MUSIC,
    data: item
});
export const choiceMusic=(item)=>({
    type:ActionTypes.CHOICE_MUSIC,
    data:item
})
export const deleteMusic=(item)=>({
    type:ActionTypes.DELETE_ITEM,
    data:item
})