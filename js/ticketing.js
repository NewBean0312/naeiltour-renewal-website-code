// aside js
document.addEventListener("DOMContentLoaded", function () {
  const quickMenu = document.querySelector(".quick_menu");
  const quickBtn = document.querySelector(".quick_btn");

  quickBtn.addEventListener("click", function () {
    quickMenu.classList.toggle("open");
  });
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

// tab_banner js
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

// passenger_popup_count js
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

/* tab1-calendar */
function tab1Calendar() {
  const init = {
    monList: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    dayList: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    today: new Date(),
    monForChange: new Date().getMonth(),
    activeDate: new Date(),
    getFirstDay: (yy, mm) => new Date(yy, mm, 1),
    getLastDay: (yy, mm) => new Date(yy, mm + 1, 0),
    nextMonth: function () {
      let d = new Date();
      d.setDate(1);
      d.setMonth(++this.monForChange);
      this.activeDate = d;
      return d;
    },
    prevMonth: function () {
      let d = new Date();
      d.setDate(1);
      d.setMonth(--this.monForChange);
      this.activeDate = d;
      return d;
    },
    addZero: (num) => (num < 10 ? "0" + num : num),
    activeDTag: null,
    getIndex: function (node) {
      let index = 0;
      while ((node = node.previousElementSibling)) {
        index++;
      }
      return index;
    },
  };
  
  const $calBody = document.querySelector(".tab1-cal-body");
  const $btnNext = document.querySelector(".tab1-btn-cal.next");
  const $btnPrev = document.querySelector(".tab1-btn-cal.prev");
  
  /**
   * @param {number} date
   * @param {number} dayIn
   */
  function loadDate(date, dayIn) {
    document.querySelector(".tab1-cal-date").textContent = date;
    document.querySelector(".tab1-cal-day").textContent = init.dayList[dayIn];
  }
  
  /**
   * @param {date} fullDate
   */
  function loadYYMM(fullDate) {
    let yy = fullDate.getFullYear();
    let mm = fullDate.getMonth();
    let firstDay = init.getFirstDay(yy, mm);
    let lastDay = init.getLastDay(yy, mm);
    let markToday; // for marking today date
  
    if (mm === init.today.getMonth() && yy === init.today.getFullYear()) {
      markToday = init.today.getDate();
    }
  
    document.querySelector(".tab1-cal-month").textContent = init.monList[mm];
    document.querySelector(".tab1-cal-year").textContent = yy;
  
    let trtd = "";
    let startCount;
    let countDay = 0;
    for (let i = 0; i < 6; i++) {
      trtd += "<tr>";
      for (let j = 0; j < 7; j++) {
        if (i === 0 && !startCount && j === firstDay.getDay()) {
          startCount = 1;
        }
        if (!startCount) {
          trtd += "<td>";
        } else {
          let fullDate =
            yy + "." + init.addZero(mm + 1) + "." + init.addZero(countDay + 1);
          trtd += '<td class="day';
          trtd += markToday && markToday === countDay + 1 ? ' today" ' : '"';
          trtd += ` data-date="${countDay + 1}" data-fdate="${fullDate}">`;
        }
        trtd += startCount ? ++countDay : "";
        if (countDay === lastDay.getDate()) {
          startCount = 0;
        }
        trtd += "</td>";
      }
      trtd += "</tr>";
    }
    $calBody.innerHTML = trtd;
  }
  
  /**
   * @param {string} val
   */
  function createNewList(val) {
    let id = new Date().getTime() + "";
    let yy = init.activeDate.getFullYear();
    let mm = init.activeDate.getMonth() + 1;
    let dd = init.activeDate.getDate();
    const $target = $calBody.querySelector(`.day[data-date="${dd}"]`);
  
    let date = yy + "." + init.addZero(mm) + "." + init.addZero(dd);
  
    let eventData = {};
    eventData["date"] = date;
    eventData["memo"] = val;
    eventData["complete"] = false;
    eventData["id"] = id;
    init.event.push(eventData);
    $todoList.appendChild(createLi(id, val, date));
  }
  
  loadYYMM(init.today);
  loadDate(init.today.getDate(), init.today.getDay());
  
  $btnNext.addEventListener("click", () => loadYYMM(init.nextMonth()));
  $btnPrev.addEventListener("click", () => loadYYMM(init.prevMonth()));
  
  $calBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("day")) {
      if (init.activeDTag) {
        init.activeDTag.classList.remove("day-active");
      }
      let day = Number(e.target.textContent);
      loadDate(day, e.target.cellIndex);
      e.target.classList.add("day-active");
      init.activeDTag = e.target;
      init.activeDate.setDate(day);
      reloadTodo();
    }
  });
}

