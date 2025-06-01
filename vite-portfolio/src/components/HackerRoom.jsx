import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
// import { useFrame } from '@react-three/fiber'

export default function HackerRoom({ scale = [1, 1, 1], position = [0, 0, 0], rotation = [0, 0, 0], debug = true }) {
    const group = useRef()
    const { scene } = useGLTF('/models/desktop/scene.gltf')

  // Optional: subtle animation
  // useFrame(() => {
  //   if (group.current) {
  //     group.current.rotation.y += 0.0009
  //   }
  // })

    return (
        <group ref={group} scale={scale} position={position} rotation={rotation}>
            <primitive object={scene} />
            {debug && <axesHelper args={[5]} />}
            {debug && <gridHelper args={[10, 10]} />}
        </group>
    )
}

