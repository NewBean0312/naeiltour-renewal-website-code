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
function count1(type) {
  // 결과를 표시할 element
  const tab1ResultElement1 = document.getElementById("tab_1_result_1"),
    tab1ResultElement2 = document.getElementById("tab_1_result_2"),
    tab1ResultElement3 = document.getElementById("tab_1_result_3");

  // 현재 화면에 표시된 값
  let tab1Number1 = tab1ResultElement1.innerText,
    tab1Number2 = tab1ResultElement2.innerText,
    tab1Number3 = tab1ResultElement3.innerText;

  // 더하기/빼기
  if (type === "tab1plus1") {
    tab1Number1 = parseInt(tab1Number1) + 1;
  } else if (type === "tab1minus1") {
    tab1Number1 = parseInt(tab1Number1) - 1;
    if (tab1Number1 < 0) {
      tab1Number1 = 0;
    }
  }

  if (type === "tab1plus2") {
    tab1Number2 = parseInt(tab1Number2) + 1;
  } else if (type === "tab1minus2") {
    tab1Number2 = parseInt(tab1Number2) - 1;
    if (tab1Number2 < 0) {
      tab1Number2 = 0;
    }
  }

  if (type === "tab1plus3") {
    tab1Number3 = parseInt(tab1Number3) + 1;
  } else if (type === "tab1minus3") {
    tab1Number3 = parseInt(tab1Number3) - 1;
    if (tab1Number3 < 0) {
      tab1Number3 = 0;
    }
  }

  // 결과 출력
  tab1ResultElement1.innerText = tab1Number1;
  tab1ResultElement2.innerText = tab1Number2;
  tab1ResultElement3.innerText = tab1Number3;
}

function count2(type) {
  // 결과를 표시할 element
  const tab2ResultElement1 = document.getElementById("tab_2_result_1"),
    tab2ResultElement2 = document.getElementById("tab_2_result_2"),
    tab2ResultElement3 = document.getElementById("tab_2_result_3");

  // 현재 화면에 표시된 값
  let tab2Number1 = tab2ResultElement1.innerText,
    tab2Number2 = tab2ResultElement2.innerText,
    tab2Number3 = tab2ResultElement3.innerText;

  // 더하기/빼기
  if (type === "tab2plus1") {
    tab2Number1 = parseInt(tab2Number1) + 1;
  } else if (type === "tab2minus1") {
    tab2Number1 = parseInt(tab2Number1) - 1;
    if (tab2Number1 < 0) {
      tab2Number1 = 0;
    }
  }

  if (type === "tab2plus2") {
    tab2Number2 = parseInt(tab2Number2) + 1;
  } else if (type === "tab2minus2") {
    tab2Number2 = parseInt(tab2Number2) - 1;
    if (tab2Number2 < 0) {
      tab2Number2 = 0;
    }
  }

  if (type === "tab2plus3") {
    tab2Number3 = parseInt(tab2Number3) + 1;
  } else if (type === "tab2minus3") {
    tab2Number3 = parseInt(tab2Number3) - 1;
    if (tab2Number3 < 0) {
      tab2Number3 = 0;
    }
  }

  // 결과 출력
  tab2ResultElement1.innerText = tab2Number1;
  tab2ResultElement2.innerText = tab2Number2;
  tab2ResultElement3.innerText = tab2Number3;
}

function count3(type) {
  // 결과를 표시할 element
  const tab3ResultElement1 = document.getElementById("tab_3_result_1"),
    tab3ResultElement2 = document.getElementById("tab_3_result_2"),
    tab3ResultElement3 = document.getElementById("tab_3_result_3");

  // 현재 화면에 표시된 값
  let tab3Number1 = tab3ResultElement1.innerText,
    tab3Number2 = tab3ResultElement2.innerText,
    tab3Number3 = tab3ResultElement3.innerText;

  // 더하기/빼기
  if (type === "tab3plus1") {
    tab3Number1 = parseInt(tab3Number1) + 1;
  } else if (type === "tab3minus1") {
    tab3Number1 = parseInt(tab3Number1) - 1;
    if (tab3Number1 < 0) {
      tab3Number1 = 0;
    }
  }

  if (type === "tab3plus2") {
    tab3Number2 = parseInt(tab3Number2) + 1;
  } else if (type === "tab3minus2") {
    tab3Number2 = parseInt(tab3Number2) - 1;
    if (tab3Number2 < 0) {
      tab3Number2 = 0;
    }
  }

  if (type === "tab3plus3") {
    tab3Number3 = parseInt(tab3Number3) + 1;
  } else if (type === "tab3minus3") {
    tab3Number3 = parseInt(tab3Number3) - 1;
    if (tab3Number3 < 0) {
      tab3Number3 = 0;
    }
  }

  // 결과 출력
  tab3ResultElement1.innerText = tab3Number1;
  tab3ResultElement2.innerText = tab3Number2;
  tab3ResultElement3.innerText = tab3Number3;
}
