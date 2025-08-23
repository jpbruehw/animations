import BlackjackGame from "./Blackjack"
import { useIsMobile } from "../../hooks/useIsMobile"
import { useMediaQuery } from "react-responsive"
//import { useIsTallMobile } from "../../hooks/useIsTallMobile"

/* TODOS
    - implement the logic to keep track of a high score
*/

function BlackjackWrapper() {
    const isMobile = useIsMobile()
    // const isTallMobile = useIsTallMobile()

    const isXLMonitor = useMediaQuery({ minWidth: 1601 })

    return (
        <section id="blackjack" className={`flex flex-col items-center justify-center w-full ${isMobile ? "min-h-[100vh]" : isXLMonitor ? "h-full" : "h-screen"}`}>
            <div className="flex flex-col items-start justify-start w-full c-space gap-4">
                <p className={`${isMobile ? "h-[110px]" : "h-12"} head-text`}>
                    Wait! Before you keep scrolling...want to play a game?
                </p>
                <p className="projects-subtext">
                    Is success luck or skill? I'd say a bit of of both. However, the harder you work, the luckier you get. Test both here, the high score is: 
                </p>
            </div>
            <BlackjackGame />
        </section>
    )
}

export default BlackjackWrapper