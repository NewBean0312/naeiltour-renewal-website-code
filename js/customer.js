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
