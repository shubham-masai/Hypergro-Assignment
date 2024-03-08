import { legacy_createStore, Reducer } from "redux";
import { reducer } from "./reducer";

interface State {
    isLoading: boolean;
    moviesData: never[];
    isError: boolean;
    currentPlayingVideo: null;
}

type ActionType = 
    | { type: "GET_REQUEST" }
    | { type: "GET_ALL_VIDEOS_SUCCESS", payload: any }
    | { type: "SET_CURRENT_PLAYING_VIDEO", payload: any }
    | { type: "GET_FAILURE" };

export const store = legacy_createStore(reducer as Reducer<State, ActionType>);
