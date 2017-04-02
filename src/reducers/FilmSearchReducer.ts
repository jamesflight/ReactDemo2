import * as R from 'ramda';

export class RootState {
    selectedYear: string = "";
    searchTerm: string = '';
    films: Object[] = [];
    isLoading: boolean = false;
}

export const FilmSearchReducer = (state: RootState = new RootState(), action: any) => {
    switch (action.type) {
        case 'SELECT_YEAR':
            return R.pipe(
                R.assoc('selectedYear', action.payload),
                R.assoc('films', []),
                R.assoc('isLoading', true)
            )(state);
        case 'TYPE_IN_SEARCH_BOX':
            return R.pipe(
                R.assoc('searchTerm', action.payload),
                R.assoc('films', []),
                R.assoc('isLoading', true)
            )(state);
        case 'SEARCH_COMPLETED':
            return R.pipe(
                R.assoc('films', action.films),
                R.assoc('isLoading', false)
            )(state)
    default:
        return state
    }
}