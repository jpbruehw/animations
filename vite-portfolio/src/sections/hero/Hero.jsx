import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import HackerRoom from "../../components/HackerRoom.jsx"
import { OrbitControls} from '@react-three/drei'
import { Suspense } from "react"
import CanvasLoader from "../../components/CanvasLoader.jsx"
import { useMediaQuery } from "react-responsive"
import "../../custom-styles/animated-header-tag.css"
import { useState, useEffect } from "react"
import HeroCamera from "./HeroCamera.jsx"
// import HeroButton from "../../components/HeroButton.jsx"

function Hero() {

    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isLaptop = useMediaQuery({ minWidth: 769, maxWidth: 1280 })
    const isMonitor = useMediaQuery({ minWidth: 1281, maxWidth: 1600 })
    const isXLMonitor = useMediaQuery({ minWidth: 1601 })

    const [active, setActive] = useState(true)

    let scale = 0.4
    let position = [1.5, 0, 2.5]
    //let rotation = [1.65, 5, 5]

    if (isMobile) {
        scale = 0.45
        position = [0.8, -1, 1.5]
    } else if (isLaptop) {
        scale = 0.4
        position = [1.2, -0.5, 2.8]
    } else if (isMonitor) {
        scale = 0.5
        position = [1.4, -0.5, 2.5]
    } else if (isXLMonitor) {
        scale = 1
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
            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full" shadows>
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault />
                        <ambientLight intensity={1.5} />
                        <directionalLight castShadow position={[20, 50, 10]} intensity={3.5} />
                        
                        {/* {!isMobile &&
                            <OrbitControls
                                enableZoom={true}
                                minDistance={10}
                                maxDistance={70}
                            />} */}
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                scale={scale}
                                position={position}
                                rotation={[0.265, 0, 0]}
                                // rotation={rotation}
                                debug={false}
                            />
                        </HeroCamera>
                    </Suspense>
                </Canvas>
            </div>
            {/* <div className="absolute bottom-7 left-0 right-0 w-full z-10">
                <a className="w-fit">
                    <HeroButton name="Let's connect" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div> */}
        </section>
    )
}

export default Hero