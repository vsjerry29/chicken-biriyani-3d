"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Float, OrbitControls, Sparkles } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

function Rice({ count = 1900 }: { count?: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const colors = useMemo(() => [new THREE.Color("#ffedc0"), new THREE.Color("#f4d18a"), new THREE.Color("#ffe7a9"), new THREE.Color("#e9b96e")], []);
  useEffect(() => {
    if (!mesh.current) return;
    for (let i = 0; i < count; i++) {
      const r = Math.sqrt(Math.random()) * 1.22;
      const theta = Math.random() * Math.PI * 2;
      dummy.position.set(Math.cos(theta) * r, 0.53 + Math.random() * 0.045, Math.sin(theta) * r);
      dummy.rotation.set((Math.random() - .5) * .4, Math.random() * Math.PI, (Math.random() - .5) * .4);
      const s = .65 + Math.random() * .65;
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
      mesh.current.setColorAt(i, colors[Math.floor(Math.random() * colors.length)]);
    }
    mesh.current.instanceMatrix.needsUpdate = true;
  }, [count, dummy, colors]);
  return <instancedMesh ref={mesh} args={[undefined, undefined, count]}><capsuleGeometry args={[.012, .09, 3, 6]} /><meshStandardMaterial color="#ffdfa0" roughness={.85} /></instancedMesh>;
}

function ChickenPiece({ position, scale, rotation = 0 }: { position: [number, number, number]; scale: [number, number, number]; rotation?: number }) {
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <mesh scale={scale} castShadow>
        <sphereGeometry args={[1, 32, 24]} />
        <meshPhysicalMaterial color="#9c421d" roughness={.42} clearcoat={.45} clearcoatRoughness={.3} />
      </mesh>
      <mesh position={[scale[0] * .12, scale[1] * .55, scale[2] * .25]} scale={[scale[0] * .48, scale[1] * .2, scale[2] * .3]}>
        <sphereGeometry args={[1, 20, 16]} />
        <meshStandardMaterial color="#d38a3f" roughness={.5} />
      </mesh>
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={i} position={[Math.cos(i * 2.4) * scale[0] * .6, scale[1] * (.25 + (i % 3) * .2), Math.sin(i * 2.4) * scale[2] * .65]} scale={[.025, .012, .018]}>
          <sphereGeometry args={[1, 8, 6]} /><meshStandardMaterial color="#32150b" roughness={.9} />
        </mesh>
      ))}
    </group>
  );
}

function Drumstick() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = Math.sin(t * .35) * .15;
    const lift = Math.pow(Math.max(0, Math.sin(t * 0.72 - 0.7)), 2);
    ref.current.position.y = 1.02 + lift * 0.22 + Math.sin(t * 1.1) * 0.018;
    ref.current.rotation.z = -0.45 + Math.sin(t * 0.72) * 0.06;
  });
  return <group ref={ref} position={[.05, 1, .15]} rotation={[0, 0, -.45]}>
    <mesh position={[0, 0, 0]} scale={[.27, .43, .25]} castShadow><sphereGeometry args={[1, 36, 28]} /><meshPhysicalMaterial color="#9a3b18" roughness={.4} clearcoat={.5} /></mesh>
    <mesh position={[.04, .47, 0]} rotation={[0, 0, -.12]}><cylinderGeometry args={[.035, .05, .28, 14]} /><meshStandardMaterial color="#f0dfc3" roughness={.65} /></mesh>
    <mesh position={[.055, .62, 0]} scale={[1, .8, .8]}><sphereGeometry args={[.07, 14, 12]} /><meshStandardMaterial color="#f0dfc3" roughness={.65} /></mesh>
  </group>;
}

