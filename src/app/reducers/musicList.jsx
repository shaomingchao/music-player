import {FETCH_LIST} from "../constants/ActionTypes";

const defaultState={
    musicList:[],
    currentMusitItem: {
        title:"",
        article:"",
        cover:""
    },
    repeatType: 'cycle'
};

export const musicList=(state=defaultState,action)=>{
    switch (action.type)
    {
        case FETCH_LIST:
            return {
                musicList:action.data,
                currentMusitItem:action.data[0],
                repeatType:"cycle"
            };
        default:
            return state;
    }
};