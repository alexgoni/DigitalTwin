/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 level9.gltf --transform
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/glb/level9-transformed.glb"
  );
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (props.play) {
      actions["Key.003Action"].play();
    }
  }, [props.play]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="result_009">
          <mesh
            name="result-5_019001"
            geometry={nodes["result-5_019001"].geometry}
            material={materials["leaf_disease.001"]}
            morphTargetDictionary={
              nodes["result-5_019001"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_019001"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_019001_1"
            geometry={nodes["result-5_019001_1"].geometry}
            material={materials["leaf_disease.001"]}
            morphTargetDictionary={
              nodes["result-5_019001_1"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_019001_1"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_019001_2"
            geometry={nodes["result-5_019001_2"].geometry}
            material={materials["leaf_disease.001"]}
            morphTargetDictionary={
              nodes["result-5_019001_2"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_019001_2"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_019001_3"
            geometry={nodes["result-5_019001_3"].geometry}
            material={materials["leaf_disease.001"]}
            morphTargetDictionary={
              nodes["result-5_019001_3"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_019001_3"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_019001_4"
            geometry={nodes["result-5_019001_4"].geometry}
            material={materials["petals.001"]}
            morphTargetDictionary={
              nodes["result-5_019001_4"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_019001_4"].morphTargetInfluences
            }
          />
          <mesh
            name="result-5_019001_5"
            geometry={nodes["result-5_019001_5"].geometry}
            material={materials["stem.001"]}
            morphTargetDictionary={
              nodes["result-5_019001_5"].morphTargetDictionary
            }
            morphTargetInfluences={
              nodes["result-5_019001_5"].morphTargetInfluences
            }
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/glb/level9-transformed.glb");
