var ambientlight;
var cameralight;


// var mtlloader = new THREE.MTLLoader();
// mtlloader.setTexturePath("models/");
// mtlloader.setPath("models/");

// function loadTexture(loader,object){ //specify load object
//     loader.load(object,function(mesh){
//         var center;
//         var size;
//         mesh.traverse(function(child){ //this child is any sub component of my mesh
//             if(child instanceof THREE.Mesh){
//                 var mygeometry = new THREE.Geometry().fromBufferGeometry(child.geometry); //put object into buffer, then from buffer into the object
//                 mygeometry.computeBoundingBox();
//                 child.material.color = new THREE.Color(1,1,1);
//                 center = mygeometry.boundingBox.getCenter();
//                 size = mygeometry.boundingBox.getSize(); //get values of these bounding box
//             }
//         });
//         scene.add(mesh);
//         var sca = new THREE.Matrix4();
//         var tra = new THREE.Matrix4();
//         var combined = new THREE.Matrix4();
//         sca.makeScale(10/size.length(), 10/size.length(),10/size.length());
//         tra.makeTranslation(-center.x, -center.y, -center.z);  //the center of the object
//         combined.multiply(sca);
//         combined.multiply(tra);
//         mesh.applyMatrix(combined);
//     });
// }


function createSphere(radius,hlines,vlines,r,g,b,wf){
    var sphere_material = new THREE.MeshBasicMaterial();
    sphere_material.color = new THREE.Color(r,g,b);
    sphere_material.wireframe = wf;
    var sphere_geo = new THREE.SphereGeometry(radius,hlines,vlines);
    var sphere = new THREE.Mesh(sphere_geo,sphere_material);
    return sphere;
}

// function createObj(){
//     mtlloader.load("Earth_2K.mtl",function(materials){
//         materials.preload();
//         var objLoader = new THREE.OBJLoader();
//         objLoader.setPath("models/");
//         objLoader.setMaterials(materials);

//         loadTexture(objLoader, "Earth_2K.obj");
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
    addLight();
    scene.add(camera);
    scene.add(ambientlight);
    renderer.render(scene,camera);
    
}
