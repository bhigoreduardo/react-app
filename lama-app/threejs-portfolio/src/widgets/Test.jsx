import { styled } from "styled-components";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Text,
  RenderTexture,
  PerspectiveCamera,
} from "@react-three/drei";

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  scroll-snap-align: center;
`;

function Test() {
  return (
    <Container>
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />

        {/* CUBE */}
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          {/* <meshStandardMaterial color="red" /> */}
          <meshStandardMaterial>
            <RenderTexture attach="map">
              <PerspectiveCamera makeDefault position={[0, 0, 2]} />
              <color attach="background" args={["#dc9dcd"]} />
              <Text fontSize={1} color="#555">
                Hello
              </Text>
            </RenderTexture>
          </meshStandardMaterial>
        </mesh>
      </Canvas>
    </Container>
  );
}

export default Test;
