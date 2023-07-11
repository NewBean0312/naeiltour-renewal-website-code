var targetLink = document.querySelectorAll(".tab_menu a");
var tabContent = document.querySelectorAll(".tab_content > div");

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
