import './style.css'

import * as THREE from 'three';
import { Camera, TorusBufferGeometry } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import * as Torus from 'Torus';


// --------------------------------------


class Torus {
	constructor(tColor, radius, tube, radialSegments, tubularSegments, arc) {
		this.geometry = new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc);
		this.material = new THREE.MeshStandardMaterial({
			color: tColor
		});
		this.ID = new THREE.Mesh(this.geometry, this.material);
	}

	returnShape() {
		return this.ID;
	}

	rotate(x, y, z) {
		this.ID.rotateX(x);
		this.ID.rotateY(y);
		this.ID.rotateZ(z);
	}
}

class Box {
	constructor(pos, tColor, scale) {
		this.pos = new THREE.Vector3(pos.x, pos.y, pos.z);
		this.color = tColor;
		this.geometry = new THREE.BoxGeometry(scale.x, scale.y, scale.z);
		this.material = new THREE.MeshStandardMaterial({
			color: tColor
		});

		this.ID = new THREE.Mesh(this.geometry, this.material);
		this.ID.position.set(pos.x, pos.y, pos.z);
		this.ID.scale.set(scale.x, scale.y, scale.z);
	}

	getShape() {
		return this.ID;
	}

	SetPos(x, y, z) {
		this.ID.position.set(x, y, z);
	}

	SetRot(x, y, z) {
		this.ID.rotation.set(x, y, z);
	}

	SetScale(x, y, z) {
		this.ID.scale.set(x, y, z);
	}
}


// --------------------------------------


const scene = new THREE.Scene();
const cam = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector('#bg')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
cam.position.setZ(30);
renderer.render(scene, cam);

// Geometrys
// const geometry = new THREE.TorusGeometry(10, 3, 16, 100);

// Mats
// const mat = new THREE.MeshStandardMaterial({
// 	color: 0xff0000
// });

// Objects
// const torus = new THREE.Mesh(geometry, mat);
// scene.add(torus);

// const torus = new Torus(0xff0000, 10, 3, 16, 100, 6.3);
// scene.add(torus.returnShape());
const box = new Box(new THREE.Vector3(0, 0, 0), 0xff0000, new THREE.Vector3(3, 3, 3));
scene.add(box.getShape());

// Lights
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(10, 10, 10);
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(pointLight);
scene.add(ambientLight);

// Helpers
const pLightHelper = new THREE.PointLightHelper(pointLight);
const gHelper = new THREE.GridHelper(200, 50);
scene.add(pLightHelper);
// scene.add(gHelper);

const controls = new OrbitControls(cam, renderer.domElement);

// function addStar() {
// 	const geom = new THREE.SphereGeometry(0.20, 24, 24);
// 	const mat = new THREE.MeshStandardMaterial({
// 		color: 0xffffff
// 	});
// 	const star = new THREE.Mesh(geom, mat);

// 	const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

// 	star.position.set(x, y, z);
// 	scene.add(star);
// }

// Array(200).fill().forEach(addStar);

function animate()
{
	requestAnimationFrame(animate);

	controls.update();

	renderer.render(scene, cam);
}
animate();
