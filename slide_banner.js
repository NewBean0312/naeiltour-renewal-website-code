var slides = document.querySelector(".slides"),
  slide = document.querySelectorAll(".slides li"),
  currentIdx = 0,
  slideCount = slide.length,
  slideWidth = 396.5,
  slideMargin = 30,
  prevBtn = document.querySelector(".prev"),
  nextBtn = document.querySelector(".next");

slides.style.width =
  (slideWidth + slideMargin) * slideCount - slideMargin + "px";

prevBtn.classList.add("none");

function moveSlide(num) {
  slides.style.left = -num * (slideWidth + slideMargin) + "px";
  currentIdx = num;
  updateBtn();
}

function updateBtn() {
  console.log(currentIdx);
  if (currentIdx == 0) {
    prevBtn.classList.add("none");
  } else {
    prevBtn.classList.remove("none");
  }

  if (currentIdx == slideCount - 4) {
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
