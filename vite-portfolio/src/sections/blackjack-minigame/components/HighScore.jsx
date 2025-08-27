import { useEffect, useState } from "react";
import CountUp from "@/blocks/TextAnimations/CountUp/CountUp";
import GradientText from "@/blocks/TextAnimations/GradientText/GradientText";
import { useIsMobile } from "../../../hooks/useIsMobile";

function HighScore({ playerBalance }) {
    const functionUrl = import.meta.env.VITE_AZURE_FUNC_URL;
    const [highScore, setHighScore] = useState(0);

    const isMobile = useIsMobile()

    useEffect(() => {
        async function fetchHighScore() {
            try {
                const res = await fetch(functionUrl, { method: "GET" });
                const data = await res.json();
                setHighScore(data.highScore ?? 0);
            } catch (err) {
                console.error("Failed to fetch high score:", err);
            }
        }
        fetchHighScore();
    }, [functionUrl]);

    useEffect(() => {
        if (playerBalance > highScore) {
            setHighScore(playerBalance);

            // save new high score to backend
            async function updateHighScore() {
                try {
                    await fetch(functionUrl, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ score: playerBalance })
                    });
                } catch (err) {
                    console.error("Failed to update high score:", err);
                }
            }
            updateHighScore();
        }
    }, [playerBalance, highScore, functionUrl]);

    return (
        <div className="flex flex-col justify-center items-center">
            <p className={`${isMobile ? "h-[75px] mb-4 text-center" : "h-12"} head-text`}>
                The Current High Score is:
            </p>
            <div className="flex flex-col justify-center items-center rounded-md h-[70px] w-[90%] md:w-[350px] shadow-md bg-white border-4 border-slate-500">
                <GradientText animationSpeed={4}>
                    <span className="font-bold text-4xl hover:cursor-default">
                        <CountUp from={0} to={highScore} separator="," />
                    </span>
                </GradientText>
            </div>
        </div>
    );
}

export default HighScore;