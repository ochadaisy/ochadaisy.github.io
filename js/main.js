(function($) {
  var s = skrollr.init({
    forceHeight: false
  });

  var myAge = function() {
    var today = new Date();
    var bday = new Date(1989, 9, 31);
    var age = today.getFullYear() - bday.getFullYear();
    var m = today.getMonth() - bday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < bday.getDate())) {
      age--;
    }
    return age;
  };

  $('.age-num').html(myAge());

  var heartBeat = function() {
    $('.heart.beat').animate({
      fontSize: $('.heart').css('fontSize') == '93px' ? '90px' : '93px'
    }, 300, heartBeat);
  };

  $('.i-am-engineer').hover(function() {
    $(this).find('.heart').addClass('beat');
    heartBeat();
  }, function() {
    $(this).find('.heart').removeClass('beat');
  });
})(jQuery);

