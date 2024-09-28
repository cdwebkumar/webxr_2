// const canvas = document.getElementById('xrCanvas');
// let renderer, scene, camera, imageMesh;
// let isHovering = false;
// const raycaster = new THREE.Raycaster();
// const mouse = new THREE.Vector2();

// function init() {
//     scene = new THREE.Scene();
//     camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });

//     // Load texture
//     const textureLoader = new THREE.TextureLoader();
//     const texture = textureLoader.load('images/vr.jpg',
//         (texture) => {
//             // Create a plane geometry with the texture
//             const geometry = new THREE.PlaneGeometry(8, 8);
//             const material = new THREE.MeshBasicMaterial({ map: texture });
//             imageMesh = new THREE.Mesh(geometry, material);
//             scene.add(imageMesh);

//             camera.position.z = 4;

//             animate();
//         },
//         undefined,
//         (err) => {
//             console.error('An error occurred while loading the texture:', err);
//         }
//     );

//     // Mouse movement event listener
//     window.addEventListener('mousemove', onMouseMove);
// }

// function onMouseMove(event) {
//     // Normalize mouse position to [-1, 1]
//     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//     // Raycasting to check for intersection with the image
//     raycaster.setFromCamera(mouse, camera);
//     const intersects = raycaster.intersectObjects([imageMesh]);

//     // Check if hovering over the image
//     isHovering = intersects.length > 0;

//     // If hovering, update the rotation of the image
//     if (isHovering) {
//         const rotationSpeed = 2; // Adjust this for faster/slower rotation
//         imageMesh.rotation.y += rotationSpeed * 0.01;
//         imageMesh.rotation.x += rotationSpeed * 0.01;
//         // imageMesh.rotation.z += rotationSpeed * 0.01;
//     }
// }

// function animate() {
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
// }


// // Initialize the scene on page load
// init();


// Check if WebXR is supported
if (navigator.xr) {
    console.log("WebXR is supported!");
    // Initialize your WebXR session here
} else {
    console.error("WebXR not supported!");
}

// Example: Basic animation (replace with your WebXR logic)
const xrContainer = document.getElementById('xr-container');
xrContainer.innerHTML = "<p>Loading XR content...</p>";

setTimeout(() => {
    xrContainer.innerHTML = "<p>XR content loaded!</p>";
}, 2000);
