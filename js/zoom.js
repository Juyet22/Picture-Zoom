let container = document.querySelector('.container ');
let originPic = document.querySelector('#origin-picture');
let zoom = document.querySelector('.zoomglass');
let bigImg = document.querySelector('.zoomglass img');

// 放大镜移动
container.addEventListener('mousemove', e => {
    // 为了应对图片高度过大情况 用pageX，Y 获取带滚动条时距离页面边缘距离
    let mouseX = e.pageX;
    let mouseY = e.pageY;
    let imageX = container.offsetLeft;
    let imageY = container.offsetTop;
    let zoomWidth = zoom.offsetWidth;
    let zoomHeight = zoom.offsetHeight;
    
    // 上下移动边界
    let zoomMaxleft = container.offsetWidth - zoomWidth / 2;
    let zoomMaxTop = container.offsetHeight - zoomHeight / 2;

    // 放大镜偏移距离
    let zoomLeft = mouseX - imageX - zoomWidth / 2 ;
    let zoomTop = mouseY - imageY - zoomHeight / 2 ;
    
    if (zoomLeft <= - zoomWidth / 2) zoomLeft = - zoomWidth / 2;
    if (zoomTop <= - zoomHeight / 2) zoomTop = - zoomHeight / 2;
    if (zoomLeft >= zoomMaxleft) zoomLeft = zoomMaxleft;
    if (zoomTop >= zoomMaxTop) zoomTop = zoomMaxTop;
    zoom.style.left = zoomLeft + 'px' ;
    zoom.style.top = zoomTop + 'px';

    // 放大镜图片位置 根据比例  放大镜中心点偏移位置/图片宽度 相同

    // 此处放大镜偏移位置 需要用clientWidth 不包含它的边框宽度 这样在边界处放大不会有图片的偏移

    let bigImgLeft = (zoomLeft + zoomWidth / 2) / container.offsetWidth * bigImg.offsetWidth - zoom.clientWidth / 2;
    let bigImgTop = (zoomTop + zoomHeight / 2) / container.offsetHeight * bigImg.offsetHeight - zoom.clientHeight / 2;
    bigImg.style.left = - bigImgLeft + 'px';
    bigImg.style.top = - bigImgTop + 'px';
    
})

container.addEventListener('mouseover', _ => {
    zoom.classList.remove('hidden');
})

container.addEventListener('mouseout', _ => {
    zoom.classList.add('hidden')
})
