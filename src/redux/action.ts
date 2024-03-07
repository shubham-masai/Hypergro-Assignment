import { GET_REQUEST, GET_ALL_VIDEOS_SUCCESS, SET_CURRENT_PLAYING_VIDEO,GET_FAILURE } from "./actionType";
import axios from "axios";
const url = 'https://internship-service.onrender.com/videos';

export async function getAllVideos(dispatch: any, page: number) {
    try {
        dispatch({ type: GET_REQUEST });
        const res = await axios.get(`${url}?page=${page}`);
        dispatch({ type: GET_ALL_VIDEOS_SUCCESS, payload: res.data.data.posts });
    } catch (error) {
        console.log("error", error.message);
        dispatch({ type: GET_FAILURE, payload: error.message});
    }
}

export const setCurrentPlayingVideo = (postId: string) => ({
  type: SET_CURRENT_PLAYING_VIDEO,
  payload: postId
});
