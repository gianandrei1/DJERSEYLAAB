import { useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface Shirt3DModelProps {
  modelPath: string;
}

function Shirt3DModel({ modelPath }: Shirt3DModelProps) {
  const meshRef = useRef<THREE.Group>(null);
  const gltf = useGLTF(modelPath); // ✅ Always call hooks at top level
  const scene = gltf.scene;

  useEffect(() => {
    console.log("GLB loaded successfully:", {
      path: modelPath,
      scene: gltf.scene,
      animations: gltf.animations,
      asset: gltf.asset,
    });
  }, [modelPath, gltf]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  // Optional: tap/click handler
  const handleClick = () => {
    console.log("Model tapped or clicked!");
    // Add any interaction logic here
  };

  if (!scene) {
    console.warn("Rendering fallback red cube due to GLB loading failure");
    return (
      <mesh onClick={handleClick}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="red" />
      </mesh>
    );
  }

  return (
    <primitive
      object={scene}
      ref={meshRef}
      scale={[1.2, 1.2, 1.2]}
      position={[0, -1.3, 0]}
      onClick={handleClick} // ✅ for touch/click interaction
    />
  );
}

interface Shirt3DProps {
  textureUrl: string;
}

const Shirt3D = ({ textureUrl }: Shirt3DProps) => {
  const getShirtConfig = (url: string) => {
    const lowerUrl = url.toLowerCase();

    if (lowerUrl.includes("abudark")) {
      return { modelPath: "/abu3D.glb" };
    }
    if (lowerUrl.includes("abuwhite")) {
      return { modelPath: "/abuwhite3D.glb" };
    }
    if (lowerUrl.includes("hexagon")) {
      return { modelPath: "/hexagon3D.glb" };
    }
    if (lowerUrl.includes("code")) {
      return { modelPath: "/code3D.glb" };
    }
    if (lowerUrl.includes("neural")) {
      return { modelPath: "/neural3D.glb" };
    }
    if (lowerUrl.includes("pixel")) {
      return { modelPath: "/pixel3D.glb" };
    }

    return { modelPath: "/abu3D.glb" }; // fallback
  };

  const { modelPath } = getShirtConfig(textureUrl);

  useEffect(() => {
    console.log("Rendering shirt with model:", modelPath);
  }, [textureUrl, modelPath]);

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{
          background: "linear-gradient(135deg, #f8fafc, #f1f5f9)",
          touchAction: "none",
        }} // ✅ mobile gesture fix
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
        <directionalLight position={[-5, 5, 5]} intensity={0.4} />

        <Suspense
          fallback={
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="red" />
            </mesh>
          }
        >
          <Shirt3DModel modelPath={modelPath} />
        </Suspense>

        <OrbitControls
          enableZoom
          enablePan
          enableRotate
          minDistance={3}
          maxDistance={8}
          rotateSpeed={0.5} // ✅ smoother for touch
          zoomSpeed={0.5}
          enableDamping // ✅ smoothing motion
          dampingFactor={0.1}
        />
      </Canvas>
    </div>
  );
};

export default Shirt3D;
