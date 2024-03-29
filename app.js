// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load the GLB model
const loader = new THREE.GLTFLoader();
loader.load(
    'C:\Users\geral\Desktop\Test\mercedes-benz_g-class_free_download.glb',
    function (gltf) {
        scene.add(gltf.scene);
    },
    undefined,
    function (error) {
        console.error(error);
    }
);

// Set up camera position
camera.position.z = 5;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
