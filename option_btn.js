const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

var slide = document.querySelectorAll(".slides li"),
  searchBtn = document.querySelector(".search-btn"),
  shuffledArray = 0;

function shuffle() {
  shuffledArray = [...array].sort(() => Math.random() - 0.5);
  console.log(shuffledArray);
}
console.log(array);
// 무작위로 slide 순서 지정
searchBtn.addEventListener("click", function () {
  shuffle();
  for (var i = 0; i < array.length; i++) {
    slide[i].style.order = shuffledArray[i];
  }
});
