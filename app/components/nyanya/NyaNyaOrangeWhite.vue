<script setup>
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

let scene, camera, renderer;
let model, mixer, clock;

const loader = new GLTFLoader();

onMounted(() => {
  init();

  window.addEventListener("resize", onWindowResize);
});

function init() {
  scene = new THREE.Scene();

  clock = new THREE.Clock();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100,
  );
  camera.position.set(0, 0, 12);

  const light = new THREE.AmbientLight(0xffffff, 2);
  const dirLight = new THREE.DirectionalLight(0xffffff, 2);

  scene.add(camera, light, dirLight);

  const canvas = document.querySelector("#bg");
  renderer = new THREE.WebGLRenderer({ alpha: true, canvas: canvas });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  loadModel();
}

function loadModel() {
  loader.load("nyanya/wave.glb", function (gltf) {
    model = gltf.scene;
    scene.add(model);
    model.position.set(0, 4.5, 0);

    const animations = gltf.animations;
    mixer = new THREE.AnimationMixer(model);
    const action = mixer.clipAction(animations[0]);
    action.play();

    renderer.setAnimationLoop(animate);
  });
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  const mixerUpdateDelta = clock.getDelta();

  mixer.update(mixerUpdateDelta);

  renderer.render(scene, camera);
}
</script>

<template>
  <canvas id="bg" />
</template>

<style scoped>
canvas {
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
}
</style>
