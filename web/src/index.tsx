import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { combineEpics } from 'redux-observable';


import FilmSearchContainer from "./containers/FilmSearchContainer";
import { FilmSearchReducer } from "./reducers/FilmSearchReducer";
import {testEpic} from "./actions/SearchEpic";

const rootEpic = combineEpics(testEpic);
const epicMiddleware = createEpicMiddleware(rootEpic);
const store = createStore(FilmSearchReducer, applyMiddleware(epicMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <FilmSearchContainer />
    </Provider>,
    document.getElementById("example")
);