//ハンバーガーメニュー
const hamburger = document.querySelector('.hamburger');
const body = document.querySelector('body');
const topLogo = document.querySelector('.topLogo_img');
const instagramIcon = document.querySelector('.header_instagramIcon');
hamburger.addEventListener('click', () => {
    body.classList.toggle('active');
    if (body.classList.contains('active')) {
        topLogo.src = '/assets/image/sixhelmets-quality-clothes_white.svg';
        instagramIcon.src = '/assets/image/instagram_icon_white.svg';
    } else {
        topLogo.src = '/assets/image/sixhelmets-quality-clothes.svg';
        instagramIcon.src = '/assets/image/instagram_icon.svg';
    }
});

// スクロールトップボタン
const pageTopBtn = document.querySelector
    ('#topButton');
pageTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// スクロールしたら一定の高さで表示、非表示
let bp = 1000;
const mediaQueryList = window.matchMedia('(min-width: 768px)');

const listener = (e) => {
    if (e.matches) {
        bp = 1500;
    } else {
        bp = 200;
    }
};

mediaQueryList.addEventListener("change", listener);

listener(mediaQueryList);

window.addEventListener('scroll', (Event) => {
    const osBtn = document.querySelector('#onlineShopButton');
    const bgLogo = document.querySelector('.backgroundLogo');
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');
    //フッターの高さ
    const footerHeight = footer.scrollHeight;
    //documentのスクロールできる要素
    const scrollElement = document.scrollingElement;
    //document全体の高さ
    const scrollTopValue = scrollElement.scrollHeight;
    const headerShow = scrollTopValue - footerHeight - 1000;
    console.log(window.scrollY);
    if (1000 < window.scrollY) {
        pageTopBtn.classList.add('show');
        osBtn.classList.add('show');
    } else {
        pageTopBtn.classList.remove('show');
        osBtn.classList.remove('show');
    }
    if (bp < window.scrollY) {
        bgLogo.classList.add('show');
    } else {
        bgLogo.classList.remove('show');
    }
    if (headerShow < window.scrollY) {
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
    }
});

//スクロールしたらふわっと出てくる
const targetElement = document.querySelectorAll(".animation-target");
document.addEventListener("scroll", () => {
    for (let i = 0; i < targetElement.length; i++) {
        const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .2;
        if (window.innerHeight > getElementDistance) {
            targetElement[i].classList.add("ease-show");
        }
    }
});

//ページの読み込みが完了した後に要素を表示
const load = document.querySelectorAll(".load-function");
window.addEventListener("load", () => {
    for (let j = 0; j < load.length; j++) {
        load[j].classList.add("ease-show");
    }
});


