jQuery(document).ready(function($){
    
    console.log('custom');
    
    
    
    
    $.getJSON( "http://localhost:8888/RESTO/resto-wp/wp-content/themes/resto_theme/resto-liste-restaurants.json", function( data ) {
        
        console.log(data);
        
        
      var items = [];
      $.each( data, function( key, val ) {
        items.push( "<li id='" + key + "'>" + val + "</li>" );
      });

        
        
      $( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
      }).appendTo( "body" );
    });

    
    
    
    /* /// HAUTEUR DE SECTIONS ///*/

    var sectionHeight = $(window).height(); //on défini la variable sectionHeight qui enregistre la hauteur de la fenetre
    var headerHeight = $('header').height(); //on défini la variable sectionHeight qui enregistre la hauteur de la fenetre
    
    
    $('.slide').css('height', sectionHeight); //on applique ensuite dans le css des sections une H-min correspondant à la fenetre
    $('.titledate').css('top', headerHeight+40); //on applique ensuite dans le css des sections une H-min correspondant à la fenetre

    /* /// HORIZONTAL SMOOTH SCROLL ///*/
    $(function() {
        $('a').bind('click',function(event){
            var $anchor = $(this);
            /*
            if you want to use one of the easing effects:
            $('html, body').stop().animate({
                scrollLeft: $($anchor.attr('href')).offset().left
            }, 1500,'easeInOutExpo');
             */
            $('html, body').stop().animate({
                scrollLeft: $($anchor.attr('href')).offset().left
            }, 1000);
            event.preventDefault();
        });
    });
    
    /*/// ACTIVE MENU ITEMS ON SCROLL ///*/
    
    $('.dot_nav a').each(function() {
        var link = $(this).attr('href');//on select le href
        link = link.replace('#','');//on enlève le #
    });
    
    $(window).on('scroll', function () {

        /* /// FIXED DATE ///*/ 
        var sectionWidth = $(window).width();
        var sectionWidth = sectionWidth - 70;

        var section1Height = $('header').height();
        var scrollFromLeft = $(window).scrollLeft();

        if(scrollFromLeft > sectionWidth){
            $('.titledate').addClass('date_fixed');
            $('.to-top').animate({
                "right": "0px"
            }, 500);
        }else{
            $('.titledate').removeClass('date_fixed');  
        }

        var cur_pos = $(this).scrollLeft();

        $('.iddate').each(function() {

            var position = $(this).position();
            var left = position.left;
            var idBulle = $(this).attr('id');
            firstPosition = $('#slide_1').position();

            if(cur_pos > firstPosition.left) {
                $('.dot_nav a').each(function() { 
                    var link = $(this).attr('href');//on select le href
                    idNav = link.replace('#','');//on enlève le #
                   if(cur_pos > left && idBulle == idNav){
                        $('.dot_nav a').removeClass('active_dot');
                        $(this).addClass('active_dot'); 
                    }
                });
            }else{
                $('.dot_nav a').removeClass('active_dot');
            }
          });  //each
    });  //on scroll     
});//ready

