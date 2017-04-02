import * as React from "react";
import * as R from "ramda";

import {
    StyleSheet,
    TextInput
} from 'react-native';

export interface SearchBoxProps {
    searchTerm: string,
    onChange: (searchTerm: string) => void
}

export const SearchBox = (props: SearchBoxProps) => {
    return (
        <TextInput
            onChangeText={ props.onChange }
            value={ props.searchTerm }
        />
    )
};