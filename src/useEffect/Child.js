import React, { useEffect } from "react";

export default function Child({ count, color }) {
    useEffect(() => {
        console.log(`color is changed to color`);
    }, [color]);

    return (
        <div>
            Parent Count: {count}
            <br />
            Parent Color : {color}
        </div>
    );
}
