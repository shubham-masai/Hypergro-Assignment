import { GET_REQUEST, GET_ALL_VIDEOS_SUCCESS, SET_CURRENT_PLAYING_VIDEO, GET_FAILURE } from "./actionType";

type ActionPayload = string | any[] | null;
type ActionType = String;

interface Action {
    type: ActionType;
    payload: ActionPayload;
}

const initialState = {
    isLoading: false,
    moviesData: [],
    isError: false,
    currentPlayingVideo: null
}


export const reducer = (state = initialState, { type, payload }: Action) => {
    switch (type) {
        case GET_REQUEST:
            return { ...state, isLoading: true, isError: false }

        case GET_ALL_VIDEOS_SUCCESS:
            return { ...state, isLoading: false, isError: false, moviesData: payload }

        case GET_FAILURE:
            return { ...state, isLoading: false, isError: true }

        case SET_CURRENT_PLAYING_VIDEO:
            return { ...state, currentPlayingVideo: payload }

        default: return state
    }
}