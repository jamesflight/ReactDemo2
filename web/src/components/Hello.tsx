import * as React from "react";

export interface HelloProps { text: string; }

export const Hello = (props: HelloProps) => <h1>Text: {props.text}!</h1>;