import { combineReducers } from 'redux';
import {musicList} from "./musicList";
import {playerStatus} from "./playerStatus";


const rootReducer = combineReducers({
    musicList,
    playerStatus
});

export default rootReducer