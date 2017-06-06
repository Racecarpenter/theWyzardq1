$('.results').hide();
$('#searchButton').click(function() {
  $('.front').fadeOut("slow");
  $('.results').fadeIn("slow");
  var api = "http://api.wolframalpha.com/v1/result?appid=WKTJAU-VTRKA29QHA&i=";
  var q = $('#search').val();
  var question = encodeURI(q);
  $.get(api + q, function(data) {
    $('.answer').html(data);
  }).fail(function() {
    $('.answer').html("I'm not sure what you meant");
  });
});