function BowlModel() {
  const group = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * .07;
    group.current.position.y = Math.sin(state.clock.elapsedTime * .7) * .045;
  });
  const bowlPoints = useMemo(() => [
    new THREE.Vector2(0, .12), new THREE.Vector2(.55, .12), new THREE.Vector2(1.1, .22),
    new THREE.Vector2(1.48, .52), new THREE.Vector2(1.62, .86), new THREE.Vector2(1.61, .94),
    new THREE.Vector2(1.52, .94), new THREE.Vector2(1.48, .78), new THREE.Vector2(1.28, .51),
    new THREE.Vector2(.88, .34), new THREE.Vector2(0, .31)
  ], []);
  return <group ref={group} position={[0, -.35, 0]}>
    <mesh position={[0, -.52, 0]} castShadow receiveShadow>
      <latheGeometry args={[bowlPoints, 96]} />
      <meshPhysicalMaterial color="#4b2017" roughness={.26} metalness={.22} clearcoat={.8} />
    </mesh>
    <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, .405, 0]}><torusGeometry args={[1.565, .035, 12, 100]} /><meshStandardMaterial color="#eeb553" metalness={.8} roughness={.22} /></mesh>
    <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -.45, 0]}><torusGeometry args={[.57, .055, 10, 64]} /><meshStandardMaterial color="#9a6232" metalness={.55} roughness={.32} /></mesh>
    <Rice />
    <ChickenPiece position={[-.65, .47, .12]} scale={[.3, .24, .36]} rotation={-.5} />
    <ChickenPiece position={[.22, .48, -.36]} scale={[.31, .22, .34]} rotation={.6} />
    <ChickenPiece position={[.7, .47, .23]} scale={[.25, .21, .31]} rotation={-.3} />
    <ChickenPiece position={[-.1, .47, .62]} scale={[.24, .19, .29]} rotation={.7} />
    {Array.from({ length: 34 }).map((_, i) => <mesh key={`herb-${i}`} position={[Math.cos(i * 2.399) * ((i % 11) / 10) * 1.25, .56 + (i % 4) * .006, Math.sin(i * 2.399) * ((i % 11) / 10) * 1.25]} rotation={[-Math.PI / 2, Math.random(), i * .4]} scale={[.8, .8, .8]}><circleGeometry args={[.065, 5]} /><meshStandardMaterial color={i % 2 ? "#426c32" : "#5d7838"} side={THREE.DoubleSide} /></mesh>)}
    {Array.from({ length: 8 }).map((_, i) => <mesh key={`onion-${i}`} position={[Math.cos(i * 2.1) * .8, .56, Math.sin(i * 2.1) * .8]} rotation={[i * .5, i, .2]}><torusGeometry args={[.04, .008, 5, 12]} /><meshStandardMaterial color="#a75b35" roughness={.8} /></mesh>)}
    <Drumstick />
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.45, 0]}><circleGeometry args={[2.7, 96]} /><meshBasicMaterial color="#9e401a" transparent opacity={.12} /></mesh>
  </group>;
}

function SceneLights() {
  return <>
    <hemisphereLight args={["#ffd9a1", "#20130b", 2.1]} />
    <directionalLight position={[-4, 7, 5]} intensity={4.1} color="#ffd39a" castShadow />
    <pointLight position={[4, 2, 1]} intensity={28} distance={14} color="#ff5c24" />
    <pointLight position={[-4, 1, -3]} intensity={14} distance={12} color="#ffd58c" />
  </>;
}

export function ThreeScene() {
  return (
    <div className="three-stage" aria-label="Interactive 3D biryani bowl">
      <Canvas dpr={[1, 1.6]} camera={{ position: [0.45, 2.25, 8.4], fov: 37 }} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }} shadows>
        <color attach="background" args={["#100f0c"]} />
        <fog attach="fog" args={["#100f0c", 8, 19]} />
        <SceneLights />
        <Suspense fallback={null}>
          <group position={[1.25, -0.02, 0]} scale={0.92}>
            <Float speed={1.35} rotationIntensity={.055} floatIntensity={.09}>
              <BowlModel />
            </Float>
          </group>
          <Sparkles count={95} scale={[5.5, 4, 4]} size={2.1} speed={.25} color="#f6b95e" opacity={.7} />
          <ContactShadows position={[0, -1.72, 0]} opacity={.38} scale={7} blur={2.5} far={3} />
        </Suspense>
        <OrbitControls enablePan={false} minDistance={5.5} maxDistance={10.5} minPolarAngle={.55} maxPolarAngle={1.7} />
      </Canvas>
    </div>
  );
}
