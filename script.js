particlesJS.load("particles-js", "particlesjs-config.json");

$(document).ready(() => {
  $("#pl").click(() => {
    $("#pl").css("opacity", "1")
    $("#en").css("opacity", "0.5")
    $("#pl-about").show();
    $("#en-about").hide();
    $("#pl-interests").show();
    $("#en-interests").hide();
    $("#pl-contact").show();
    $("#en-contact").hide();
    $("#pl-links").css('display', 'flex');
    $("#en-links").css('display', 'none');
    $("#pl-tools").css('display', 'flex');
    $("#en-tools").css('display', 'none');

  })
  $("#en").click(() => {
    $("#en").css("opacity", "1")
    $("#pl").css("opacity", "0.5")
    $("#en-about").show()
    $("#pl-about").hide()
    $("#en-interests").show();
    $("#pl-interests").hide();
    $("#en-contact").show();
    $("#pl-contact").hide();
    $("#en-links").css('display', 'flex');
    $("#pl-links").css('display', 'none');
    $("#en-tools").css('display', 'flex');
    $("#pl-tools").css('display', 'none');
  })
})