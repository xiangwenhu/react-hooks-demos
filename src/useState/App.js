import React, { useState } from "react";
import Count from "./Count";
import TodoList from "./TodoList";

export default function App() {
    return (
        <div
            style={{
                textAlign: "center",
                marginTop: "50px"
            }}
        >
            <Count />
            <TodoList />
        </div>
    );
}
