import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';

type Vector3 = [number, number, number];
type Rotation = { rotation: { x: number; y: number; z: number } };
const damp = (from: number, to: number, speed: number, delta: number) => from + (to - from) * (1 - Math.exp(-speed * delta));

function NeuralForm() {
  const group = useRef<Rotation | null>(null);
  const { positions, edges } = useMemo(() => {
    const points: Vector3[] = [];
    const count = 78;
    for (let i = 0; i < count; i++) {
      const u = (i + 0.5) / count;
      const phi = Math.acos(1 - 2 * u);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const organic = 0.78 + 0.12 * Math.sin(theta * 2.1) * Math.cos(phi * 3.2);
      const x = Math.cos(theta) * Math.sin(phi) * 1.05 * organic;
      const y = Math.cos(phi) * 0.78 * organic;
      const z = Math.sin(theta) * Math.sin(phi) * 0.78 * organic;
      const groove = 1 - 0.13 * Math.exp(-x * x * 22) * (0.7 + Math.abs(y) * 0.3);
      points.push([x * groove, y, z * groove]);
    }
    const links: Array<[Vector3, Vector3]> = [];
    points.forEach((point, i) => {
      const near = points.map((candidate, j) => ({ j, d: Math.hypot(point[0] - candidate[0], point[1] - candidate[1], point[2] - candidate[2]) })).filter(item => item.j > i && item.d < 0.39).slice(0, 3);
      near.forEach(item => links.push([point, points[item.j]]));
    });
    return { positions: points, edges: links };
  }, []);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y = damp(group.current.rotation.y, state.pointer.x * 0.5 + 0.1, 2.5, delta);
    group.current.rotation.x = damp(group.current.rotation.x, state.pointer.y * 0.3, 2.5, delta);
    group.current.rotation.z += delta * 0.025;
  });

  return (
    <group ref={group}>
      {edges.map(([a, b], i) => <NetworkLine key={i} a={a} b={b} color={i % 6 === 0 ? '#bb8dff' : '#589fff'} opacity={i % 6 === 0 ? 0.47 : 0.22} />)}
      {positions.map((point, i) => <mesh key={i} position={point}><sphereGeometry args={[i % 9 === 0 ? 0.035 : 0.019, 8, 8]} /><meshBasicMaterial color={i % 8 === 0 ? '#c09bff' : '#73b3ff'} transparent opacity={0.9} /></mesh>)}
      <mesh><sphereGeometry args={[0.24, 16, 16]} /><meshBasicMaterial color="#467aff" transparent opacity={0.13} /></mesh>
      <pointLight position={[0, 0, 1]} color="#688bff" intensity={1.8} distance={3} />
    </group>
  );
}

function NetworkLine({ a, b, color, opacity }: { a: Vector3; b: Vector3; color: string; opacity: number }) {
  const attribute = useMemo(() => new Float32Array([...a, ...b]), [a, b]);
  return <line><bufferGeometry><bufferAttribute attach="attributes-position" args={[attribute, 3]} /></bufferGeometry><lineBasicMaterial color={color} transparent opacity={opacity} /></line>;
}

export default function BrainScene() {
  return <div className="r3f-brain" aria-hidden="true"><Canvas dpr={[1, 1.4]} camera={{ position: [0, 0, 3.7], fov: 44 }} gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}><ambientLight intensity={0.8} /><NeuralForm /></Canvas></div>;
}