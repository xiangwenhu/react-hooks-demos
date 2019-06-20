import React from "react";
import Counter from "./Counter";
import Todo from "./Todo";

export default function App() {
    return (
        <div
            style={{
                textAlign: "center",
                marginTop: "50px"
            }}
        >
            <div>Counter演示</div>
            <Counter />
            <hr />
            <div>todo演示</div>
            <Todo />
        </div>
    );
}
