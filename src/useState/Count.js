import React, { useState } from "react";

export default function Count() {
    const [count, setCount] = useState(0);

    return (
        <React.Fragment>
            Count:{count}
            <div>
                <input type="button" value="增加1" onClick={() => setCount(count + 1)} />
                <input type="button" value="减少1" onClick={() => setCount(count - 1)} />
                <input type="button" value="重置" onClick={() => setCount(0)} />
            </div>
        </React.Fragment>
    );
}
