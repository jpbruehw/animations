import BlackjackGame from "./Blackjack"
import { useIsMobile } from "../../hooks/useIsMobile"

/* TODOS
    - correct the height and make formatting for mobile work
    - implement the logic to keep track of a high score
*/

function BlackjackWrapper() {
    const isMobile = useIsMobile()

    return (
        <section className="flex flex-col items-center justify-center w-full h-screen">
            <div className="flex flex-col items-start justify-start w-full c-space gap-4">
                <p className={`${isMobile ? "h-[110px]" : "h-12"} head-text`}>
                    Wait! Before you keep scrolling...want to play a game?
                </p>
                <p className="projects-subtext">
                    Is success luck or skill? I would argue that it is a mix of both. <b>However, the harder you work, the luckier you get.</b> 
                </p>
                <p>
                    
                </p>
            </div>
            <BlackjackGame />
        </section>
    )
}

export default BlackjackWrapper