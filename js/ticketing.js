var targetLink = document.querySelectorAll(".tab_menu a"),
  tabContent = document.querySelectorAll(".tab_content > div");

for (var i = 0; i < targetLink.length; i++) {
  targetLink[i].addEventListener("click", function (e) {
    // preventDefault() : 이벤트의 기본 동작을 취소하는 메서드
    e.preventDefault();

    // getAttribute() : HTML 요소의 속성 값을 가져오는 메서드
    var orgTarget = e.target.getAttribute("href");
    console.log(orgTarget);

    // replace(a,b) : a의 값을 b로 바꿈
    var tabTerget = orgTarget.replace("#", "");

    // 처음에 모든 tab이 보이지 않게 함
    for (var j = 0; j < tabContent.length; j++) {
      tabContent[j].style.display = "none";
    }

    // 선택된 tab에 display: "block"를 주어 보이게 함
    document.getElementById(tabTerget).style.display = "block";

    // 클릭 시, 기존에 있던 요소에 active클래스를 없애고 클릭된 요소에 추가함
    for (var k = 0; k < targetLink.length; k++) {
      targetLink[k].classList.remove("active");
      e.target.classList.add("active");
    }
  });
}

// 시작 시, 처음 tab은 보이게 함
document.getElementById("tab1").style.display = "block";

// passenger 팝업 창 count
function count(type) {
  // 결과를 표시할 element
  const resultElement1 = document.getElementById("result_1"),
    resultElement2 = document.getElementById("result_2"),
    resultElement3 = document.getElementById("result_3");

  // 현재 화면에 표시된 값
  let number1 = resultElement1.innerText,
    number2 = resultElement2.innerText,
    number3 = resultElement3.innerText;

  // 더하기/빼기
  if (type === "plus1") {
    number1 = parseInt(number1) + 1;
  } else if (type === "minus1") {
    number1 = parseInt(number1) - 1;
    if (number1 < 0) {
      number1 = 0;
    }
  }

  if (type === "plus2") {
    number2 = parseInt(number2) + 1;
  } else if (type === "minus2") {
    number2 = parseInt(number2) - 1;
    if (number2 < 0) {
      number2 = 0;
    }
  }

  if (type === "plus3") {
    number3 = parseInt(number3) + 1;
  } else if (type === "minus3") {
    number3 = parseInt(number3) - 1;
    if (number3 < 0) {
      number3 = 0;
    }
  }

  // 결과 출력
  resultElement1.innerText = number1;
  resultElement2.innerText = number2;
  resultElement3.innerText = number3;
}
