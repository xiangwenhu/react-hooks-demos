import React, { useRef, useCallback } from "react";

const App = () => {
    const inputEl = useRef(null);
    const onButtonClick = useCallback(() => {
        // `current` 指向已挂载到 DOM 上的文本输入元素
        inputEl.current.focus();
    }, []);
    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
};

export default App;
