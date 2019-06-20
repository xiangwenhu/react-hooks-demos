import React, { useState } from "react";
import { uuContext } from "./reducer";

export default function Todo() {
    const { state, dispatch } = uuContext("todos");
    const [title, setTitle] = useState("任务");

    return (
        <React.Fragment>
            <div>
                任务:
                <input value={title} onChange={ev => setTitle(ev.target.value)} />
                <input
                    type="button"
                    value="添加"
                    onClick={() =>
                        dispatch({
                            type: "add",
                            title
                        })
                    }
                />
            </div>
            <div>
                {state.todos.map(t => (
                    <li key={t.id}>{t.title}</li>
                ))}
            </div>
        </React.Fragment>
    );
}
