import {
    CREATE_BID,
    FETCH_BIDS,
    FETCH_BID
} from '../actions/types';
import _ from 'lodash';
export default (state = {}, action) => {
    switch (action.type) {

        case CREATE_BID:
            return {...state, [action.payload.id]: action.payload };
        case FETCH_BID:
            return {...state, [action.payload.id]: action.payload };
        case FETCH_BIDS:
            return {...state, ..._.mapKeys(action.payload, 'id') };
        default:
            return state;
    }
}