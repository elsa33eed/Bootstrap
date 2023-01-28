/* global s, jquery, alert */
$(document).ready(function () {
  "use strict";
  // nice scroll
  $("html").niceScroll();
});
// show color option
document.querySelector(".option-box .icon").onclick = function () {
  // Toggle-Class Fa-spin For Rotation on-Self
  this.classList.toggle("fa-spin");
  //add class open to .setting box when click on icon
  document.querySelector(".color-option").classList.toggle("open");
};
/*start switching color */
// put list item inside array
const colorList = document.querySelectorAll(".option-box ul li");
// loop on all list item
colorList.forEach((li) => {
  // click on every list item
  li.addEventListener("click", (e) => {
    // set color on root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );

    //set color on local storage
    localStorage.setItem("color_option", e.target.dataset.color);

    // remove active class from all elements
    e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
      ele.classList.remove("active");
    });
    // add active class
    e.target.classList.add("active");
  });
});
/*End switching color */

// loading screen
$(window).load(function () {
  $(".loading .spinner").fadeOut(2000, function () {
    $("body").css("overflow", "auto");
    $(this)
      .parent()
      .fadeOut(1000, function () {
        $(this).remove();
      });
  });
});

// start scroll to top button
let span = document.querySelector(".up");

window.onscroll = function () {
  //   console.log(this.scrollY);
  if (this.scrollY >= 800) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
