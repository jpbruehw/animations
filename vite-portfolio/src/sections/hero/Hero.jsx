import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import HackerRoom from "../../components/HackerRoom.jsx"
import { OrbitControls} from '@react-three/drei'
import { Suspense } from "react"
import CanvasLoader from "../../components/CanvasLoader.jsx"
import { Leva, useControls } from "leva"

function Hero() {
    const c = useControls(
        'HackerRoom',
        {
            positionX: {
                value: 2.5,
                min: -10,
                max: 10
            },
            positionY: {
                value: 2.5,
                min: -10,
                max: 10
            },
            positionZ: {
                value: 2.5,
                min: -10,
                max: 10
            }
        }
    )

    return (
        <section className="min-h-screen w-full flex flex-col relative transform-gpu"> 
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hi, I am Jean-Philipp <span className="waving-hand">👋</span></p>
                <p className="hero_tag text-gray_gradient">I Deliver Value w/ Data & Technology</p>
            </div>
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
                            scale={[0.5, 0.5, 0.5]}
                            position={[0, -2, 0]}
                            rotation={[0, -Math.PI / 2, 0]}
                            debug={true} // turn to false to hide helpers
                        />
                    </Suspense>
                </Canvas>
                
            </div>
            <Leva />
        </section>
    )
}

export default Hero