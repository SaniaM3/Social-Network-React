import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

export let reducers = combineReducers(
    {
        profilePage : profileReducer,
        dialogsPage : dialogsReducer,
        sidebarPage : sidebarReducer
    }
);

let store = createStore(reducers);

export default store;