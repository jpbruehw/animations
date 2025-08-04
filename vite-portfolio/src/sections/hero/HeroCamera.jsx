import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { easing } from "maath"

const HeroCamera = ({ children, isMobile }) => {
    const groupRef = useRef()
    const angleRef = useRef(0)

    const rotationSpeedRef = useRef(5)
    const minSpeed = 1
    const decayRate = 1

    useFrame((state, delta) => {
        if (isMobile) {
            // gradually reduce speed until it hits minSpeed
            if (rotationSpeedRef.current > minSpeed) {
                rotationSpeedRef.current -= decayRate * delta
                if (rotationSpeedRef.current < minSpeed) {
                    rotationSpeedRef.current = minSpeed
                }
            }

            // update angle with current speed
            angleRef.current += delta * rotationSpeedRef.current

            const radius = 20
            const x = Math.sin(angleRef.current) * radius
            const z = Math.cos(angleRef.current) * radius

            easing.damp3(state.camera.position, [x, 0, z], 0.25, delta)
            state.camera.lookAt(0, 0, 0)
        } else {
            easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta)
            easing.dampE(groupRef.current.rotation, [-state.pointer.y / 5, state.pointer.x / 2, 0], 0.25, delta)
        }
    })

    return (
        <group ref={groupRef}>{children}</group>
    )
}

export default HeroCamera
