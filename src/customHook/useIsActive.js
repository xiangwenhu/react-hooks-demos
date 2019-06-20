import React, { useState, useEffect } from "react";

function judeActive(state) {
    return state === "visible" ? true : false;
}

export default function useIsActive() {
    const [isActive, setIsActive] = useState(null);

    useEffect(() => {
        if (isActive === null) {
            setIsActive(judeActive(document.visibilityState));
        }

        function visibilitychange() {
            setIsActive(judeActive(document.visibilityState));
        }

        document.addEventListener("visibilitychange", visibilitychange);

        return () => {
            document.removeEventListener("visibilitychange", visibilitychange);
        };
    });

    console.log(isActive);
    return isActive;
}
