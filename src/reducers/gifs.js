import { REQUEST_GIFS } from '../actions';

const initialState =  {
    data: []
};

export default function gifs(state = initialState, action) {
    switch (action.type) {
        case REQUEST_GIFS:
            return {
                ...state, data: action.payload.body.data
            };
        default:
            return state;
    }
}
