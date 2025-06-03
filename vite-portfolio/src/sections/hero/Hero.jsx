import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import HackerRoom from "../../components/HackerRoom.jsx"
import { OrbitControls} from '@react-three/drei'
import { Suspense } from "react"
import CanvasLoader from "../../components/CanvasLoader.jsx"
import { Leva, useControls } from "leva"
import { useMediaQuery } from "react-responsive"
import "../../custom-styles/animated-header-tag.css"

function Hero() {
    // const c = useControls(
    //     'HackerRoom',
    //     {
    //         positionX: {
    //             value: 2.5,
    //             min: -10,
    //             max: 10
    //         },
    //         positionY: {
    //             value: 2.5,
    //             min: -10,
    //             max: 10
    //         },
    //         positionZ: {
    //             value: 2.5,
    //             min: -10,
    //             max: 10
    //         },
    //         rotationX: {
    //             value: 2.5,
    //             min: -10,
    //             max: 10
    //         },
    //         rotationY: {
    //             value: 2.5,
    //             min: -10,
    //             max: 10
    //         },
    //         rotationZ: {
    //             value: 2.5,
    //             min: -10,
    //             max: 10
    //         },
    //         scale: {
    //             value: 2.5,
    //             min: -10,
    //             max: 10
    //         },
            
    //     }
    // )

    // go back later and adjust these parts later on
    // need to have reliable sizing

    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isLaptop = useMediaQuery({ minWidth: 769, maxWidth: 1280 })
    const isMonitor = useMediaQuery({ minWidth: 1281, maxWidth: 1600 })
    const isXLMonitor = useMediaQuery({ minWidth: 1601 })

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


    return (
        <section className="min-h-screen w-full flex flex-col relative transform-gpu"> 
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hi, I am Jean-Philipp <span className="waving-hand">👋</span></p>
                {/* <p className="hero_tag text-gray_gradient">I Deliver Value w/ Data & Technology</p> */}
                <div className="hero-heading-wrapper z-20">
                    <h1 className="hero-heading" data-heading="I Create Value w/ Data & Technology">I Create Value w/ Data & Technology</h1>
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
                            minDistance={10}  // Minimum distance from the target
                            maxDistance={50}  // Optional: prevent zooming too far out
                        />
                        
                        <HackerRoom
                            // scale={[c.scale, c.scale, c.scale]}
                            // position={[c.positionX, c.positionY, c.positionZ]}
                            // rotation={[c.rotationX, c.rotationY, c.rotationZ]}
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