/* tab2-calendar */
function tab2Calendar() {
  const init = {
    monList: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    dayList: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    today: new Date(),
    monForChange: new Date().getMonth(),
    activeDate: new Date(),
    getFirstDay: (yy, mm) => new Date(yy, mm, 1),
    getLastDay: (yy, mm) => new Date(yy, mm + 1, 0),
    nextMonth: function () {
      let d = new Date();
      d.setDate(1);
      d.setMonth(++this.monForChange);
      this.activeDate = d;
      return d;
    },
    prevMonth: function () {
      let d = new Date();
      d.setDate(1);
      d.setMonth(--this.monForChange);
      this.activeDate = d;
      return d;
    },
    addZero: (num) => (num < 10 ? "0" + num : num),
    activeDTag: null,
    getIndex: function (node) {
      let index = 0;
      while ((node = node.previousElementSibling)) {
        index++;
      }
      return index;
    },
  };
  
  const $calBody = document.querySelector(".tab2-cal-body");
  const $btnNext = document.querySelector(".tab2-btn-cal.next");
  const $btnPrev = document.querySelector(".tab2-btn-cal.prev");
  
  /**
   * @param {number} date
   * @param {number} dayIn
   */
  function loadDate(date, dayIn) {
    document.querySelector(".tab2-cal-date").textContent = date;
    document.querySelector(".tab2-cal-day").textContent = init.dayList[dayIn];
  }
  
  /**
   * @param {date} fullDate
   */
  function loadYYMM(fullDate) {
    let yy = fullDate.getFullYear();
    let mm = fullDate.getMonth();
    let firstDay = init.getFirstDay(yy, mm);
    let lastDay = init.getLastDay(yy, mm);
    let markToday; // for marking today date
  
    if (mm === init.today.getMonth() && yy === init.today.getFullYear()) {
      markToday = init.today.getDate();
    }
  
    document.querySelector(".tab2-cal-month").textContent = init.monList[mm];
    document.querySelector(".tab2-cal-year").textContent = yy;
  
    let trtd = "";
    let startCount;
    let countDay = 0;
    for (let i = 0; i < 6; i++) {
      trtd += "<tr>";
      for (let j = 0; j < 7; j++) {
        if (i === 0 && !startCount && j === firstDay.getDay()) {
          startCount = 1;
        }
        if (!startCount) {
          trtd += "<td>";
        } else {
          let fullDate =
            yy + "." + init.addZero(mm + 1) + "." + init.addZero(countDay + 1);
          trtd += '<td class="day';
          trtd += markToday && markToday === countDay + 1 ? ' today" ' : '"';
          trtd += ` data-date="${countDay + 1}" data-fdate="${fullDate}">`;
        }
        trtd += startCount ? ++countDay : "";
        if (countDay === lastDay.getDate()) {
          startCount = 0;
        }
        trtd += "</td>";
      }
      trtd += "</tr>";
    }
    $calBody.innerHTML = trtd;
  }
  
  /**
   * @param {string} val
   */
  function createNewList(val) {
    let id = new Date().getTime() + "";
    let yy = init.activeDate.getFullYear();
    let mm = init.activeDate.getMonth() + 1;
    let dd = init.activeDate.getDate();
    const $target = $calBody.querySelector(`.day[data-date="${dd}"]`);
  
    let date = yy + "." + init.addZero(mm) + "." + init.addZero(dd);
  
    let eventData = {};
    eventData["date"] = date;
    eventData["memo"] = val;
    eventData["complete"] = false;
    eventData["id"] = id;
    init.event.push(eventData);
    $todoList.appendChild(createLi(id, val, date));
  }
  
  loadYYMM(init.today);
  loadDate(init.today.getDate(), init.today.getDay());
  
  $btnNext.addEventListener("click", () => loadYYMM(init.nextMonth()));
  $btnPrev.addEventListener("click", () => loadYYMM(init.prevMonth()));
  
  $calBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("day")) {
      if (init.activeDTag) {
        init.activeDTag.classList.remove("day-active");
      }
      let day = Number(e.target.textContent);
      loadDate(day, e.target.cellIndex);
      e.target.classList.add("day-active");
      init.activeDTag = e.target;
      init.activeDate.setDate(day);
      reloadTodo();
    }
  });
}

