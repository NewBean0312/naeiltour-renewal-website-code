// 변수명 지정
var slides = document.querySelector(".slides"),
  slide = document.querySelectorAll(".slides li"),
  currentIdx = 0,
  slideCount = slide.length,
  slideWidth = 396,
  slideMargin = 30,
  prevBtn = document.querySelector(".prev"),
  nextBtn = document.querySelector(".next"),
  // 무작위 배열 변수 설정
  searchBtn = document.querySelector(".search-btn"),
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  shuffledArray = 0;


// 슬라이더 길이 지정
slides.style.width =
  (slideWidth + slideMargin) * slideCount - slideMargin + -5 + "px";

// 이전 버튼 display 제거
prevBtn.classList.add("none");

// 버튼 클릭 시, 슬라이더 위치 이동
function moveSlide(num) {
  slides.style.left = -num * (slideWidth + slideMargin) + "px";
  currentIdx = num;
  updateBtn();
}

// 첫 or 마지막 슬라이더 시, 버튼 제거 및 생성
function updateBtn() {
  console.log(currentIdx);
  if (currentIdx == 0) {
    prevBtn.classList.add("none");
  } else {
    prevBtn.classList.remove("none");
  }

  if (currentIdx == slideCount - 8) {
    nextBtn.classList.add("none");
  } else {
    nextBtn.classList.remove("none");
  }
}

prevBtn.addEventListener("click", function () {
  if (currentIdx > 0) {
    moveSlide(currentIdx - 1);
  }
});

nextBtn.addEventListener("click", function () {
  if (currentIdx < slideCount - 8) {
    moveSlide(currentIdx + 1);
  }
});

// 무작위로 slide 순서 지정
function shuffle() {
  shuffledArray = [...array].sort(() => Math.random() - 0.5);
  console.log(shuffledArray);
}

searchBtn.addEventListener("click", function () {
  shuffle();
  for (var i = 0; i < array.length; i++) {
    slide[i].style.order = shuffledArray[i];
  }
  slides.style.left = 0;
  currentIdx = 0;
  prevBtn.classList.add("none");
  nextBtn.classList.remove("none");
});
