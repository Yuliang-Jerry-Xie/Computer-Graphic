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
    controls.update();
    renderer.render(scene, camera);
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
    neptune.position.x = h*Math.sin(ne);
    neptune.position.z = h*Math.cos(ne);
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



var speed = 0.005;

function buildGui() {
    gui = new dat.GUI();
    var params = {
      sunColor: [255, 191, 0],
      mercuryColor: [0, 255, 255],
      mercurySize: 1,
      venusColor: [255, 215, 0],
      venusSize: 1,
      earthColor: [0, 10, 255],
      earthSize: 1,
      marsColor:[255, 157, 111],
      marsSize: 1,
      jupiterColor: [227, 220, 203],
      jupiterSize: 1,
      saturnColor: [226, 191, 125],
      saturnSize: 1,
      uranusColor: [172, 229, 238],
      uranusSize: 1,
      neptuneColor: [91, 93, 223],
      neptuneSize: 1,
      plutoColor: [247, 187, 123],
      plutoSize: 1
    };
  
    //Color
    gui.addColor(params, 'sunColor').onChange(function (val) {
      var hex = RGBToHex(val[0], val[1], val[2]);
      sun.material.color.setHex(hex);
    });

    gui.addColor(params, 'mercuryColor').onChange(function (val) {
        var hex = RGBToHex(val[0], val[1], val[2]);
        mercury.material.color.setHex(hex);
    });

    gui.addColor(params, 'venusColor').onChange(function (val) {
        var hex = RGBToHex(val[0], val[1], val[2]);
        venus.material.color.setHex(hex);
    });

    gui.addColor(params, 'earthColor').onChange(function (val) {
        var hex = RGBToHex(val[0], val[1], val[2]);
        earth.material.color.setHex(hex);
    });

    gui.addColor(params, 'marsColor').onChange(function (val) {
        var hex = RGBToHex(val[0], val[1], val[2]);
        mars.material.color.setHex(hex);
    });

    gui.addColor(params, 'jupiterColor').onChange(function (val) {
        var hex = RGBToHex(val[0], val[1], val[2]);
        jupiter.material.color.setHex(hex);
    });

    gui.addColor(params, 'saturnColor').onChange(function (val) {
        var hex = RGBToHex(val[0], val[1], val[2]);
        saturn.material.color.setHex(hex);
    });

    gui.addColor(params, 'uranusColor').onChange(function (val) {
        var hex = RGBToHex(val[0], val[1], val[2]);
        uranus.material.color.setHex(hex);
    });

    gui.addColor(params, 'neptuneColor').onChange(function (val) {
        var hex = RGBToHex(val[0], val[1], val[2]);
        neptune.material.color.setHex(hex);
    });

    gui.addColor(params, 'plutoColor').onChange(function (val) {
        var hex = RGBToHex(val[0], val[1], val[2]);
        pluto.material.color.setHex(hex);
    });

  
    //Size
    gui.add(params, 'mercurySize', 0.1, 10).onChange(function (val) {
        mercury.scale.set(val, val, val);
      });
      
      gui.add(params, 'venusSize', 0.1, 10).onChange(function (val) {
        venus.scale.set(val, val, val);
      });
      
      gui.add(params, 'earthSize', 0.1, 10).onChange(function (val) {
        earth.scale.set(val, val, val);
      });
      
      gui.add(params, 'marsSize', 0.1, 10).onChange(function (val) {
        mars.scale.set(val, val, val);
      });
      
      gui.add(params, 'jupiterSize', 0.1, 10).onChange(function (val) {
        jupiter.scale.set(val, val, val);
      });
      
      gui.add(params, 'saturnSize', 0.1, 10).onChange(function (val) {
        saturn.scale.set(val, val, val);
      });
      
      gui.add(params, 'uranusSize', 0.1, 10).onChange(function (val) {
        uranus.scale.set(val, val, val);
      });
      
      gui.add(params, 'neptuneSize', 0.1, 10).onChange(function (val) {
        neptune.scale.set(val, val, val);
      });
      
      gui.add(params, 'plutoSize', 0.1, 10).onChange(function (val) {
        pluto.scale.set(val, val, val);
      });
      
      
    function RGBToHex(r, g, b) {
      return (r << 16) | (g << 8) | b;
    }
  
    gui.open();
  }

