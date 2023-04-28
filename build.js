function createSphere(radius,hlines,vlines,r,g,b,wf){
    var sphere_material = new THREE.MeshBasicMaterial();
    sphere_material.color = new THREE.Color(r,g,b);
    sphere_material.wireframe = wf;
    var sphere_geo = new THREE.SphereGeometry(radius,hlines,vlines);
    var sphere = new THREE.Mesh(sphere_geo,sphere_material);
    return sphere;
}

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

    renderer.render(scene,camera);
}
