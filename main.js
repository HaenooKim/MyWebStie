'use strict';

// -----------------Active Navbar Menu---------------
const toggle_Btn = document.querySelector('.navbar__logo__hamberger');
const navbar_menu = document.querySelector('.navbar__menu');

function handle_Toggle_Click() {
    // classList.toggle은 클래스가 없으면 추가하는 것을 의미한다.
    //그 외로 클래스 추가는 classlIST.add, 삭제는 classList.remove로 사용 가능.
    navbar_menu.classList.toggle('active__menu');
}

toggle_Btn.addEventListener('click', handle_Toggle_Click); //여기서 주의점! 절대 handleClick()이라고 쓰지 말 것!


// -----------------Navbar is fixed when scrolling---------------
const navbar = document.querySelector('#navbar');
// getBoundingClientRect()로 위치값을 가져올 수 있다.
const navbarHeight = navbar.getBoundingClientRect().height;

function handle_navbar_Scroll() {
    //window.scrollY를 하면 y축으로 이동한 좌표를 볼 수 있다. 
    //console.log(window.scrollY);
    //console.log(`Height : ${navbarHeight}`);
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar__dark');
        navbar_menu.classList.remove('active__menu');
    } else {
        navbar.classList.remove('navbar__dark');
    }
}

document.addEventListener('scroll', handle_navbar_Scroll);


// -----------------Scroll to section---------------
const navbar_scroll_section = document.querySelector('.navbar__menu');

function handle_item_click(event) {
    //dataset은 html에서 정의한 data-link="~"때문에 이렇게 적는다.
    console.log(event.target.dataset.link); //navbar 메뉴 아이템을 클릭할 때 이벤트 타겟이 출력되는 것을 볼 수 있다.
    const target = event.target;
    const link = target.dataset.link;

    //참고 : https://developer.mozilla.org/ko/docs/Web/API/Element/scrollIntoView
    const scrollTo = document.querySelector(link); //link요소를 가져온다.
    scrollTo.scrollIntoView({behavior: "smooth"});
}

navbar_scroll_section.addEventListener('click', handle_item_click);