import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { Sphere } from "drei";

import "./App.css";

// function Sphere(props) {
//   // This reference will give us direct access to the mesh
//   const mesh = useRef();
//   // Set up state for the hovered and active state
//   const [hovered, setHover] = useState(false);
//   const [active, setActive] = useState(false);

//   useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

//   return (
//     <mesh
//       {...props}
//       ref={mesh}
//       scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
//       onClick={(e) => setActive(!active)}
//       onPointerOver={(e) => setHover(true)}
//       onPointerOut={(e) => setHover(false)}
//     >
//       <sphereBufferGeometry attach="geometry" args={[1, 30, 30]} />
//       <meshStandardMaterial
//         attach="material"
//         color={hovered ? "hotpink" : "teal"}
//       />
//     </mesh>
//   );
// }

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? "hotpink" : "orange"}
      />
    </mesh>
  );
}

const App = () => {
  return (
    <Canvas colorManagement>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[1, 2, 0]} />
      <Box position={[-1, 1, 0]} />
      <Box position={[1.2, 0, 0]} />
      <Sphere>
        <meshBasicMaterial attach="material" color="hotpink" />
      </Sphere>
    </Canvas>
  );
};

export default App;
