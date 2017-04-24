jQuery(document).ready(function($){
    
    
    
    if( $(window).width(); > 400 ){
    
        console.log('custompage');

        /* /// HAUTEUR DE SECTIONS ///*/

        var sectionHeight = $(window).height(); //on défini la variable sectionHeight qui enregistre la hauteur de la fenetre
        var headerHeight = $('header').height(); //on défini la variable headerHeight qui enregistre la hauteur du header


        $('main').css('height', sectionHeight - headerHeight); //on applique ensuite dans le css des sections une H-min correspondant à la fenetre
        $('.titledate').css('top', headerHeight+40); //on applique ensuite dans le css des sections une H-min correspondant à la fenetre


        // LARGEUR MAIN

        var windowWidth = $(window).width();
        var windooWidth = (windowWidth*70)/100;
        var bodyWidth = $(document).width();

        console.log(windowWidth);
        console.log(windooWidth);
        console.log(bodyWidth);


        $('main').css('width', bodyWidth)
        $('.main_parcours').css('min-width', (windowWidth*60)/100);


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
            link = link.replace('#','');//on enléve le #
        });
    
        
    }
       
});//ready

