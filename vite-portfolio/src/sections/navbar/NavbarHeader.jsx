import { useEffect, useState } from "react"
import DecryptedText from "../../blocks/TextAnimations/DecryptedText/DecryptedText";
import "../../custom-styles/animated-header-tag.css"

function HeroNameWithEmoji() {
    const [fadeOutIntro, setFadeOutIntro] = useState(false)
    const [showEmoji, setShowEmoji] = useState(false)

    useEffect(() => {
        const emojiTimeout = setTimeout(() => {
            setShowEmoji(true)
        }, 2000)

        const fadeOutTimeout = setTimeout(() => {
            setFadeOutIntro(true)
        }, 30000)

        return () => {
            clearTimeout(emojiTimeout)
            clearTimeout(fadeOutTimeout)
        }
    }, [])

    return (
        <a
            href="/"
            className="font-bold text-2xl z-[250] hover:text-[#B8CFCE] hover:cursor-pointer transition-colors"
        >
            <DecryptedText
                text="Hi, I am Jean-Philipp"
                speed={50}
                maxIterations={1}
                revealDirection="start"
                sequential={true}
                animateOn="view"
            />
            <span
                    className={`waving-hand inline-block ml-1 transition-opacity duration-1000 ${
                        showEmoji && !fadeOutIntro ? "opacity-100" : "opacity-0"
                    }`}
                >
                    👋
                </span>
        </a>
    )
}

export default HeroNameWithEmoji