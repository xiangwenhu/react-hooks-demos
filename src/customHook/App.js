import React from "react";
import useIsActive from "./useIsActive";

export default function App() {
    const isActive = useIsActive();
    return (
        <div
            style={{
                textAlign: "center",
                marginTop: "50px"
            }}
        >
            页面是否可见: {isActive + ""}
        </div>
    );
}
