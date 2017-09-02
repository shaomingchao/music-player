import {UPDATE_PLAYER} from "../constants/ActionTypes";

const defaultPlayerState={
        leftTime:0,
        volume:1,
        progress:0,
        isPlay:"play",
        isInit:false,
        repeatType:"cycle"
};

export const playerStatus=(state= defaultPlayerState,action)=>{
    switch (action.type) {
        case UPDATE_PLAYER:
            return Object.assign(
                {},
                state,
                action.data
            );
            break;
        default:
            return state;
    }
}