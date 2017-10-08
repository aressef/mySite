function getQuote() {
  $.ajax({
    url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?',
    dataType: 'jsonp',
    type: 'GET',
    success: function (data) {
      var content = data[0].content;
      var author = data[0].title;
      var quoteCleaner = document.createElement("TEXTAREA");
      quoteCleaner.innerHTML = content;
      var quoteClean = quoteCleaner.value;
      var quote = quoteClean.replace('<p>','').replace('</p>','');
      quote = quote.slice(0,-1);

      if (quote.includes("<") == true) {
        getQuote();
      }

      $('.quote').text("\"" + quote + "\"");
      $('.author').text(" -" + author);
    },
    cache: false
  });
}

$(document).ready(function() {
  getQuote();
});

$('.newQuote').on('click', function(e) {
  getQuote();
});

$('.tweet').on('click', function(e) {
  e.preventDefault();
  var quote = $('.quote').text();
  var author = $('.author').text();
  // if (quote.length + author.length > )

  var tweetQuote = encodeURIComponent(quote);
  var tweetAuthor = encodeURIComponent(author);

  window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + $('.quote').text() + $('.author').text());
  console.log($('.quote').text() + $('.author').text());
});
