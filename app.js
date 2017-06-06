$('.results').hide();
$('form').submit(function(e) {
  e.preventDefault();
  $('.front').fadeOut("slow");
  $('.results').fadeIn("slow");
  var api = "http://api.wolframalpha.com/v1/result?appid=WKTJAU-VTRKA29QHA&i=";
  var q = $('#search').val();
  var question = encodeURI(q);
  $.get(api + q, function(data) {
    console.log(data);
    if (data.includes('|')) {
      $('.answer').html("I'm not sure what you meant");
    } else {
      $('.answer').html(data);
    }
  }).fail(function() {
    $('.answer').html("I'm not sure what you meant");
    console.log(data);
  });
});
