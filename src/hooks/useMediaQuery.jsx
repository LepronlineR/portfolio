import { useState, useEffect } from "react";

const useMediaQuery = (query) => {

    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const matchMedia = window.matchMedia(query)

        if(matchMedia.matches !== matches){
            setMatches(matchMedia.matches);
        }

        const listener = () => setMatches(matchMedia.matches);
        window.addEventListener("resize", listener);

        return () => {
            window.removeEventListener("resize", listener);
        }
    }, [matches, query])

    return matches;
}

export default useMediaQuery