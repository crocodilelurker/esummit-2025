"use client";
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/final.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials["Material.001"]}
          position={[0.148, 1.015, -4.523]}
          scale={[2.994, 1.247, 1.247]}
        />
        <mesh
          name="Circle"
          castShadow
          receiveShadow
          geometry={nodes.Circle.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          name="diamond"
          castShadow
          receiveShadow
          geometry={nodes.diamond.geometry}
          material={materials.Material}
          position={[0, 3.657, 0]}
          scale={[3.282, 17.107, 3.282]}
        />
        <mesh
          name="base"
          castShadow
          receiveShadow
          geometry={nodes.base.geometry}
          material={materials["Material.002"]}
          position={[0, 1.025, 0]}
        />
        <mesh
          name="gate"
          castShadow
          receiveShadow
          geometry={nodes.gate.geometry}
          material={materials["Material.003"]}
          position={[0, 2.55, -1.91]}
          scale={[0.439, 0.605, 1.276]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/final.glb");
