import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import HackerRoom from "../../components/HackerRoom.jsx"
import { OrbitControls} from '@react-three/drei'
import { Suspense } from "react"
import CanvasLoader from "../../components/CanvasLoader.jsx"
//import { Leva, useControls } from "leva"
import { useMediaQuery } from "react-responsive"
import "../../custom-styles/animated-header-tag.css"
import { useState, useEffect } from "react"

function Hero() {

    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isLaptop = useMediaQuery({ minWidth: 769, maxWidth: 1280 })
    const isMonitor = useMediaQuery({ minWidth: 1281, maxWidth: 1600 })
    const isXLMonitor = useMediaQuery({ minWidth: 1601 })

    const [active, setActive] = useState(true)

    let scale = 0.4
    let position = [1.2, 0, 2.5]
    let rotation = [1.65, 3.1, 3.14]

    if (isMobile) {
        scale = 0.45
        position = [0.8, -1, 2.8]
    } else if (isLaptop) {
        scale = 0.4
        position = [1.2, -0.5, 2.8]
    } else if (isMonitor) {
        scale = 0.5
        position = [1.4, -0.5, 2.5]
    } else if (isXLMonitor) {
        scale = 0.5
        position = [1.5, -0.3, 2.3]
    }

    useEffect(() => {
        const firstTimeout = setTimeout(() => {
            setActive(false); // 1.5s
            const secondTimeout = setTimeout(() => {
                setActive(true); 
                const thirdTimeout = setTimeout(() => {
                    setActive(false);
                    const fourthTimeout = setTimeout(() => {
                        setActive(true)
                        const fifthTimeout = setTimeout(() => {
                            setActive(false)
                        }, 350)
                        return () => clearTimeout(fifthTimeout)
                    }, 350)
                    return () => clearTimeout(fourthTimeout)
                }, 350);
                return () => clearTimeout(thirdTimeout);
            }, 350);
            return () => clearTimeout(secondTimeout);
        }, 1000);
        return () => clearTimeout(firstTimeout);
    }, []);

    return (
        <section className="min-h-screen w-full flex flex-col relative transform-gpu"> 
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hi, I am Jean-Philipp <span className="waving-hand">👋</span></p>
                {/* <p className="hero_tag text-gray_gradient">I Deliver Value w/ Data & Technology</p> */}
                <div className="hero-heading-wrapper z-20">
                    <h1 className={`hero-heading ${active ? "active": ""} ${isMobile && "ml-2"}`} data-heading="I Create Value w/ Data & Technology">I Create Value w/ Data & Technology</h1>
                </div>
            </div>
            {/* <Leva /> */}
            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault />
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                        <OrbitControls
                            enableZoom={true}
                            minDistance={10}
                            maxDistance={50}
                        />
                        
                        <HackerRoom
                            scale={scale}
                            position={position}
                            rotation={rotation}
                            debug={true}
                        />

                    </Suspense>
                </Canvas>
                
            </div>
        </section>
    )
}

export default Hero