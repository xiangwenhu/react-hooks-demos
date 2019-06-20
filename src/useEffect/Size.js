import React, { useEffect, useState } from "react";

export default function Size() {
    const [wh, setWH] = useState({
        height: window.document.documentElement.scrollHeight,
        width: window.document.documentElement.scrollWidth
    });

    useEffect(() => {
        const resizeFn = () => {
            const size = {
                height: window.document.documentElement.scrollHeight,
                width: window.document.documentElement.scrollWidth
            };
            console.log(size);
            setWH(size);
        };

        window.addEventListener("resize", resizeFn);
        return () => {
            window.removeEventListener("resize", resizeFn);
        };
    });

    return (
        <div>
            <div>window width: {wh.width}</div>
            <div>window height: {wh.height}</div>
        </div>
    );
}