/* tab3-calendar */
function tab3_1Calendar() {
  const init = {
    monList: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    dayList: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    today: new Date(),
    monForChange: new Date().getMonth(),
    activeDate: new Date(),
    getFirstDay: (yy, mm) => new Date(yy, mm, 1),
    getLastDay: (yy, mm) => new Date(yy, mm + 1, 0),
    nextMonth: function () {
      let d = new Date();
      d.setDate(1);
      d.setMonth(++this.monForChange);
      this.activeDate = d;
      return d;
    },
    prevMonth: function () {
      let d = new Date();
      d.setDate(1);
      d.setMonth(--this.monForChange);
      this.activeDate = d;
      return d;
    },
    addZero: (num) => (num < 10 ? "0" + num : num),
    activeDTag: null,
    getIndex: function (node) {
      let index = 0;
      while ((node = node.previousElementSibling)) {
        index++;
      }
      return index;
    },
  };
  
  const $calBody = document.querySelector(".tab3_1-cal-body");
  const $btnNext = document.querySelector(".tab3_1-btn-cal.next");
  const $btnPrev = document.querySelector(".tab3_1-btn-cal.prev");
  
  /**
   * @param {number} date
   * @param {number} dayIn
   */
  function loadDate(date, dayIn) {
    document.querySelector(".tab3_1-cal-date").textContent = date;
    document.querySelector(".tab3_1-cal-day").textContent = init.dayList[dayIn];
  }
  
  /**
   * @param {date} fullDate
   */
  function loadYYMM(fullDate) {
    let yy = fullDate.getFullYear();
    let mm = fullDate.getMonth();
    let firstDay = init.getFirstDay(yy, mm);
    let lastDay = init.getLastDay(yy, mm);
    let markToday; // for marking today date
  
    if (mm === init.today.getMonth() && yy === init.today.getFullYear()) {
      markToday = init.today.getDate();
    }
  
    document.querySelector(".tab3_1-cal-month").textContent = init.monList[mm];
    document.querySelector(".tab3_1-cal-year").textContent = yy;
  
    let trtd = "";
    let startCount;
    let countDay = 0;
    for (let i = 0; i < 6; i++) {
      trtd += "<tr>";
      for (let j = 0; j < 7; j++) {
        if (i === 0 && !startCount && j === firstDay.getDay()) {
          startCount = 1;
        }
        if (!startCount) {
          trtd += "<td>";
        } else {
          let fullDate =
            yy + "." + init.addZero(mm + 1) + "." + init.addZero(countDay + 1);
          trtd += '<td class="day';
          trtd += markToday && markToday === countDay + 1 ? ' today" ' : '"';
          trtd += ` data-date="${countDay + 1}" data-fdate="${fullDate}">`;
        }
        trtd += startCount ? ++countDay : "";
        if (countDay === lastDay.getDate()) {
          startCount = 0;
        }
        trtd += "</td>";
      }
      trtd += "</tr>";
    }
    $calBody.innerHTML = trtd;
  }
  
  /**
   * @param {string} val
   */
  function createNewList(val) {
    let id = new Date().getTime() + "";
    let yy = init.activeDate.getFullYear();
    let mm = init.activeDate.getMonth() + 1;
    let dd = init.activeDate.getDate();
    const $target = $calBody.querySelector(`.day[data-date="${dd}"]`);
  
    let date = yy + "." + init.addZero(mm) + "." + init.addZero(dd);
  
    let eventData = {};
    eventData["date"] = date;
    eventData["memo"] = val;
    eventData["complete"] = false;
    eventData["id"] = id;
    init.event.push(eventData);
    $todoList.appendChild(createLi(id, val, date));
  }
  
  loadYYMM(init.today);
  loadDate(init.today.getDate(), init.today.getDay());
  
  $btnNext.addEventListener("click", () => loadYYMM(init.nextMonth()));
  $btnPrev.addEventListener("click", () => loadYYMM(init.prevMonth()));
  
  $calBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("day")) {
      if (init.activeDTag) {
        init.activeDTag.classList.remove("day-active");
      }
      let day = Number(e.target.textContent);
      loadDate(day, e.target.cellIndex);
      e.target.classList.add("day-active");
      init.activeDTag = e.target;
      init.activeDate.setDate(day);
      reloadTodo();
    }
  });
}

