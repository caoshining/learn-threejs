import { useEffect } from 'react';
import * as THREE from 'three';

const Page = () => {
  useEffect(() => {
    console.log(THREE);
    const canvas = document.getElementById('c');
    const height = window.height
    const width = window.width
    // 创建3D场景
    const scene = new THREE.Scene();
    // 创建立方体
    const cube = new THREE.BoxGeometry(1, 1, 1);
    // 设置立方体表面颜色
    const material = new THREE.MeshBasicMaterial({
      color: '#1890ff',
    });
    // 生成物体对象
    const mesh = new THREE.Mesh(cube, material);

    scene.add(mesh);

    // 创建观察场景的相机
    const camera = new THREE.PerspectiveCamera(75, width / height); // 透视相机

    // 设置相机位置
    camera.position.set(2, 2, 3); // 相机默认的坐标是在(0,0,0);
    // 设置相机方向
    camera.lookAt(scene.position); // 将相机朝向场景
    // 将相机添加到场景中
    scene.add(camera);

    // 创建渲染器
    const renderer = new THREE.WebGLRenderer({
      canvas,
    });

    // 设置渲染器大小
    renderer.setSize(window.innerWidth, window.innerHeight);
    // 执行渲染
    renderer.render(scene, camera);
  }, []);

  return <>
    start your project
    <canvas id="c" />;
  </>
};

export default Page;
