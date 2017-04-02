import * as React from "react";
import * as R from "ramda";

import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export interface FilmListingProps {
    films: Object[]
}

export const FilmListing = (props: FilmListingProps) => {
    return (
        <View>
            {props.films.map((film) => <Text key={film['imdbID']}>{film['Title']}</Text>)}
        </View>
    )
};