import React, { useState } from "react";

const styles = {
    li: {
        width: "300px"
    },
    ui: {
        width: "200px",
        margin: "auto",
        textAlign: "left"
    }
};

export default function TodoList() {
    const [todos, setTodos] = useState([
        {
            id: Math.random(),
            title: "吃饭",
            status: "none"
        }
    ]);
    const [title, setTitle] = useState("计划B");

    function removeItem(id) {
        const index = todos.findIndex(t => t.id === id);
        todos.splice(index, 1);
        setTodos([...todos]);
    }

    return (
        <React.Fragment>
            <div>
                <input value={title} onChange={ev => setTitle(ev.target.value)} />
                <input type="button" onClick={() => setTodos([...todos, { title, id: Math.random(), status: "none" }])} value="新增任务" />
            </div>

            <ul style={styles.ui}>
                {todos.map(todo => {
                    return (
                        <li style={styles.li} key={todo.id}>
                            {todo.title}
                            <a href="javascript:void(0)" onClick={() => removeItem(todo.id)}>
                                delete
                            </a>
                        </li>
                    );
                })}
            </ul>
        </React.Fragment>
    );
}
