import { combineReducers } from 'redux';
import GifsReducer from './gifs';
import ModalReducer from './modal';
import { routerReducer } from 'react-router-redux';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
    form: FormReducer,
    gifs: GifsReducer,
    modal: ModalReducer,
    router: routerReducer
});

export default rootReducer;
