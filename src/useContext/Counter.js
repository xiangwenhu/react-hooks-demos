import React from "react";
import { uuContext } from "./reducer";

export default function Counter() {
    const { state, dispatch } = uuContext("counter");

    return (
        <React.Fragment>
            <div>Count: {state.count}</div>
            <div>
                <input type="button" value="+1" onClick={() => dispatch({ type: "increase" })} />
                <input type="button" value="-1" onClick={() => dispatch({ type: "decrease" })} />
                <input type="button" value="归零" onClick={() => dispatch({ type: "reset" })} />
            </div>
        </React.Fragment>
    );
}
