import * as THREE from 'three';

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
}
