import React, { useState, useEffect } from "react";
import Child from "./Child";

export default function Count() {
    const [count, setCount] = useState(0);
    const [bgColor, setBgColor] = useState("#FF0066");

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    }, []);

    useEffect(() => {
        document.body.style.backgroundColor = bgColor;
    });

    return (
        <React.Fragment>
            Count:{count}
            <div>
                <input type="button" value="增加1" onClick={() => setCount(count + 1)} />
                <input type="button" value="减少1" onClick={() => setCount(count - 1)} />
                <input type="button" value="重置" onClick={() => setCount(0)} />
            </div>
            <div>
                背景颜色
                <input value={bgColor} onChange={ev => setBgColor(ev.target.value)} />
            </div>
            <hr />
            <Child
                {...{
                    count,
                    color: bgColor
                }}
            />
        </React.Fragment>
    );
}
