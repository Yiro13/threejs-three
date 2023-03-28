import './style.css'

import * as THREE from 'three';


const escena = new THREE.Scene();


var camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
});

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('fondo.jpg');
const planeGeometry = new THREE.PlaneGeometry(100, 50);
const planeMaterial = new THREE.MeshBasicMaterial({ map: texture });
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
planeMesh.position.set(0, 0, -1);
escena.add(planeMesh);
renderer.setClearColor(0x000000, 0);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camara.position.setZ(30);

renderer.render(escena, camara)

// Crear una luz direccional
var directionalLight = new THREE.DirectionalLight(0xffffff, 1);

// Definir la posición de la luz
directionalLight.position.set(5, 5, 8);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 2048;
directionalLight.shadow.mapSize.height = 2048;
directionalLight.shadow.camera.near = 0.1;
directionalLight.shadow.camera.far = 100;
// Agregar la luz a la escena

var personaje = new THREE.Object3D();

// Crear la geometría del cuerpo
var bodyGeometry = new THREE.CapsuleGeometry(2, 3.5, 4, 20);
var bodyMaterial = new THREE.MeshPhongMaterial({color: 0xff0000});
var bodyMesh = new THREE.Mesh(bodyGeometry, bodyMaterial);

// Crear la geometría de las manos
var armGeometry = new THREE.CapsuleGeometry(0.8,1,8,16)
var armMaterial = new THREE.MeshPhongMaterial({color: 0xff0000, wireframe: false});
var leftArmMesh = new THREE.Mesh(armGeometry, armMaterial);
var rightArmMesh = new THREE.Mesh(armGeometry, armMaterial);
leftArmMesh.position.set(1.75, 0.01, 0);
rightArmMesh.position.set(-1.75, 0.01, 0);

//Crear la geometria de las piernas
var legGeometry = new THREE.CapsuleGeometry(0.8,1,8,16)
var legMaterial = new THREE.MeshPhongMaterial({color: 0xff0000, wireframe: false});
var leftlegMesh = new THREE.Mesh(legGeometry, legMaterial);
var rightlegMesh = new THREE.Mesh(legGeometry, legMaterial);
leftlegMesh.position.set(1, -3.8, 0);
rightlegMesh.position.set(-1, -3.8, 0);

//Crear la mochila del amongus
var mochilaGeometry = new THREE.BoxGeometry(2.5,3,2)
var mochilaMaterial = new THREE.MeshPhongMaterial({color: 0xff0000, wireframe: false});
var mochilaMesh = new THREE.Mesh(mochilaGeometry, mochilaMaterial);
mochilaMesh.position.set(0, 0, 1)

//pompis del amongus
var pompiGeometry = new THREE.SphereGeometry(1.1,16,16);
var pompiMaterial = new THREE.MeshPhongMaterial({color: 0xff0000, wireframe: false})
var leftpompiMesh = new THREE.Mesh(pompiGeometry, pompiMaterial);
var rigthpompiMesh = new THREE.Mesh(pompiGeometry, pompiMaterial);
leftpompiMesh.position.set(0.6,-2.4,1.1);
rigthpompiMesh.position.set(-0.6,-2.4,1.1);

//gafa amongus
var gafaGeometry = new THREE.CapsuleGeometry(1.2,1,90);
var gafaMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, wireframe: false})
var gafaMesh = new THREE.Mesh(gafaGeometry, gafaMaterial);
gafaMesh.position.set(0,1.7,-1.2);
gafaMesh.rotateZ(Math.PI / 2);

// Agregar los meshes a la escena
personaje.add(bodyMesh);
personaje.add(leftArmMesh);
personaje.add(rightArmMesh);
personaje.add(leftlegMesh);
personaje.add(rightlegMesh);
personaje.add(mochilaMesh);
personaje.add(leftpompiMesh);
personaje.add(rigthpompiMesh);
personaje.add(gafaMesh);

personaje.receiveShadow = true;
personaje.scale.set(2,2,2);

escena.add(personaje);
escena.add(directionalLight);

// Animar la escena
function animate() {
  requestAnimationFrame(animate);
  personaje.rotation.y += 0.02;

  renderer.render(escena, camara);
}
animate();
