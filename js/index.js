// 변수명 지정
let sections = document.querySelector(".sections"),
  section = document.querySelectorAll(".sections li"),
  currentIndex = 0,
  sectionCount = section.length,
  sectionWidth = 396,
  sectionMargin = 30,
  prevButton = document.querySelector(".prev"),
  nextButton = document.querySelector(".next"),
  // 무작위 배열 변수 설정
  searchBtn = document.querySelector(".search_btn"),
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  shuffledArray = 0,
  mainBg = document.querySelector(".main_container"),
  bgWrap = document.querySelector(".mv_bg_wrap"),
  bgImg = document.querySelectorAll(".mv_bg_wrap > li"),
  mainBtnPrev = document.getElementsByClassName("main_prev")[0], //이전
  mainBtnNext = document.getElementsByClassName("main_next")[0], //다음
  mainImgNum = bgImg.length; // li
let currentBg = 0;

// 모바일 버전 버튼 변수
let mobileBtn = document.querySelector(".mobile_utill > input"),
  body = document.querySelector("body"),
  mobileBtnCount = 0;

// 메인 배경 이미지 슬라이드
// 배경이미지 가로배열
if (mainImgNum > 0) {
  for (let x = 0; x < mainImgNum; x++) {
    bgImg[x].style.left = 100 * x + "%";
  }
}

// 배경화면의 left값 조절하여 넘어가도록
function goBg(idx) {
  bgWrap.style.left = -100 * idx + "%";
  currentBg = idx;
  updateBg();
}

function updateBg() {
  currentBg = currentBg % bgImg.length;
  bgWrap.style.left = -100 * currentBg + "%";
}
mainBtnPrev.addEventListener("click", function (e) {
  e.preventDefault();
  if (currentBg === 0) {
    goBg(bgImg.length - 1);
  } else {
    goBg(currentBg - 1);
  }
});

mainBtnNext.addEventListener("click", function (e) {
  e.preventDefault();
  goBg(currentBg + 1);
});

//텍스트 슬라이드
let sloganWrap = document.querySelector(".slogan_wrap"), //.slider_wrap (ul)
  sloganSlide = sloganWrap.querySelectorAll(".slogan_wrap > li"), //.slide (li)
  sloganslideCount = sloganSlide.length; //slides개수

if (sloganslideCount > 0) {
  for (let i = 0; i < sloganslideCount; i++) {
    sloganSlide[i].style.left = 100 * i + "%";
  }
}
mainBtnPrev.addEventListener("click", function (event) {
  event.preventDefault();
  if (currentIndex === 0) {
    goToSlide(sloganslideCount - 1);
  } else {
    goToSlide(currentIndex - 1);
  }
});

mainBtnNext.addEventListener("click", function (event) {
  event.preventDefault();
  goToSlide(currentIndex + 1);
});
// 슬라이드 넘어가게 하는 함수
function goToSlide(index) {
  sloganWrap.style.left = -100 * index + "%";
  currentIndex = index;
  updateSlide();
}

function updateSlide() {
  currentIndex = currentIndex % sloganslideCount;
  sloganWrap.style.left = -100 * currentIndex + "%";
}

// 모바일 버전 body 스크롤 정지 및 실행
function mobileBtnCountUp() {
  mobileBtnCount++;
}

function mobileBtnCountDown() {
  mobileBtnCount--;
}

mobileBtn.addEventListener("click", function () {
  console.log(mobileBtnCount)
  if (mobileBtnCount == 0) {
    body.style.overflow = "hidden";
    mobileBtnCountUp();
  } else if (mobileBtnCount == 1) {
    body.style.overflow = "scroll";
    mobileBtnCountDown();
  }
});

// 슬라이더 길이 지정
sections.style.width =
  (sectionWidth + sectionMargin) * sectionCount - sectionMargin + -5 + "px";

// 이전 버튼 display 제거
prevButton.classList.add("none");

// 버튼 클릭 시, 슬라이더 위치 이동
function movesection(num) {
  sections.style.left = -num * (sectionWidth + sectionMargin) + "px";
  currentIndex = num;
  updateBtn();
}

// 첫 or 마지막 슬라이더 시, 버튼 제거 및 생성
function updateBtn() {
  if (currentIndex == 0) {
    prevButton.classList.add("none");
  } else {
    prevButton.classList.remove("none");
  }

  if (currentIndex == sectionCount - 8) {
    nextButton.classList.add("none");
  } else {
    nextButton.classList.remove("none");
  }
}

prevButton.addEventListener("click", function () {
  if (currentIndex > 0) {
    movesection(currentIndex - 1);
  }
});

