

  var swiper = new Swiper('.mySwiper-2', {
    centeredSlides: true,
    slidesPerView: 4,
    loop: true,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
               delay: 2000,
           },
  });
  
  var swiper = new Swiper('.mySwiper', {
    centeredSlides: true,
    slidesPerView: 2,
    loop: true,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
               delay: 2000,
           },
  });


  var swiper = new Swiper('.tSwiper-2', {
    centeredSlides: true,
    slidesPerView: 4,
    loop: true,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
               delay: 2000,
           },
  });
  
  var swiper = new Swiper('.tSwiper', {
    centeredSlides: true,
    slidesPerView: 2,
    loop: true,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
               delay: 2000,
           },
  });

// timer starts

  const countDownClock = (number = 100, format = 'seconds') => {

    const d = document;
    const daysElement = d.querySelector('.days');
    const hoursElement = d.querySelector('.hours');
    const minutesElement = d.querySelector('.minutes');
    const secondsElement = d.querySelector('.seconds');
    let countdown;
    convertFormat(format);
  
  
    function convertFormat(format) {
      switch (format) {
        case 'seconds':
          return timer(number);
        case 'minutes':
          return timer(number * 60);
        case 'hours':
          return timer(number * 60 * 60);
        case 'days':
          return timer(number * 60 * 60 * 24);}
  
    }
  
    function timer(seconds) {
      const now = Date.now();
      const then = now + seconds * 1000;
  
      countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
  
        if (secondsLeft <= 0) {
          clearInterval(countdown);
          return;
        };
  
        displayTimeLeft(secondsLeft);
  
      }, 1000);
    }
  
    function displayTimeLeft(seconds) {
      daysElement.textContent = Math.floor(seconds / 86400);
      hoursElement.textContent = Math.floor(seconds % 86400 / 3600);
      minutesElement.textContent = Math.floor(seconds % 86400 % 3600 / 60);
      secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
    }
  };
  

  countDownClock(20, 'days');


  var tabs = $('.tab-nav').find('a'),
   tabContents = $('#content-tabs').children('.content-tab');

// Switch Tab Handler
tabs.on('click', function(e) {
   e.preventDefault();
   var contentTab = $(this).attr('href');
   //tabs btn
   tabs.removeClass('open');
   $(this).addClass('open');
   //tabs content
   tabContents.removeClass('open');
   $(contentTab).addClass('open');
});



// security starts

// prevent right click

document.addEventListener
("contextmenu", function(e)
{
  e.preventDefault()
},false)
  