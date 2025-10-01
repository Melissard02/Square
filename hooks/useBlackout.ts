// hooks/useBlackout.ts
import {useState} from "react";

export function useBlackout() {
    const [blackout, setBlackout] = useState(false);

    const triggerBlackout = () => {
        setBlackout(true);
        setTimeout(() => setBlackout(false), 1000);
    };

    return {blackout, triggerBlackout};
}