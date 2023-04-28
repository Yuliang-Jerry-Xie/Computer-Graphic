var speed = 0.005;
function animate_sun(){
    sun.rotation.y += speed;
    renderer.render(scene,camera);
    requestAnimationFrame(animate_sun);
}

const a = 20, b = 25, c = 32, d = 45, e = 60, f = 80, g = 100, h = 120, i = 140;
var mer = 5, ve = 3, ea = 4, ma = 5, ju = 6, sa = 7, ur = 8, ne = 9, plu = 10;
// var dalpha = 2*Math.PI/5000;



// function animate(_dalpha, _speed, _radius, _platnet, _alpha){
//     _alpha += _dalpha;
//     _platnet.rotation.y += _speed;
//     _platnet.position.y = 0;
//     _platnet.position.x = _radius*Math.sin(_alpha);
//     _platnet.position.z = _radius*Math.cos(_alpha);
//     requestAnimationFrame(animate);
// }

function animate_mercury(){
    mer += 1*Math.PI/1000;
    mercury.rotation.y += speed;
    mercury.position.y = 0;
    mercury.position.x = a*Math.sin(mer);
    mercury.position.z = a*Math.cos(mer);
    requestAnimationFrame(animate_mercury);
}

function animate_venus(){
    ve += 2*Math.PI/1000;;
    venus.rotation.y += speed;
    venus.position.y = 0;
    venus.position.x = b*Math.sin(ve);
    venus.position.z = b*Math.cos(ve);
    requestAnimationFrame(animate_venus);
}

function animate_earth(){
    ea += 3*Math.PI/1500;;
    earth.rotation.y += speed;
    earth.position.y = 0;
    earth.position.x = c*Math.sin(ea);
    earth.position.z = c*Math.cos(ea);
    requestAnimationFrame(animate_earth);
}

function animate_mars(){
    ma += 4*Math.PI/2000;
    mars.rotation.y += speed;
    mars.position.y = 1;
    mars.position.x = d*Math.sin(ma);
    mars.position.z = d*Math.cos(ma);
    requestAnimationFrame(animate_mars);
}

function animate_jupiter(){
    ju += 5*Math.PI/2000;
    jupiter.rotation.y += speed;
    jupiter.position.y = 0;
    jupiter.position.x = e*Math.sin(ju);
    jupiter.position.z = e*Math.cos(ju);
    requestAnimationFrame(animate_jupiter);
}

function animate_saturn(){
    sa += 6*Math.PI/2000;
    saturn.rotation.y += speed;
    saturn.position.y = 0;
    saturn.position.x = f*Math.sin(sa);
    saturn.position.z = f*Math.cos(sa);
    requestAnimationFrame(animate_saturn);
}

function animate_uranus(){
    ur += 7*Math.PI/2000;
    uranus.rotation.y += speed;
    uranus.position.y = 0;
    uranus.position.x = g*Math.sin(ur);
    uranus.position.z = g*Math.cos(ur);
    requestAnimationFrame(animate_uranus);
}

function animate_neptune(){
    ne += 8*Math.PI/2000;
    neptune.rotation.y += speed;
    neptune.position.y = 0;
    neptune.position.x = h*Math.sin(ju);
    neptune.position.z = h*Math.cos(ju);
    requestAnimationFrame(animate_neptune);
}

function animate_pluto(){
    plu += 9*Math.PI/2000;;
    pluto.rotation.y += speed;
    pluto.position.y = 0;
    pluto.position.x = i*Math.sin(plu);
    pluto.position.z = i*Math.cos(plu);
    requestAnimationFrame(animate_pluto);
}
