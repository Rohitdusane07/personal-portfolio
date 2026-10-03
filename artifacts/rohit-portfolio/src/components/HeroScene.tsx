import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';

type Rotation = { rotation: { x: number; y: number; z: number } };
const damp = (from: number, to: number, speed: number, delta: number) => from + (to - from) * (1 - Math.exp(-speed * delta));

function WorkstationModel() {
  const rig = useRef<Rotation | null>(null);
  const glow = useRef<Rotation | null>(null);
  const dots = useMemo(() => Array.from({ length: 24 }, (_, i) => ({
    x: Math.sin(i * 4.12) * (0.65 + (i % 5) * 0.13),
    y: Math.cos(i * 2.37) * (0.5 + (i % 4) * 0.1),
    z: Math.sin(i * 6.3) * 0.48,
  })), []);

  useFrame((state, delta) => {
    if (!rig.current) return;
    rig.current.rotation.y = damp(rig.current.rotation.y, state.pointer.x * 0.22, 3, delta);
    rig.current.rotation.x = damp(rig.current.rotation.x, -state.pointer.y * 0.12, 3, delta);
    if (glow.current) glow.current.rotation.z += delta * 0.08;
  });

  return (
    <group ref={rig} position={[0, -0.08, 0]}>
      <mesh position={[0, -0.77, 0]} receiveShadow><boxGeometry args={[3.7, 0.16, 1.55]} /><meshStandardMaterial color="#131d32" metalness={0.72} roughness={0.34} /></mesh>
      <mesh position={[0, -0.66, -0.02]}><boxGeometry args={[3.5, 0.025, 1.4]} /><meshStandardMaterial color="#24304a" metalness={0.6} roughness={0.4} /></mesh>
      <mesh position={[0, -0.58, 0.5]}><boxGeometry args={[1.25, 0.012, 0.28]} /><meshStandardMaterial color="#3d547b" metalness={0.5} roughness={0.3} /></mesh>
      <mesh position={[0, -0.05, -0.35]}><boxGeometry args={[0.16, 1.08, 0.14]} /><meshStandardMaterial color="#26344c" metalness={0.7} roughness={0.3} /></mesh>
      <mesh position={[0, -0.59, -0.27]}><boxGeometry args={[0.95, 0.08, 0.42]} /><meshStandardMaterial color="#202c42" metalness={0.65} roughness={0.28} /></mesh>
      <mesh position={[0, 0.71, -0.39]} castShadow><boxGeometry args={[2.55, 1.55, 0.16]} /><meshStandardMaterial color="#263550" metalness={0.68} roughness={0.28} /></mesh>
      <mesh position={[0, 0.71, -0.295]}><planeGeometry args={[2.36, 1.35]} /><meshBasicMaterial color="#091326" /></mesh>
      <mesh position={[0, 0.71, -0.285]}><planeGeometry args={[2.26, 1.25]} /><meshBasicMaterial color="#0b1730" /></mesh>
      {[-0.44, -0.22, 0, 0.22, 0.44].map((y, row) => (
        <group key={y}>
          <mesh position={[-0.56 + (row % 2) * 0.1, 0.71 + y, -0.274]}><planeGeometry args={[0.42 + (row % 3) * 0.14, 0.018]} /><meshBasicMaterial color={row % 2 ? '#8c75ed' : '#57a8ff'} transparent opacity={0.82} /></mesh>
          <mesh position={[0.28, 0.71 + y, -0.274]}><planeGeometry args={[0.72 - (row % 2) * 0.16, 0.018]} /><meshBasicMaterial color={row % 2 ? '#60d8c5' : '#577291'} transparent opacity={0.72} /></mesh>
        </group>
      ))}
      <mesh ref={glow} position={[0, 0.7, 0.12]}><torusGeometry args={[1.88, 0.006, 4, 100]} /><meshBasicMaterial color="#508dff" transparent opacity={0.37} /></mesh>
      {dots.map((dot, i) => <mesh key={i} position={[dot.x * 1.25, dot.y + 0.32, dot.z - 0.1]}><sphereGeometry args={[i % 5 === 0 ? 0.032 : 0.017, 8, 8]} /><meshBasicMaterial color={i % 4 === 0 ? '#bd91ff' : '#6aa8ff'} transparent opacity={0.72} /></mesh>)}
      <pointLight position={[0, 1.2, 1.2]} color="#397dff" intensity={3} distance={5} />
      <pointLight position={[-2, 0.4, -1]} color="#8c5bdb" intensity={2} distance={4} />
    </group>
  );
}

export default function HeroScene() {
  return <div className="r3f-hero" aria-hidden="true"><Canvas dpr={[1, 1.5]} camera={{ position: [4.7, 2.6, 6.2], fov: 34 }} gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}><ambientLight intensity={1.05} /><directionalLight position={[3, 5, 4]} intensity={2.2} color="#9abaff" /><WorkstationModel /></Canvas></div>;
}