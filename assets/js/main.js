$(document).ready(function () {
  $(".ct_menu_bar").click(function () {
    $(".ct_navbar").addClass("ct_show");
  });
  $(".ct_close_menu").click(function () {
    $(".ct_navbar").removeClass("ct_show");
  });
});
$(window).on("load", function () {
  $(".ct_loader_main").fadeOut();
});