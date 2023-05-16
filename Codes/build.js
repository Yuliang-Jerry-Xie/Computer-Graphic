var ambientlight;
var cameralight;
// var objLoader = new THREE.OBJLoader();

// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


// function loadTexture(loader, url) {
//     loader.load(url, function (gltf) {
//         scene.traverse(function (child) {
//             if (child instanceof THREE.Mesh && child.name === 'earth') {
//                 const texture = gltf.scene;
//                 child.material.map = texture;
//                 child.material.flatShading = true;
//             }
//         });
//     });
// }

var mtlLoader = new THREE.MTLLoader();
mtlLoader.setTexturePath("models/sol/");
mtlLoader.setPath("models/sol/");


//Step 2: Load a texture object and traverse the texture geometry 
//then apply the combined matrices to the mesh
function loadTexture(loader, object, textureURL) {
    loader.load(object, function(mesh) {
        var center;
        var size;
        mesh.traverse(function(child) {
            if (child instanceof THREE.Mesh) {
                var mygeometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                mygeometry.computeBoundingBox();
                child.material.color = new THREE.Color(1, 1, 1);
                center = mygeometry.boundingBox.getCenter();
                size = mygeometry.boundingBox.getSize();

                var textureLoader = new THREE.TextureLoader();
                var texture = textureLoader.load(textureURL);
                child.material.map = texture;
                child.material.flatShading = true;
            }
        });
        scene.add(mesh);
        var sca = new THREE.Matrix4();
        var tra = new THREE.Matrix4();
        var combined = new THREE.Matrix4();
        sca.makeScale(50/size.length(), 50/size.length(),50/size.length());
        tra.makeTranslation(-center.x, -center.y, -center.z);  //the center of the object
        combined.multiply(sca);
        combined.multiply(tra);
        mesh.applyMatrix(combined);
    });
}

       

function createObj() {
    mtlLoader.load("sol.obj", function(materials) {
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setPath("models/sol/");
        objLoader.setMaterials(materials);
        loadTexture(objLoader, "sol.obj", "models/sol/2k_sun.jpg");
    });
}

function createObj2() {
    mtlLoader.load("Galaxy_obj.mtl", function(materials) {
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setPath("models/");
        objLoader.setMaterials(materials);
        loadTexture(objLoader, "Galaxy_obj.obj", "models/galaxy.jpg");
    });
}


function createSphere(radius, hlines, vlines, r, g, b, wf) {
    var sphere_material = new THREE.MeshPhongMaterial({
        color: new THREE.Color(r, g, b),
        wireframe: wf,
        flatShading: false, 
    });
    var sphere_geo = new THREE.SphereGeometry(radius, hlines, vlines);
    var sphere = new THREE.Mesh(sphere_geo, sphere_material);
    return sphere;
}

// function createObj() {
//     const gltfLoader = new GLTFLoader();
//     gltfLoader.load("models/Earth.glb", function (gltf) {
//         const mesh = gltf.scene;
//         mesh.name = 'earth'; 
//         scene.add(mesh);
//         loadTexture(gltfLoader, "models/Earth.glb");
//     });
// }

var sun = createSphere(15,44,44,1,0.75,0,true);
var mercury = createSphere(1,32,32,1,0.5,0,true);
var venus = createSphere(2,32,32,0.243,0.221,0.202,true);
var earth = createSphere(3,32,32,0,1,1,true);
var mars = createSphere(4,32,32,1,0.25,0,true);
var jupiter = createSphere(9,32,32,0.188,0.175,0.178,true);
var saturn = createSphere(8,32,32,0.204,0.153,0.102,true);
var uranus = createSphere(7,32,32,0,1,1,true);
var neptune = createSphere(6,32,32,0,0,1,true);
var pluto = createSphere(5,32,32,0,0.25,1,true);


function addLight() {
    cameralight = new THREE.PointLight(new THREE.Color(1, 1, 1), 0.5);
    cameralight.castShadow = true;
    ambientlight = new THREE.AmbientLight(new THREE.Color(1, 1, 1), 0.2);
    camera.add(cameralight);
}

function addShapes(){
    addLight();
    createObj();
    scene.add(sun);
    scene.add(mercury);
    scene.add(venus);
    scene.add(earth);
    scene.add(mars);
    scene.add(jupiter);
    scene.add(saturn);
    scene.add(uranus);
    scene.add(neptune);
    scene.add(pluto);
    scene.add(camera);
    scene.add(ambientlight);
    renderer.render(scene,camera);
    
}
