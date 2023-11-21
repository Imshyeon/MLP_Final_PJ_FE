import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x212529); // 컬러 바꾸기

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0,0,8)
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
const container = document.getElementById('threejs-container')
container.appendChild(renderer.domElement);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 0, 1);
scene.add(directionalLight);
// const ambientLight = new THREE.AmbientLight(0xffffff, 1);
// scene.add(ambientLight)

const geometry = new THREE.BoxGeometry(4,4,2); // x, y, z
const material = new THREE.MeshStandardMaterial({
    color:0x79E5CB
})
// const obj01_t = new THREE.Mesh(geometry,material)
// obj01_t.position.set(-9, 4 ,0)
// scene.add(obj01_t)

// const obj01_m1 = new THREE.Mesh(geometry,material)
// obj01_m1.position.set(-9, 0 ,0)
// scene.add(obj01_m1)

const obj01_m2 = new THREE.Mesh(geometry,material)
obj01_m2.position.set(-5, 0 ,0)
scene.add(obj01_m2)

// const obj01_b1 = new THREE.Mesh(geometry,material)
// obj01_b1.position.set(-9, -4 ,0)
// scene.add(obj01_b1)

// const obj01_b2 = new THREE.Mesh(geometry,material)
// obj01_b2.position.set(-5, -4 ,0)
// scene.add(obj01_b2)

// const obj02_t = new THREE.Mesh(geometry,material)
// obj02_t.position.set(9, 4 ,0)
// scene.add(obj02_t)

// const obj02_m1 = new THREE.Mesh(geometry,material)
// obj02_m1.position.set(9, 0 ,0)
// scene.add(obj02_m1)

const obj02_m2 = new THREE.Mesh(geometry,material)
obj02_m2.position.set(5, 0 ,0)
scene.add(obj02_m2)

// const obj02_b1 = new THREE.Mesh(geometry,material)
// obj02_b1.position.set(9, -4 ,0)
// scene.add(obj02_b1)

// const obj02_b2 = new THREE.Mesh(geometry,material)
// obj02_b2.position.set(5, -4 ,0)
// scene.add(obj02_b2)

function animate() {
    requestAnimationFrame(animate);
    // Your animation logic goes here
    obj01_m2.rotation.y += 0.01;
    obj02_m2.rotation.y += 0.01;

    // const scrollPosition = window.scrollY;
    // if (scrollPosition > window.innerHeight) {
    //     obj01.visible = false;  // Hide the object
    // } else {
    //     obj01.visible = true;  // Show the object
    // }
    renderer.render(scene, camera);
}
animate();

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight; // 종횡비 가변 처리
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight);
}
window.addEventListener('resize', onWindowResize);

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const containerHeight = container.clientHeight;

    // Check if the scroll position is below the container's height
    if (scrollPosition > containerHeight) {
        container.style.display = 'none';  // Hide the container
    } else {
        container.style.display = 'block';  // Show the container
    }
});