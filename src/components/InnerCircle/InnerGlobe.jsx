import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import earthTexture from '../../assets/earthf.jpeg'

function InnerGlobe() {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Canvas camera={{ position: [2, 1, 1], fov: 55 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.1} />
        <Globe />
      </Canvas>
    </div>
  )
}

function Globe() {
    const globeRef = useRef()
    const texture = useLoader(THREE.TextureLoader, earthTexture)
  
    useFrame(() => {
      globeRef.current.rotation.y += 0.0025 // Faster and continuous
    })
  
    const radius = 1
    const nodes = useMemo(() => [
        { lat: 37.7749, lng: -122.4194, label: 'USA' },
        { lat: 28.6139, lng: 77.2090, label: 'India' },
        { lat: 51.5074, lng: -0.1278, label: 'UK' },
        { lat: 35.6895, lng: 139.6917, label: 'Japan' },
        { lat: -33.8688, lng: 151.2093, label: 'Australia' },
        { lat: 55.7558, lng: 37.6173, label: 'Russia' },
        { lat: 48.8566, lng: 2.3522, label: 'France' },
        { lat: -23.5505, lng: -46.6333, label: 'Brazil' },
        { lat: 40.7128, lng: -74.0060, label: 'New York' },
        { lat: 1.3521, lng: 103.8198, label: 'Singapore' },
      ], [])
      
    const convertLatLngToXYZ = (lat, lng, r) => {
      const phi = (90 - lat) * (Math.PI / 180)
      const theta = (lng + 180) * (Math.PI / 180)
      const x = -r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.cos(phi)
      const z = r * Math.sin(phi) * Math.sin(theta)
      return new THREE.Vector3(x, y, z)
    }
  
    return (
      <group ref={globeRef}>
        {/* Earth */}
        <mesh>
          <sphereGeometry args={[radius, 128, 128]} />
          <meshStandardMaterial map={texture} />
        </mesh>
  
        {/* Dots + Labels */}
        {nodes.map((point, i) => {
          const pos = convertLatLngToXYZ(point.lat, point.lng, radius + 0.01)
          return (
            <group key={i} position={pos}>
              <mesh>
                <sphereGeometry args={[0.02, 16, 16]} />
                <meshStandardMaterial color="#f9742a" />
              </mesh>
              <Text
                position={[0, 0.08, 0]}
                fontSize={0.05} // ⬆️
                color="white"
                anchorX="center"
                anchorY="bottom"
              >
                {point.label}
              </Text>
            </group>
          )
        })}
  
        {/* Arcs with higher visibility */}
        {nodes.map((a, i) =>
          nodes.map((b, j) => {
            if (i >= j) return null
            const start = convertLatLngToXYZ(a.lat, a.lng, radius + 0.01)
            const end = convertLatLngToXYZ(b.lat, b.lng, radius + 0.01)
            const mid = new THREE.Vector3()
              .addVectors(start, end)
              .multiplyScalar(0.5)
              .add(new THREE.Vector3(0, 0.5, 0)) // ⬆️ raised arc height
  
            const curve = new THREE.QuadraticBezierCurve3(start, mid, end)
            const points = curve.getPoints(30)
            const geometry = new THREE.BufferGeometry().setFromPoints(points)
            return (
              <line key={`${i}-${j}`} geometry={geometry}>
                <lineBasicMaterial color="#f9742a" />
              </line>
            )
          })
        )}
      </group>
    )
  }
  

export default InnerGlobe
