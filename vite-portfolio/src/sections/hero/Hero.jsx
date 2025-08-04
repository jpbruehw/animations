import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import HackerRoom from "../../components/HackerRoom.jsx"
import { Suspense } from "react"
import CanvasLoader from "../../components/CanvasLoader.jsx"
import { useMediaQuery } from "react-responsive"
import "../../custom-styles/animated-header-tag.css"
import { useState, useEffect } from "react"
import HeroCamera from "./HeroCamera.jsx"

import { useIsTallMobile } from "../../hooks/useIsTallMobile.js"

function Hero() {

    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isLaptop = useMediaQuery({ minWidth: 769, maxWidth: 1280 })
    const isMonitor = useMediaQuery({ minWidth: 1281, maxWidth: 1600 })
    const isXLMonitor = useMediaQuery({ minWidth: 1601 })

    const [active, setActive] = useState(true)

    const isTallMobile = useIsTallMobile()

    // default scale
    let scale = 0.4
    let position = [1.5, 0, 2.5]
    // rotaion should be diff on small screens
    let nonMobileRotation = [0.265, 0, 0]

    if (isMobile) {
        scale = 0.45
        position = [0.8, -1, 1.5]
    } else if (isLaptop) {
        scale = 1
        position = [1.2, -4, 2.8]
        
    } else if (isMonitor) {
        scale = 1.25
        position = [1.4, -1.5, 2.5]
    } else if (isXLMonitor) {
        scale = 1.15
        position = [1.5, -0.5, 2.3]
    }

    useEffect(() => {
        const introTimeout = setTimeout(() => {
            setActive(false)
        }, 3000);
        return () => clearTimeout(introTimeout);
    }, []);

    return (
        <section className="min-h-screen w-full flex flex-col relative transform-gpu"> 
            <div className="w-full mx-auto flex flex-col sm:mt-30 mt-20 c-space gap-3">
                <div className="hero-heading-wrapper z-20">
                    <h1 className={`hero-heading ${active ? "active": ""} ${isMobile && "ml-2"}`} data-heading="I Create Value w/ Data & Technology">I Create Value w/ Data & Technology</h1>
                </div>
            </div>
            {/* <Leva /> */}
            <div className={`w-full h-full absolute inset-0 mx-auto ${(isTallMobile && isMobile) && "-mt-20"}`}>
                <Canvas className={`w-full h-full ${isMonitor && "mt-20"}`} shadows>
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault />
                        <ambientLight intensity={1.5} />
                        <directionalLight castShadow position={[20, 50, 10]} intensity={3.5} />
                    
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                scale={scale}
                                position={position}
                                rotation={isMobile ? [0.005, 0, 0] : nonMobileRotation}
                                debug={false}
                            />
                        </HeroCamera>
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}

export default Hero