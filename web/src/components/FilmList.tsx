import * as React from "react";

import { FilmListingItem } from "./FilmListingItem";

export interface FilmListProps { films: Object[]; isLoading: boolean }

export const FilmList = (props: FilmListProps) => 
    <div className="panel panel-default">
        <div className="panel-body">
            {props.films.map((film) => (
                <FilmListingItem
                    key={film['imdbID']}
                    film={film}
                />
            ))}
            { props.films.length === 0 && ! props.isLoading &&
                <div style={{textAlign:"center"}}>No results</div>
            }
            { props.isLoading &&
                <div className="loader"></div>
            }
        </div>
    </div>;