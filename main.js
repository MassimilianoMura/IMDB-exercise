$('form').submit(function (e){
  e.preventDefault();

  var movie = $('#movie').val();
  console.log(movie);

  $.getJSON('http://www.omdbapi.com/?t=' + movie + '&y=&plot=short&r=json', function (data) {
    $('#year').append(data.Year);
    $('#director').append(data.Director);
    $('#poster').attr("src", data.Poster);
    });
});


