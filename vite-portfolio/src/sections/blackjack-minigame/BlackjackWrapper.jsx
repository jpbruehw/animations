import BlackjackGame from "./Blackjack"
import { useIsMobile } from "../../hooks/useIsMobile"
import { useMediaQuery } from "react-responsive"
import { useState } from "react"
import HighScore from "./components/HighScore"

function BlackjackWrapper() {
    const isMobile = useIsMobile()
    const isXLMonitor = useMediaQuery({ minWidth: 1601 })

    const [playerBalance, setPlayerBalance] = useState(1000);

    return (
        <section id="blackjack" className={`flex flex-col items-center justify-center w-full ${isMobile ? "min-h-[100vh]" : isXLMonitor ? "h-full" : "min-h-screen"}`}>
            <div className="flex flex-col items-start justify-start w-full c-space gap-4">
                <p className={`${isMobile ? "h-[110px]" : "h-12"} head-text`}>
                    Wait! Before you keep scrolling...want to play a game?
                </p>
                <p className="projects-subtext">
                    Is success luck or skill? I'd say a bit of of both. However, the harder you work, the luckier you get.
                </p>
                <div className="mx-auto">
                    <HighScore playerBalance={playerBalance} />
                </div>
            </div>
            <BlackjackGame playerBalance={playerBalance} setPlayerBalance={setPlayerBalance} />
        </section>
    )
}

export default BlackjackWrapper