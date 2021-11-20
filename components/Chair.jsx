import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as dat from 'dat.gui';
import * as THREE from 'three';
import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import ClipLoader from 'react-spinners/ClipLoader';
export default function Chair(props) {
  const [loading, setLoading] = useState(true);
  const chairDiv = useRef(null);
  useEffect(() => {
    // const gui = new dat.GUI();
    const sizes = {
      width: window.innerWidth,
      height: 400,
    };
    const scene = new THREE.Scene();
    const loader = new GLTFLoader();
    loader.load(
      '/sofa.glb',
      (gltf) => {
        gltf.scene.rotation.set(0.05, 0, 0);
        gltf.scene.scale.multiplyScalar(5);
        gltf.scene.position.x = 0;
        gltf.scene.position.y = -2;
        scene.add(gltf.scene);
        setLoading(false);
        chairDiv.current.style.display = 'block';
      },
      (xhr) => {
        setLoading(true);
        chairDiv.current.style.display = 'none';
      },
      function (error) {
        console.log(error);
      }
    );

    const backLight = new THREE.SpotLight(0xffffff, 1);
    backLight.position.set(-20, 500, 500);
    backLight.castShadow = true;
    backLight.shadow.radius = 20;
    scene.add(backLight);
    const keyLight = new THREE.SpotLight(0xffffff, 1);
    keyLight.position.set(-90, 500, -500);
    keyLight.castShadow = true;
    keyLight.shadow.radius = 1;
    scene.add(keyLight);
    const camera = new THREE.PerspectiveCamera(
      45,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.set(-3, 0, 10);
    scene.add(camera);
    const renderer = new THREE.WebGL1Renderer({
      antialias: true,
      alpha: true,
    });
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.enableDamping = true;
    controls.maxDistance = 2;
    controls.minDistance = 10;
    controls.update();
    renderer.setSize(sizes.width, sizes.height);
    renderer.shadowMap.enabled = true;
    renderer.outputEncoding = THREE.sRGBEncoding;
    document.getElementById('chair_render').appendChild(renderer.domElement);
    function animate() {
      controls.update();
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
  }, []);
  return (
    <>
      <div className="flex justify-center align-center">
        {loading ? <ClipLoader /> : ''}
      </div>
      <div id="chair_render" ref={chairDiv}></div>
    </>
  );
}
