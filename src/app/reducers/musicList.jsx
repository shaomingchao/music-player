import {CHOICE_MUSIC, DELETE_ITEM, FETCH_LIST, SELECT_MUSIC} from "../constants/ActionTypes";

const defaultState={
    musicList:[],
    currentMusitItem: {
        title:"",
        article:"",
        cover:""
    },
    choicMusicItem: {}
};

export const musicList=(state=defaultState,action)=>{
    switch (action.type)
    {
        case FETCH_LIST:
            return {
                musicList:action.data,
                currentMusitItem:action.data[0],
                choicMusicItem:{}
            };
        case SELECT_MUSIC:
            return Object.assign({},state,action.data);
            break;
        case DELETE_ITEM:
            return Object.assign({},
                state,
                {
                    musicList:state.musicList.filter((item)=>item!=action.data)
                }
                );
            break;
        case CHOICE_MUSIC:
            return Object.assign({},
                state,
                {
                    currentMusitItem:action.data
                }
                )
            break;
        default:
            return state;
    }
};
