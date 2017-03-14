$('.scroll').jscroll(), (event) => {
  event.preventDefault();

  let request = $.ajax({
    method: 'GET',
    url: '/tweets.json',
    data: { page: click }
  });
  request.done((data) => {
    data.forEach(function(tweet) {
      $('.tweets').append('<li class= tweet>' + '<div class=body>' + tweet.text + '</div>' + '<div class=username>' + tweet.username + '</div>' + '</li>');
    });
  });
});
