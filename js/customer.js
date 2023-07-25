// aside js
document.addEventListener("DOMContentLoaded", function () {
  const quickMenu = document.querySelector(".quick_menu");
  const quickBtn = document.querySelector(".quick_btn");

  quickBtn.addEventListener("click", function () {
    quickMenu.classList.toggle("open");
  });
});

// 반응형 햄버거 변수명 지정
let mobileBtn = document.querySelector(".mobile_utill > input"),
  body = document.querySelector("body"),
  mobileBtnCount = 0;

// 반응형 body 스크롤 정지 및 실행
function mobileBtnCountUp() {
  mobileBtnCount++;
}

function mobileBtnCountDown() {
  mobileBtnCount--;
}

mobileBtn.addEventListener("click", function () {
  console.log(mobileBtnCount);
  if (mobileBtnCount == 0) {
    body.style.overflowY = "hidden";
    mobileBtnCountUp();
  } else if (mobileBtnCount == 1) {
    body.style.overflowY = "scroll";
    mobileBtnCountDown();
  }
});

// res_menu btn
const menuWrapper = document.getElementById("menuWrapper");
const resMenuBtn = menuWrapper.querySelector(".res_menu_btn");
const resMenuUl = menuWrapper.querySelector(".res_menu_ul");

resMenuBtn.addEventListener("click", function () {
  if (resMenuUl.style.height === "auto") {
    resMenuUl.style.height = "0";
    resMenuBtn.classList.remove("active");
  } else {
    resMenuUl.style.height = "auto";
    resMenuBtn.classList.add("active");
  }
});

// customer js
let qarea = document.getElementsByClassName("q_area"),
  qtitle = document.getElementsByClassName("q_title"),
  qicon = document.getElementsByClassName("q_icon"),
  qarrow = document.getElementsByClassName("q_arrow");

for (let i = 0; i < qtitle.length; i++) {
  qtitle[i].addEventListener("click", function (e) {
    const isActive = e.currentTarget.parentNode.classList.contains("active");
    for (let j = 0; j < qarea.length; j++) {
      qarea[j].classList.remove("active");
      qicon[j].classList.add("active");
      qarrow[j].classList.add("active");
    }
    if (!isActive) {
      e.currentTarget.parentNode.classList.add("active");
    }
  });
}
