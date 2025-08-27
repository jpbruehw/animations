import { useEffect, useState } from "react";

export function useIsTallMobile() {
    const [isTallMobile, setIsTallMobile] = useState(() => {
        if (typeof window !== "undefined") {
            return window.innerHeight >= 700;
        }
            return false;
    }); 
    useEffect(() => {
        const check = () => {
            const isNowTall = window.innerHeight >= 700;
            setIsTallMobile(isNowTall);
        };
        // check screen size on mount
        // add as even listener for subsequent width changes
        check();
        window.addEventListener("resize", check); 
        return () => {
            window.removeEventListener("resize", check);
        };
    }, []);
    
    return isTallMobile;
}