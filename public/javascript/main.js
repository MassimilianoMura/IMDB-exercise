$('form').submit(function (e){
  e.preventDefault();

  var movie = $('#movie').val();

  $.getJSON('http://www.omdbapi.com/?t=' + movie + '&y=&plot=short&r=json', function (data) {
    $('#year').html(data.Year);
    $('#director').html(data.Director);
    $('#poster').attr("src", data.Poster);
    });
});