function tab3_2Calendar() {
  const init = {
    monList: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    dayList: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    today: new Date(),
    monForChange: new Date().getMonth(),
    activeDate: new Date(),
    getFirstDay: (yy, mm) => new Date(yy, mm, 1),
    getLastDay: (yy, mm) => new Date(yy, mm + 1, 0),
    nextMonth: function () {
      let d = new Date();
      d.setDate(1);
      d.setMonth(++this.monForChange);
      this.activeDate = d;
      return d;
    },
    prevMonth: function () {
      let d = new Date();
      d.setDate(1);
      d.setMonth(--this.monForChange);
      this.activeDate = d;
      return d;
    },
    addZero: (num) => (num < 10 ? "0" + num : num),
    activeDTag: null,
    getIndex: function (node) {
      let index = 0;
      while ((node = node.previousElementSibling)) {
        index++;
      }
      return index;
    },
  };
  
  const $calBody = document.querySelector(".tab3_2-cal-body");
  const $btnNext = document.querySelector(".tab3_2-btn-cal.next");
  const $btnPrev = document.querySelector(".tab3_2-btn-cal.prev");
  
  /**
   * @param {number} date
   * @param {number} dayIn
   */
  function loadDate(date, dayIn) {
    document.querySelector(".tab3_2-cal-date").textContent = date;
    document.querySelector(".tab3_2-cal-day").textContent = init.dayList[dayIn];
  }
  
  /**
   * @param {date} fullDate
   */
  function loadYYMM(fullDate) {
    let yy = fullDate.getFullYear();
    let mm = fullDate.getMonth();
    let firstDay = init.getFirstDay(yy, mm);
    let lastDay = init.getLastDay(yy, mm);
    let markToday; // for marking today date
  
    if (mm === init.today.getMonth() && yy === init.today.getFullYear()) {
      markToday = init.today.getDate();
    }
  
    document.querySelector(".tab3_2-cal-month").textContent = init.monList[mm];
    document.querySelector(".tab3_2-cal-year").textContent = yy;
  
    let trtd = "";
    let startCount;
    let countDay = 0;
    for (let i = 0; i < 6; i++) {
      trtd += "<tr>";
      for (let j = 0; j < 7; j++) {
        if (i === 0 && !startCount && j === firstDay.getDay()) {
          startCount = 1;
        }
        if (!startCount) {
          trtd += "<td>";
        } else {
          let fullDate =
            yy + "." + init.addZero(mm + 1) + "." + init.addZero(countDay + 1);
          trtd += '<td class="day';
          trtd += markToday && markToday === countDay + 1 ? ' today" ' : '"';
          trtd += ` data-date="${countDay + 1}" data-fdate="${fullDate}">`;
        }
        trtd += startCount ? ++countDay : "";
        if (countDay === lastDay.getDate()) {
          startCount = 0;
        }
        trtd += "</td>";
      }
      trtd += "</tr>";
    }
    $calBody.innerHTML = trtd;
  }
  
  /**
   * @param {string} val
   */
  function createNewList(val) {
    let id = new Date().getTime() + "";
    let yy = init.activeDate.getFullYear();
    let mm = init.activeDate.getMonth() + 1;
    let dd = init.activeDate.getDate();
    const $target = $calBody.querySelector(`.day[data-date="${dd}"]`);
  
    let date = yy + "." + init.addZero(mm) + "." + init.addZero(dd);
  
    let eventData = {};
    eventData["date"] = date;
    eventData["memo"] = val;
    eventData["complete"] = false;
    eventData["id"] = id;
    init.event.push(eventData);
    $todoList.appendChild(createLi(id, val, date));
  }
  
  loadYYMM(init.today);
  loadDate(init.today.getDate(), init.today.getDay());
  
  $btnNext.addEventListener("click", () => loadYYMM(init.nextMonth()));
  $btnPrev.addEventListener("click", () => loadYYMM(init.prevMonth()));
  
  $calBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("day")) {
      if (init.activeDTag) {
        init.activeDTag.classList.remove("day-active");
      }
      let day = Number(e.target.textContent);
      loadDate(day, e.target.cellIndex);
      e.target.classList.add("day-active");
      init.activeDTag = e.target;
      init.activeDate.setDate(day);
      reloadTodo();
    }
  });
}

tab1Calendar();
tab2Calendar();
tab3_1Calendar();
tab3_2Calendar();

