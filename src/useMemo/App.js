import React, { useMemo } from "react";

const App = () => {
    const [text, setText] = React.useState(0);
    const [text2, setText2] = React.useState(0);
    const [text3, setText3] = React.useState(0);

    return (
        <div>
            number1:
            <input value={text} onChange={e => setText(e.target.value)} />
            number2:
            <input value={text2} onChange={e => setText2(e.target.value)} />
            number2:
            <input value={text3} onChange={e => setText3(e.target.value)} />
            <div>number1 + number2 :{+text + +text2}</div>
        </div>
    );
};

export default App;
