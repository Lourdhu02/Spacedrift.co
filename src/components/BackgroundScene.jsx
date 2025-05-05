import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'

const BackgroundScene = () => {
  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
      }}
      camera={{ position: [0, 0, 5], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1.5} />

      <Sphere args={[1.5, 64, 64]} scale={1}>
        <MeshDistortMaterial
          color="#6c2af9"
          distort={0.5}
          speed={2}
          roughness={0}
        />
      </Sphere>

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
    </Canvas>
  )
}

export default BackgroundScene
