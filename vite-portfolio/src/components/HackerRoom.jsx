import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function HackerRoom({ scale, position, rotation, debug = true }) {
    const group = useRef()
    const { scene } = useGLTF('/models/desktop/scene.gltf')

    return (
        <group ref={group} scale={scale} position={position} rotation={rotation}>
            <primitive object={scene} />
            {debug && <axesHelper args={[5]} />}
            {debug && <gridHelper args={[10, 10]} />}
        </group>
    )
}