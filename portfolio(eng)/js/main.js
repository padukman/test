$(function(){
    
    $('#gnb li a').click(function(){
        console.log("클릭");
        $('#gnb li').removeClass('on');
        $(this).parent().addClass('on');
    });

    new WOW().init();

    // 원형차트
    $(".progress-bar").loading();				// you can load automatically

    $(window).scroll(function(){
        var pos = $(this).scrollTop();
        if(pos>2000){

          $(".progress-bar").loading();		

        }
      });

      $('.grid-item').mouseenter(function(){
        $(this).find('.grid-item_cover').stop().fadeIn(300);

    });
    $('.grid-item').mouseleave(function(){
        $(this).find('.grid-item_cover').stop().fadeOut(300);

    });
    $('.grid').isotope({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          // use element for option
        //   columnWidth: 250,        
        }
      })
      $('#all').click(function(){
        $('.grid').isotope({filter:'.grid-item'});
      })
      $('#web').click(function(){
        $('.grid').isotope({filter:'.webd'});
      })
      $('#dev').click(function(){
        $('.grid').isotope({filter:'.dev'});
      })
      $('#photo').click(function(){
        $('.grid').isotope({filter:'.photo'});
      })
      $('#app').click(function(){
        $('.grid').isotope({filter:'.apps'});
      })

      $('.gmenu li a').click(function(){
        $('gemnu li a').removeClass('on');
        $(this).parent().addClass('on').siblings().removeClass('on');
      })

      //lightbox
      $('#img_box a').lightBox({
        overlayBgColor: '#000',
        overlayOpacity: 0.9,
        imageLoading: 'images/bx_loader.gif',
        imageBtnClose: 'images/lightbox-btn-close.gif',
        imageBtnPrev: 'images/prev.png',
        imageBtnNext: 'images/next.png',
        containerResizeSpeed: 500,
        txtImage: '작품',
        txtOf: '중'
         });


});