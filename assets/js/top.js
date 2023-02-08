//トップ背景画像の画像切り替え
const bgImg = ['./assets/image/top02.jpg', './assets/image/top03.jpg', './assets/image/top01.jpg'];
const bgiArea = document.querySelector('.sectionTop_backgroundImage');
let bgiNum = 0;
let change_background_image = () => {
    if (bgiNum === bgImg.length) {
        bgiNum = 0;
    };
    bgiArea.style.backgroundImage = 'url(' + bgImg[bgiNum] + ')';
    bgiNum++;
}
window.setInterval(change_background_image, 2500);