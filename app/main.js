const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
    const start = async() => {
        const mindarThree = new window.MINDAR.IMAGE.MindARThree({
            container: document.body,
            imageTargetSrc: '../assets/targets/target.mind'
        });
        
        const {renderer, scene, camera} = mindarThree;

        const video = document.getElementById( 'video' );

        const videoTexture = new THREE.VideoTexture( video );

        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.MeshBasicMaterial({map: videoTexture});
        const plane = new THREE.Mesh(geometry, material);
    
        const anchor = mindarThree.addAnchor(0);
        anchor.group.add(plane);
    
        await mindarThree.start();
        
        renderer.setAnimationLoop( () => {
            renderer.render(scene, camera);
        });
    }
    start();
});