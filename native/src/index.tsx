import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { combineEpics } from 'redux-observable';
import "rxjs";

import { FilmSearchReducer } from "./../../src/reducers/FilmSearchReducer";
import {testEpic} from "./../../src/actions/SearchEpic";
import FilmSearchContianer from "./containers/FilmSearchContainer";

const rootEpic = combineEpics(testEpic);
const epicMiddleware = createEpicMiddleware(rootEpic);
const store = createStore(FilmSearchReducer, applyMiddleware(epicMiddleware));

interface Props {

}

interface State {

}

export default class App extends Component<Props, State> {
    render() {
        return (
            <Provider store={store}>
                <View>
                    <FilmSearchContianer/>
                </View>
            </Provider>
        );
    }
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     } as React.,

//     text: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     } as React.TextStyle,
// });