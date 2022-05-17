import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PresentationControls } from '@react-three/drei';
import Round from './Round'

export default function App() {
   return (
    <Canvas
        camera={{ position: [100, 100, 30], fov: 100 }}
        style={{
        backgroundColor: 'rgba(0, 0, 0, 0)',
        width: '100%',
        height: '100%',
        }}
    >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.5} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
        <PresentationControls
            global={true} // Spin globally or by dragging the model
            cursor={false} // Whether to toggle cursor style on drag
            snap={true} // Snap-back to center (can also be a spring config)
            speed={1} // Speed factor
            zoom={1} // Zoom factor when half the polar-max is reached
            rotation={[0, 0, 0]} // Default rotation
            polar={[100, Math.PI / 2]} // Vertical limits
            azimuth={[-Infinity, Infinity]} // Horizontal limits
            config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
        >
                <Round position={[0, 0, 0]} />
        </PresentationControls>
        </Suspense>
        {/* <OrbitControls /> */}
    </Canvas>
   );
}