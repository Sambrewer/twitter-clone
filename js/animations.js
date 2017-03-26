$(document).ready(function() {
  $('#char-count').hide();
  $('#tweet-submit').hide();
  $(".main-tweet").on("click", function() {
    $('#char-count').show();
    $('#tweet-submit').show();
    $('.main-tweet').height('5em');
    });
    function updateCount ()
      {
          var tweetlength = jQuery(".main-tweet").val();

         if(tweetlength.length < 140) {
         	   jQuery("#char-count").html(140 - tweetlength.length);

             if (tweetlength.length >= 130) {
               $("#char-count").css('color', 'red');
             } else if (tweetlength.length > 0 && tweetlength.length < 130){
               $('#char-count').css('color', 'black')
             }
         } else {
             jQuery("#char-count").html(0);
      	   jQuery(".main-tweet").val(tweetlength.substring(0,140));
         }
      }

      $(".main-tweet").keyup(function () {
          updateCount();
      });
      $(".main-tweet").keypress(function () {
          updateCount();
      });
      $(".main-tweet").keydown(function () {
          updateCount();
      });
      function postTweet() {
        // $('#tweet-submit').on('click', function() {
        console.log('hello');
          $('.tweet').clone().prepend('stream');
          $('.avatar').clone().prop('src', 'img/alagoon.jpg');
          $('.fullname').clone().html('Your name here');
          $('.tweet-text').clone().html('.main-tweet').val();
        // });
        $('#tweet-submit').on('click', postTweet());
      }




      // $('#tweet-submit').on('click', function() {
      //   if ($('.main-tweet').val()) {
      //     $('.tweet').prepend('.tweet', $('.tweet-text').innerHTML($('.main-tweet').val()));
      //     $('.main-tweet').val('');
      //   }
      //
      // })
})
