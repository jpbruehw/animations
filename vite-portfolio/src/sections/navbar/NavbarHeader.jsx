import { useEffect, useState } from "react"
import DecryptedText from "../../blocks/TextAnimations/DecryptedText/DecryptedText";
import "../../custom-styles/name-slide.css"

function HeroNameWithEmoji() {
    const [fadeOutIntro, setFadeOutIntro] = useState(false)
    const [showEmoji, setShowEmoji] = useState(false)
    const [showSoloName, setShowSoloName] = useState(false)

    useEffect(() => {
        const emojiTimeout = setTimeout(() => setShowEmoji(true), 2000)
        
        const fadeOutTimeout = setTimeout(() => {
            setFadeOutIntro(true)
          setTimeout(() => setShowSoloName(true), 1000) // wait for fade out
        }, 20000)
    
        return () => {
            clearTimeout(emojiTimeout)
            clearTimeout(fadeOutTimeout)
            }
    }, [])

    return (
        <div className="relative w-full text-center">
            {!showSoloName ? 
                <div
                    className={`transition-opacity duration-1000 ${
                        fadeOutIntro ? "opacity-0" : "opacity-100"
                    }`}
                >
                    <div className="font-bold text-2xl z-[250]">
                        <DecryptedText
                            text="Hi, I am Jean-Philipp"
                            speed={50}
                    //   maxIterations={1}
                            revealDirection="start"
                            sequential={true}
                            animateOn="view"
                    //   characters="ABCD1234!?"
                        />
                        <span
                        className={`waving-hand inline-block ml-1 transition-opacity duration-1000 ${showEmoji && !fadeOutIntro ? "opacity-100" : "opacity-0"}`}
                        >
                            👋
                        </span>
                    </div>
                </div>
                :
                <div className="font-bold text-2xl z-[250] slide-in-text w-full text-center text-[#333446]">
                    <p>Jean-Philipp</p>
                </div>
            }
        </div>
    )
}

export default HeroNameWithEmoji