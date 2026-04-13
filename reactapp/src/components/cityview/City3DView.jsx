import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './CityView.css';

const City3DView = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        // Scene setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x050b14);
        scene.fog = new THREE.Fog(0x050b14, 20, 100);

        const width = mount.clientWidth;
        const height = mount.clientHeight;
        const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
        camera.position.set(15, 15, 15);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        mount.appendChild(renderer.domElement);

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.maxPolarAngle = Math.PI / 2 - 0.1; // Don't allow going below ground
        controls.minDistance = 5;
        controls.maxDistance = 50;

        // Grid
        const gridHelper = new THREE.GridHelper(100, 100, 0x00f3ff, 0x112233);
        gridHelper.position.y = -0.01;
        scene.add(gridHelper);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
        dirLight.position.set(10, 20, 10);
        scene.add(dirLight);

        // City Generation Group
        const cityGroup = new THREE.Group();
        scene.add(cityGroup);

        // Simple procedural buildings
        const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
        // Translate geometry so scaling grows upwards from 0
        boxGeometry.translate(0, 0.5, 0);

        const material = new THREE.MeshPhysicalMaterial({
            color: 0x1a2b4b, /* Dark Blue */
            transparent: true,
            opacity: 0.9,
            metalness: 0.9,
            roughness: 0.2,
            transmission: 0.2,
            thickness: 1,
        });

        const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0.3 });

        // Generate buildings
        for (let i = 0; i < 50; i++) {
            const h = 1 + Math.random() * 8;
            const w = 1 + Math.random() * 2;
            const d = 1 + Math.random() * 2;

            const building = new THREE.Mesh(boxGeometry, material);
            building.position.x = (Math.random() - 0.5) * 60;
            building.position.z = (Math.random() - 0.5) * 60;
            building.scale.set(w, h, d);

            cityGroup.add(building);

            // Edges (Wireframe effect)
            const edges = new THREE.EdgesGeometry(new THREE.BoxGeometry(w, h, d));
            edges.translate(0, h / 2, 0); // Re-align edges center
            const line = new THREE.LineSegments(edges, edgeMaterial);
            line.position.copy(building.position);
            cityGroup.add(line);
        }

        // Animated Traffic (Particles moving along paths)
        // Simplified as rotating rings for now
        const ringGeo = new THREE.TorusGeometry(35, 0.2, 8, 50);
        const ringMat = new THREE.MeshBasicMaterial({ color: 0xff007a });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = Math.PI / 2;
        scene.add(ring);


        // Resize Handler
        const handleResize = () => {
            if (!mount) return;
            const w = mount.clientWidth;
            const h = mount.clientHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };
        window.addEventListener('resize', handleResize);

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update(); // only required if damping or auto-rotation enabled

            // Animate ring
            ring.scale.x = 1 + Math.sin(Date.now() * 0.001) * 0.1;
            ring.scale.y = 1 + Math.sin(Date.now() * 0.001) * 0.1;

            renderer.render(scene, camera);
        };
        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            if (mount) mount.removeChild(renderer.domElement);
            renderer.dispose();
            boxGeometry.dispose();
            material.dispose();
        };

    }, []);

    return (
        <div className="city-view-container fade-in">
            <div ref={mountRef} className="canvas-container" />
            <div className="overlay-controls">
                <div className="control-panel glass-panel">
                    <h3>3D VIEW CONTROL</h3>
                    <label className="layer-toggle"><input type="checkbox" defaultChecked /> Buildings</label>
                    <label className="layer-toggle"><input type="checkbox" defaultChecked /> Traffic Nodes</label>
                    <label className="layer-toggle"><input type="checkbox" /> Infrastructure Grid</label>
                </div>
            </div>
        </div>
    );
};

export default City3DView;
