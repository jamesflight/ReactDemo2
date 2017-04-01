import * as React from "react";
import * as R from "ramda";

export interface YearDropdownProps {
    selected: string,
    onChange: (event: string) => void
}

const from = 1900;
const to = 2017;

export const YearDropdown = (props: YearDropdownProps) => {
    return (
        <div className="form-group">
            <label>Year:</label>
            <select
                className="form-control"
                value={props.selected}
                onChange={(e) => {props.onChange(e.currentTarget.value)}}
            >
                <option value="">Any</option>
                {
                    R.range(from, to + 1)
                    .map((year) => year.toString())
                    .map((year) => {
                        return (
                            <option
                                key={year}
                                value={year}
                            >
                                {year}
                            </option>
                        );
                    })
                }
            </select>
        </div>
    )
};