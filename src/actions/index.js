import posts from '../apis/posts';
import history from '../history';
import bids, { baseURL } from '../apis/bids';
import { v4 } from "uuid";


import {
    CREATE_POST,
    SIGN_IN,
    SIGN_OUT,
    FETCH_POST,
    FETCH_POSTS,
    DELETE_POST,
    EDIT_POST,
    CREATE_BID,
    FETCH_BIDS,
    FETCH_BID
} from '../actions/types'
import { formValues } from 'redux-form';
import { BuildSharp } from '@mui/icons-material';
import axios from 'axios';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId

    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT,

    };
};
export const postCreate = (formValues, img) =>
    async(dispatch, getState) => {
        const { userId } = getState().auth;
        const date = new Date();
        date.setDate(date.getDate() + 7);
        const id = v4()
        console.log(id);
        let data = {...formValues, createdDate: date, userId, image: img, id: id }
        console.log(data, 'formdata');
        const response = await posts.post('http://localhost:3002/api/bid/store', data);
        console.log(response);
        dispatch({ type: CREATE_POST, payload: response.data });
        // window.location.href = '/';
        history.push("/");
        window.location.reload(false);
    };

export const fetchPosts = () => async dispatch => {
    const response = await posts.get('http://localhost:3002/api/bid/posts');

    dispatch({ type: FETCH_POSTS, payload: response.data });
};
export const fetchPost = (id) => async dispatch => {
    const response = await posts.get(`http://localhost:3002/api/bid/posts/post/${id}`);
    dispatch({ type: FETCH_POST, payload: response.data });
};

export const deletePost = (id) => async dispatch => {
    await posts.delete(`http://localhost:3002/api/bid/deletepost/${id}`);
    dispatch({ type: DELETE_POST, payload: id });
    history.push("/");
    window.location.reload(false);
};
export const editPosts = (id, formValues) => async dispatch => {
    const response = await posts.put(`http://localhost:3002/api/bid/update/${id}`, formValues);
    dispatch({ type: EDIT_POST, payload: response.data });
    console.log(response.data);
    history.push("/");
    window.location.reload(false);
};
export const bidCreate = (bid, id) => async(dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await posts.post('http://localhost:3002/api/bid/saveuserbid', { userId, bid, id });
    dispatch({ type: CREATE_BID, payload: response.data });
    history.push("/");
    window.location.reload(false);
};

// export const fetchbids = () => async dispatch => {
//     const response = await axios.get(`${baseURL}/bids`);
//     dispatch({ type: FETCH_BIDS, payload: response.data });
// };
export const fetchbids = () => async dispatch => {
    const response = await bids.get('http://localhost:3002/api/bid/bids/allbids');
    dispatch({ type: FETCH_BIDS, payload: response.data });
};
export const fetchbid = (id) => async dispatch => {
    const response = await bids.get(`http://localhost:3002/api/bid//bids/bidprice/${id}`);
    dispatch({ type: FETCH_BID, payload: response.data });
};