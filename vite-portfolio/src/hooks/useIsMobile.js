import { useEffect, useState } from "react";

export function useIsMobile() {
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window !== "undefined") {
            return window.innerWidth <= 768;
        }
            return false;
    }); 
    useEffect(() => {
        const check = () => {
            const isNowMobile = window.innerWidth <= 768;
            setIsMobile(isNowMobile);
        };    
        // check screen size on mount
        // add as even listener for subsequent width changes
        check();
        window.addEventListener("resize", check); 
        return () => {
            window.removeEventListener("resize", check);
        };
    }, []); 
    return isMobile;
}

