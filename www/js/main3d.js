(function() {

    //定数 2
    var EYE_NUM = 2;
    
    var EYE_WIDTH = 0.025;
    var EYE_LENGTH = 0.010;
    
    var Boxsize=20;
    var NUM=20;
    
    var VNUM = 0;
    var HNUM = 5;
    
    var vx=0;
    var vy=0;
    var vz=0;
    
    var ax=0;
    var ay=0;
    var az=0;

    var cameraX;
    var cameraY;

    var touchX=0;
    var touchY=0;
    var isMouseDown = false;
    
    var scene;
    
    var fps=30.0;

    var moveFlg = false;



function loadFile(fileName){
   httpObj = new XMLHttpRequest();
   httpObj.open('GET',fileName,true);
   // ?以降はキャッシュされたファイルではなく、毎回読み込むためのもの
   httpObj.send(null);
   httpObj.onreadystatechange = function(){
      if ( (httpObj.readyState == 4) && (httpObj.status == 200) ){
         
        var i;
        var j;
        var k;
        
        var txt = parseInt(httpObj.responseText, 16);
  
        var geo = new THREE.CubeGeometry( 1, 1, 1 );
  
        for(i=-6;i<=+6;i++){ 
            for(j=-6;j<=+6;j++){
                for(k=-6;k<=+6;k++){ 
                var field = new THREE.Mesh( geo, new THREE.MeshPhongMaterial( { color: 0xffffff * Math.random() } ));
                field.position.x = i*1;
                field.position.y = j*1;
                field.position.z = k*1;
                scene.add(field);
                }
            }
        }
      }
   }
}


function init() {
  
  scene = new THREE.Scene();
  
  var width  = 320;
  var height = 540/EYE_NUM;
  var fov    = 40;
  var aspect = width / height;
  var near   = 0.001;
  var far    = 10000;
  
  
  
  if( EYE_NUM == 2) {
    var cameraR = new THREE.PerspectiveCamera( fov, aspect, near, far );
    cameraR.position.set( EYE_LENGTH, +EYE_WIDTH, 0 );
    cameraR.rotation.x =   0.01 / 180.0 * Math.PI;
    var cameraL = new THREE.PerspectiveCamera( fov, aspect, near, far );
    cameraL.position.set( EYE_LENGTH, -EYE_WIDTH, 0 );
    cameraR.rotation.x = - 0.01 / 180.0 * Math.PI;
    var cameragroup = new THREE.Object3D();
    cameragroup.add( cameraR );
    cameragroup.add( cameraL );
    scene.add( cameragroup );
    cameragroup.position.z = -Boxsize*VNUM + 1.7;
    cameragroup.rotation.order = "ZXY";
  
    var rendererR = new THREE.WebGLRenderer( {antialias:true} );
    rendererR.setSize( width, height );
    rendererR.shadowMapEnabled = true;
    rendererR.setClearColor(0xa0a0f0, 1.0);
    document.body.appendChild( rendererR.domElement );

    var rendererL = new THREE.WebGLRenderer( {antialias:true} );
    rendererL.setSize( width, height );
    rendererL.shadowMap.enabled = true;
    rendererL.setClearColor(0xa0a0f0, 1.0);
    document.body.appendChild( rendererL.domElement );

    ( function renderLoop () {
      requestAnimationFrame( renderLoop );
      rendererR.render( scene, cameraR );
      rendererL.render( scene, cameraL );
    {
      if (moveFlg) {
        var v = new THREE.Vector3(0,0,-0.1);
        cameragroup.quaternion.multiplyVector3(v);
        
        cameragroup.position.x += v.x;
        cameragroup.position.y += v.y;
        cameragroup.position.z += v.z;
        if( cameragroup.position.z < -Boxsize*VNUM + 1.7) {
          cameragroup.position.z = -Boxsize*VNUM + 1.7;
        }
      }
      }} 
    )();
  } else {
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( EYE_LENGTH, +EYE_WIDTH, 0 );
    var cameragroup = new THREE.Object3D();
    cameragroup.add( camera );
    scene.add( cameragroup );
    cameragroup.position.z = -Boxsize*VNUM + 1.7;
    cameragroup.rotation.order = "ZXY";
  
    var renderer = new THREE.WebGLRenderer( {antialias:true} );
    renderer.setSize( width, height );
    renderer.shadowMapEnabled = true;
    renderer.setClearColor(0xa0a0f0, 1.0);
    document.body.appendChild( renderer.domElement );

    ( function renderLoop () {
      requestAnimationFrame( renderLoop );
      renderer.render( scene, camera );
    
      if (moveFlg) {
        var v = new THREE.Vector3(0,0,-0.1);
        cameragroup.quaternion.multiplyVector3(v);
        
        cameragroup.position.x += v.x;
        cameragroup.position.y += v.y;
        cameragroup.position.z += v.z;
        if( cameragroup.position.z < -Boxsize*VNUM + 1.7) {
          cameragroup.position.z = -Boxsize*VNUM + 1.7;
        }
      }
      } 
    )();
  }


  //環境光
  var ambientLight = new THREE.AmbientLight( 0x222222 );
  scene.add( ambientLight );

  //太陽光
  var directionalLight = new THREE.DirectionalLight( 0xffffff );
  directionalLight.position.set( 800, 1200, 1000 );
  directionalLight.castShadow = true;
  directionalLight.shadow.camera.near = 10;
  directionalLight.shadow.camera.far = 50000;
  directionalLight.shadow.camera.top = 1000;
  directionalLight.shadow.camera.bottom = -1000;
  directionalLight.shadow.camera.left = 1000;
  directionalLight.shadow.camera.right = -1000;
  directionalLight.shadow.mapSize.width = 512;
  directionalLight.shadow.mapSize.height = 512;
  scene.add( directionalLight );



  var geometry = new THREE.Geometry();
  
  
  
  //6面分のマテリアルを生成
var materials = [
    new THREE.MeshLambertMaterial({map:THREE.ImageUtils.loadTexture("img/building2.png")}),
	new THREE.MeshLambertMaterial({map:THREE.ImageUtils.loadTexture("img/building2.png")}),
	new THREE.MeshLambertMaterial({map:THREE.ImageUtils.loadTexture("img/building.png")}),
	new THREE.MeshLambertMaterial({map:THREE.ImageUtils.loadTexture("img/building.png")}),
	new THREE.MeshLambertMaterial({map:THREE.ImageUtils.loadTexture("img/ball.png")}),
	new THREE.MeshLambertMaterial({map:THREE.ImageUtils.loadTexture("img/ball.png")})
];//*/

  var geometry2 = new THREE.CubeGeometry( Boxsize, Boxsize, Boxsize*HNUM );

  var material2 = new THREE.MeshFaceMaterial(materials);
  
  var i;
  var j;
  
  for(i=-NUM;i<=+NUM;i++){ 
      for(j=-NUM;j<=+NUM;j++){
            var z = Math.round((Math.random())-0.40)*Boxsize*((Math.random()*Math.random()*HNUM+0.5));

            if ( z > 0 ) {
                var m = new THREE.Matrix4();
                m.makeTranslation( i*Boxsize, j*Boxsize, z-Boxsize*(VNUM + HNUM/2) );
                geometry.merge(geometry2, m, 0);
            }
      }
  }  
  
  var　obj = new THREE.Mesh( geometry, material2);
  obj.castShadow = true
  scene.add(obj);

  
  var field = new THREE.Mesh( new THREE.CubeGeometry( Boxsize*NUM*2, Boxsize*NUM*2, 10 ), new THREE.MeshPhongMaterial( { color: 0x777777 } ));
  field.position.z = -Boxsize*VNUM - 5;
  field.receiveShadow = true;
  scene.add(field);//*/
  
 // loadFile("txt/test.txt");

  
  window.addEventListener("deviceorientation", function(evt) {      
    cameragroup.rotation.x = evt.beta / 180.0 * Math.PI;
    cameragroup.rotation.y = evt.gamma / 180.0 * Math.PI;
    cameragroup.rotation.z = evt.alpha / 180.0 * Math.PI;
    
    //camera.rotation.z = -evt.webkitCompassHeading / 180 * Math.PI;  //alphaだと端末からみた相対座標になる
    }, true  
  );//*/

  
  window.addEventListener("touchmove", function(e) {
    e.preventDefault();
    }, true
  );

  window.addEventListener("touchstart", function(e) {
    e.preventDefault();
    moveFlg = true;
    }, true
  );

  window.addEventListener("touchend", function(e) {
    e.preventDefault();
    moveFlg = false;
    }, true
  ); //*/


window.addEventListener("keydown", function(e) {
    e.preventDefault();
    moveFlg = true;
    }, true
  );

  window.addEventListener("keyup", function(e) {
    e.preventDefault();
    moveFlg = false;
    }, true
  ); //*/

}




window.onload = function() {
    if(getUa() === false) init();
    else document.addEventListener("deviceready", init, false);
}


function setScale(bound) {
    switch (getUa()) {
        case "Android":
        case "iPad":
        case "iPhone":
            document.getElementsByTagName("canvas")[0].style["-webkit-transform"] = "scale(" + bound.zoom + "," + bound.zoom + ")";
            break;
        default:
            break;
    }
    return bound;
}

function setBound() {
    var bound = {
        width: 320,
        height: 460,
        zoom: 1
    };
    switch (getUa()) {
        case "Android":
        case "iPad":
        case "iPhone":
            bound.height = screen.availHeight * (bound.width / screen.availWidth);
            bound.zoom = screen.availWidth / bound.width;
            break;
        default:
            bound.height = window.innerHeight;
            break;
    }
    return bound;
}


function getUa() {
    if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 ) {
        return 'iPhone'; 
    } else if(navigator.userAgent.indexOf('iPad') > 0) {
        return 'iPad';
    } else if(navigator.userAgent.indexOf('Android') > 0) {
        return 'Android';
    } else return false;
}

})();
