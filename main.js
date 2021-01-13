// -----------------Active Navbar Menu---------------
const toggle_Btn = document.querySelector('.navbar__logo__hamberger');
const navbar_menu = document.querySelector('.navbar__menu');

function handleClick() {
    // classList.toggle은 클래스가 없으면 추가하는 것을 의미한다.
    //그 외로 클래스 추가는 classlIST.add, 삭제는 classList.remove로 사용 가능.
    navbar_menu.classList.toggle('active__menu');
}

toggle_Btn.addEventListener('click', handleClick); //여기서 주의점! 절대 handleClick()이라고 쓰지 말 것!