nextButton.addEventListener("click", function () {
  if (currentIndex < sectionCount - 8) {
    movesection(currentIndex + 1);
  }
});

// 무작위로 section 순서 지정
function shuffle() {
  shuffledArray = [...array].sort(() => Math.random() - 0.5);
  console.log(shuffledArray);
}

searchBtn.addEventListener("click", function () {
  shuffle();
  for (let i = 0; i < array.length; i++) {
    section[i].style.order = shuffledArray[i];
  }
  sections.style.left = 0;
  currentIdx = 0;
  prevBtn.classList.add("none");
  nextBtn.classList.remove("none");
});

//best변수
let slides = document.querySelector(".slides"), //.slides
  slide = slides.querySelectorAll(".slides li"), //.slides li
  slideCount = slide.length, //.slides li의 개수
  orgslideCount = slide.length, //.slides li의 개수
  prevBtn = document.querySelector(".best_prev"), //이전버튼
  nextBtn = document.querySelector(".best_next"), //다음버튼
  slideWidth = 350, //슬라이드 너비
  slideMargin = 10, //마진값
  currentIdx = 0; //초기값

//긴급모집 변수
let res_btn = document.querySelectorAll(".res_menu a"),
  res_content = document.querySelectorAll(".res_content>div");
console.log(res_content);

markeClone();
function markeClone() {
  //요소 뒤에추가
  for (let i = 0; i < slideCount; i++) {
    let cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone"); //선택요소 뒤에 클래스명 추가
    slides.append(cloneSlide); //선택요소 내부 끝부분에 추가
  }
  //앞에 요소 추가
  for (let j = orgslideCount - 1; j >= 0; j--) {
    let cloneSlide = slide[j].cloneNode(true);
    cloneSlide.classList.add("clone"); //선택요소 뒤에 클래스명 추가
    slides.prepend(cloneSlide); //선택요소 내부 시작 부분 에서
  }
}
setPos();
//슬라이드 중앙배치
function setPos() {
  let initialTrans = -(slideWidth + slideMargin) * orgslideCount;
  //let initialTrans = -(200 + 30 )* 슬라이드개수;
  console.log(initialTrans);
  slides.style.transform = "translateX(" + initialTrans + "px)";
}

// 슬라이드 이동, 리셋, 애니메이션
function moveSlide(num) {
  slides.style.left = -num * (slideWidth + slideMargin) + "px";
  currentIdx = num;
  if (orgslideCount == currentIdx || currentIdx == -orgslideCount)
    setTimeout(function () {
      slides.style.left = "0px";
      currentIdx = 0;
    }, 1000);
}
//버튼을 클릭시
nextBtn.addEventListener("click", function () {
  moveSlide(currentIdx + 1);
});
prevBtn.addEventListener("click", function () {
  moveSlide(currentIdx - 1);
});

/* 
clearInterval() 슬라이드 멈추기
setInterval() 일정시간마다 실행
*/
//clearInterval()일정시간마다 자동으로 moveSlide슬라이드 움직임
//마우스가 slides에 올라가면 슬라이드 멈춤
//마우스가 slides에서 떠나면 슬라이드 재생

let timer = undefined;
//움직이는 함수
function autoSlide() {
  if (timer == undefined) {
    timer = setInterval(function () {
      moveSlide(currentIdx + 1);
    }, 1000);
  }
}
autoSlide();
//멈추기 함수
function stopSlide() {
  clearInterval(timer);
  timer = undefined;
}

//마우스 엔터, 리브 이벤트
slides.addEventListener("mouseenter", function () {
  stopSlide();
});
slides.addEventListener("mouseleave", function () {
  autoSlide();
});
prevBtn.addEventListener("mouseenter", function () {
  stopSlide();
});
prevBtn.addEventListener("mouseleave", function () {
  autoSlide();
});
nextBtn.addEventListener("mouseenter", function () {
  stopSlide();
});
nextBtn.addEventListener("mouseleave", function () {
  autoSlide();
});

//긴급모객
for (let i = 0; i < res_btn.length; i++) {
  res_btn[i].addEventListener("click", function (e) {
    e.preventDefault();
    let orgTarget = e.target.getAttribute("href"),
      tabTarget = orgTarget.replace("#", "");
    for (let a = 0; a < res_content.length; a++) {
      res_content[a].style.display = "none";
    }
    document.getElementById(tabTarget).style.display = "block";
    for (let j = 0; j < res_btn.length; j++) {
      res_btn[j].classList.remove("active_menu");
      e.target.classList.add("active_menu");
    }
  });
}
document.getElementById("res_menu1").style.display = "block";
