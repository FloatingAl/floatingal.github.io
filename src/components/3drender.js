import React from 'react'
import { useState, useRef} from 'react';
import { motion } from "framer-motion"
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';


function Box(props) {
    const ref = useRef()
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    useFrame((state, delta) => (ref.current.rotation.x += 0))
  return(
    <mesh
      {...props}
      ref={ref}
      scale={2.75}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>

)}

function Sphere(props) {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame((state, delta) => (ref.current.rotation.x += delta))
return(
  <mesh
    {...props}
    ref={ref}
    scale={clicked ? 1.5 : 1}
    onClick={(event) => click(!clicked)}
    onPointerOver={(event) => hover(true)}
    onPointerOut={(event) => hover(false)}>
    <sphereGeometry args={[1, 12, 8]} />
    <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
  </mesh>

)}

function Plane(props) {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame((state, delta) => (ref.current.rotation.x += delta))
return(
  <mesh
    {...props}
    ref={ref}
    scale={clicked ? 1.5 : 1}
    onClick={(event) => click(!clicked)}
    onPointerOver={(event) => hover(true)}
    onPointerOut={(event) => hover(false)}>
    <planeGeometry args={[5, 5]} />
    <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
  </mesh>
)}


function CanvasRender(props){
  return(
      <Canvas>
        <OrbitControls enableZoom={false}/>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 0, .5]} />
      </Canvas>
  )}

export default CanvasRender;
