import { combineReducers } from 'redux';
import GifsReducer from './gifs';

const rootReducer = combineReducers({
    gifs: GifsReducer
});

export default rootReducer;
