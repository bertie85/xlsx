import { createStore } from 'redux';

const store = createStore(reducer);

function reducer(state = {}, action) {
    return state;
}

export default store;