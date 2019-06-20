import React, { useReducer, useContext } from "react";

const initialState = {
    count: 0
};
const context = React.createContext();
const counterReducer = function(state, action) {
    const { count } = state;

    switch (action.type) {
        case "increase":
            return {
                count: count + 1
            };
        case "reset":
            return initialState;
        case "decrease":
            return {
                count: count - 1
            };
        default:
            return state;
    }
};

const todosReducer = function(state, action) {
    const { todos } = state;

    switch (action.type) {
        case "add":
            return {
                todos: [
                    ...state.todos,
                    {
                        title: action.title,
                        id: Date.now(),
                        status: "none"
                    }
                ]
            };
        case "delete":
            const id = action.id;
            const index = todos.findIndex(t => t.id === id);
            if (index >= 0) {
                todos.splice(index, 1);
            }
            return [...todos];
        default:
            return state;
    }
};

const ContextProvider = props => {
    const [counterState, counterDispatch] = useReducer(counterReducer, initialState);
    const [todosState, todosDispatch] = useReducer(todosReducer, { todos: [] });

    const state = {
        counterState,
        todosState
    };
    const dispatch = {
        counterDispatch,
        todosDispatch
    };

    return <context.Provider value={{ state, dispatch }}>{props.children}</context.Provider>;
};

const uuContext = name => {
    const { state, dispatch } = useContext(context);
    return {
        state: state[`${name}State`],
        dispatch: dispatch[`${name}Dispatch`]
    };
};

export { ContextProvider, context, uuContext };
