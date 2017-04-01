import * as React from "react";
import { connect, Dispatch } from 'react-redux'

import { YearDropdown } from "../components/YearDropdown";
import { SearchBox } from "../components/SearchBox";
import { FilmList } from "../components/FilmList";
import { RootState } from "../reducers/FilmSearchReducer";

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
            <div className="container">
                <h1>Film Searcher</h1>
                <div className="row">
                    <div className="col-xs-6">
                        <SearchBox
                            searchTerm={this.props.searchTerm}
                            onChange={this.props.typeInSearchBox}
                        />
                    </div>
                    <div className="col-xs-6">
                        <YearDropdown
                            selected={this.props.selectedYear}
                            onChange={this.props.selectYear}
                        />
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-xs-12">
                        <FilmList
                            films={this.props.films}
                            isLoading={this.props.isLoading}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmSearchContainer);