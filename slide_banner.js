// 변수명 지정
var slides = document.querySelector(".slides"),
  slide = document.querySelectorAll(".slides li"),
  currentIdx = 0,
  slideCount = slide.length,
  slideWidth = 396,
  slideMargin = 30,
  prevBtn = document.querySelector(".prev"),
  nextBtn = document.querySelector(".next");


// 슬라이더 길이 지정
slides.style.width =
  (slideWidth + slideMargin) * slideCount - slideMargin + (-5)+ "px";

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

  if (currentIdx == slideCount - 3) {
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
  if (currentIdx < slideCount - 3) {
    moveSlide(currentIdx + 1);
  }
});
