$('.results').hide();
$('form').submit(function(e) {
  e.preventDefault();
  $('.front').fadeOut("slow");
  $('.results').fadeIn("slow");
  var api = "http://api.wolframalpha.com/v1/result?appid=WKTJAU-VTRKA29QHA&i=";
  var q = $('#search').val();
  var question = encodeURI(q);
  $.get(api + q, function(data) {
    if (data.includes("|")) {
      $('.answer').html("I'm not sure what you mean");
    } else {
      console.log(data);
      $('.answer').html(data);
    }
  }).fail(function() {
    $('.answer').html("I'm not sure what you mean");
    console.log(data);
  });
});
