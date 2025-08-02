import { useEffect, useState } from "react";

export function useIsTallMobile() {
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window !== "undefined") {
            return window.innerHeight <= 768;
        }
            return false;
    }); 
    useEffect(() => {
        const check = () => {
            const isNowTall = window.innerHeight <= 768;
            setIsMobile(isNowTall);
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