import * as React from "react";
import { connect, Dispatch } from 'react-redux'
import { RootState } from "../../../src/reducers/FilmSearchReducer";
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator
} from 'react-native';
import { SearchBox } from "./../components/SearchBox";
import { FilmListing } from "./../components/FilmListing";

interface IFilmSearchContainerProps {
    selectedYear: string,
    searchTerm: string,
    films: Object[];
    isLoading: boolean;
    selectYear: (year: string) => void,
    typeInSearchBox: (searchTerm: string) => void
}

let mapStateToProps = (state: RootState) => {
    return {
        selectedYear: state.selectedYear,
        searchTerm: state.searchTerm,
        films: state.films,
        isLoading: state.isLoading
    }
}

let mapDispatchToProps = (dispatch: Function) => {
    return {
        selectYear: (year: string): void => dispatch({
            type: 'SELECT_YEAR',
            payload: year
        }),
        typeInSearchBox: (searchTerm: string): void => dispatch({
            type: 'TYPE_IN_SEARCH_BOX',
            payload: searchTerm
        })
    };
}

class FilmSearchContainer extends React.Component<IFilmSearchContainerProps, {}> {
    render() {
        return (
            <View>
                <Text>
                    Film Search
                </Text>
                <SearchBox
                    searchTerm={this.props.searchTerm}
                    onChange={this.props.typeInSearchBox}
                />
                <FilmListing films={this.props.films} />
                { this.props.films.length === 0 && ! this.props.isLoading &&
                    <Text>No results</Text>
                }
                { this.props.isLoading &&
                    <ActivityIndicator
                        animating={this.props.isLoading}
                    />
                }
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmSearchContainer);