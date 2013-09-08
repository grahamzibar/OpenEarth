/* Application Starter */
function Earth() {
	var RADIUS = 50;
	var SEGMENTS = 16;
	var RINGS = 16;
	
	THREE.Mesh.call(
		this,
		new THREE.SphereGeometry(RADIUS, SEGMENTS, RINGS),
		new THREE.MeshLambertMaterial({ color: 0xCC0000 })
	);
};
Earth.prototype = Object.create(THREE.Mesh.prototype);

function Space() {
	
};

function Something() {
	
};

// Gotta think in classes...


// Our View Interface.
function View(_container) {
	/* Constants */
	var WIDTH = 600;
	var HEIGHT = 600;
	var VIEW_ANGLE = 45;
	var ASPECT_RATIO = WIDTH / HEIGHT;
	var NEAR = 0.1;
	var FAR = 10000;
	
	/* Global Junk */
	var _renderer = new THREE.WebGLRenderer();
	var _camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT_RATIO, NEAR, FAR);
	var _scene = new THREE.Scene();
	
	var _sun = new THREE.PointLight(0xFFFFFF);
	var _earth = new Earth();
	
	var __constructor__ = function() {
		_scene.add(_camera);
		_camera.position.z = 300;
		_renderer.setSize(WIDTH, HEIGHT);
		
		_sun.position.x = 10;
		_sun.position.y = 50;
		_sun.position.z = 130;
		
		_scene.add(_sun);
		_scene.add(_earth);
		
		_container.appendChild(_renderer.domElement);
		
		startRender();
	};
	
	var startRender = function() {
		window.webkitRequestAnimationFrame(startRender);
		_renderer.render(_scene, _camera);
	};
	
	__constructor__();
};

var _view = new View(document.getElementById('open_earth'));