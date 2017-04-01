import * as React from "react";
import * as R from "ramda";

export interface SearchBoxProps {
    searchTerm: string,
    onChange: (event: string) => void
}

export const SearchBox = (props: SearchBoxProps) => {
    return (
        <div className="form-group">
            <label>Film Name:</label>
            <input
                className="form-control"
                type="text"
                value={props.searchTerm}
                onChange={(e) => {props.onChange(e.currentTarget.value)}}
            />
        </div>
    )
};