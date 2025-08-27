import { useEffect, useState } from "react";
import CountUp from "@/blocks/TextAnimations/CountUp/CountUp";
import GradientText from "@/blocks/TextAnimations/GradientText/GradientText";

function HighScore() {

    const functionUrl = import.meta.env.VITE_AZURE_FUNC_URL
    const [highScore, setHighScore] = useState(0);

    useEffect(() => {
        async function fetchHighScore() {
            try {
                const res = await fetch(functionUrl, {
                    method: "GET"
                });
                const data = await res.json();
                setHighScore(data.highScore ?? 0);
            } catch (err) {
                console.error("Failed to fetch high score:", err);
            }
        }

        fetchHighScore();
    }, [functionUrl]);

    return (
        <>
            <GradientText animationSpeed={4}>
                <span className="font-bold text-xl hover:cursor-default">
                    <CountUp from={0} to={highScore} separator="," />
                </span>
            </GradientText>
        </>
    );
}

export default HighScore;
