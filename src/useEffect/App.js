import React, { useState } from "react";
import Count from "./Count";
import Size from "./Size";

export default function App() {
    const [show, setShow] = useState(true);

    return (
        <div
            style={{
                textAlign: "center",
                marginTop: "50px"
            }}
        >
            <Count />
            <hr />
            <div>
                <input type="checkbox" checked={show} onChange={ev => setShow(ev.target.checked)} />
                显示窗体大小组件
            </div>
            <hr />
            {show ? <Size /> : null}
            <div></div>
        </div>
    );
}
