import React from "react";

const Child = React.memo(({ onSubmit, label }) => {
    console.log("child");
    return (
        <div>
            <button onClick={onSubmit}>{label}</button>
        </div>
    );
});

const App = () => {
    const [text, setText] = React.useState("");
    // 方案一
    const onSubmit1 = React.useCallback(() => {
        console.log(text);
    }, []); //text是初始值，没有更新
    // 方案二
    const onSubmit2 = React.useCallback(() => {
        console.log(text);
    }); //text是新的，text变化时，生成了新的onSubmit2,表示只要有属性更新就执行
    // 方案三，等同于方案二
    const onSubmit3 = React.useCallback(() => {
        console.log(text);
    }, [text]); //text是新的，text变化时，生成了新的onSubmit2,表示text更新时执行
    // 方案四，达到了目的
    const ref = React.useRef();
    React.useLayoutEffect(() => {
        ref.current = text;
    }, [text]);
    const onSubmit4 = React.useCallback(() => {
        console.log(ref.current);
    }, [ref]); //ref只在创建时更新，其属性current跟随text变化，不会生成新的onSubmit4
    return (
        <div>
            text:
            <input value={text} onChange={e => setText(e.target.value)} />
            {/* <Child onSubmit={onSubmit1} label={"onSubmit1"} />
            <Child onSubmit={onSubmit2} label={"onSubmit2"} />
            <Child onSubmit={onSubmit3} label={"onSubmit3"} /> */}
            <Child onSubmit={onSubmit4} label={"onSubmit4"} />
        </div>
    );
};

export default App;
