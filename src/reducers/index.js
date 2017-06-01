import { combineReducers } from 'redux';
import GifsReducer from './gifs';
import ModalReducer from './modal';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    gifs: GifsReducer,
    modal: ModalReducer,
    router: routerReducer
});

export default rootReducer;
