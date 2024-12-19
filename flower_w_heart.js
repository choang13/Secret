onload = () => {
  setTimeout(() => {
    document.body.classList.remove("container");
  }, 0); 
};

$(document).ready(function() {
  $(".container")
    .mouseenter(function() {
      $(".card").stop().animate({ top: "-90px" }, "slow");
    })
    .mouseleave(function() {
      $(".card").stop().animate({ top: 0 }, "slow");
    });
});