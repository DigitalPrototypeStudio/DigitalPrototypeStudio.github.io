var scene, camera,renderer;
scene = new THREE.Scene();
//scene.background = new THREE.Color(0xFFFFFF);

camera = new THREE.PerspectiveCamera(100,window.innerWidth / window.innerHeight);
camera.position.set(0,20,150);

renderer = new THREE.WebGLRenderer({ alpha: true });
//renderer.setClearColor( 0xFFFFFF, 0 );
//scene.background = null;

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure=1.25;

var light = new THREE.PointLight(0xffffe3,2);
light.position.set(0,20,0);

var ambientLight = new THREE.AmbientLight(0xcccccc, 1);
    scene.add(ambientLight);

    var pointLight = new THREE.PointLight(0xffffff, 2);
    pointLight.position.set(100, 100, 50);
    scene.add(ambientLight);
scene.add(light);

var loader = new THREE.GLTFLoader();

loader.load('model/untitled.gltf', function(gltf){
          scene.add(gltf.scene);
          gltf.scene.scale.set(100,100,100);
      });

    
function animate(){
          requestAnimationFrame(animate);
          renderer.render(scene, camera);

          scene.rotation.y +=0.007;
}

window.addEventListener('resize',function(){
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect=window.innerWidth/ window.innerHeight;
   
})      
animate();
      


      



