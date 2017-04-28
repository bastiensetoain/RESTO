jQuery(document).ready(function($){
    
    
    var width = $('body').width();
    
    console.log(width );
    
    
    
    //Initialisation du plugin swiper selon la largeur de l'écran,
    //si l'écran est supérieur à 410px de large le slider présente 4 plats sinon il n'en présente que 2.
    
    
    if ($('body').width() > 500){
        
        console.log('biigwidth');
        
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 4,
            paginationClickable: true,
            spaceBetween: 30
        });
    };
    if ($('body').width() < 500){
        
        console.log('smallwidth');
        
        
        
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 2,
            paginationClickable: true,
            spaceBetween: 30
        });
    }
    
    

    
    // DISPLAY JSON RESTAURANT FILE
    // on récupere les informations du fichiers json et on injecte celles-ci dans la div "json" de la page.
    
    $(document).ready(function() { 
        
            $.ajax({
                url: 'http://localhost:8888/RESTO/resto-wp/wp-content/themes/resto_theme/resto-liste-restaurants.json',
                dataType: 'json',
                success: function(json) {
                    for(var key in json) {
                        $('.json').append('<div class="restaurant"> <h3>'+ json[key]['name'] +' </h3><br /><p>'+ json[key]['address'] +'</p></div>');
                    }
                }
            });    
            return false;
      
    });
    
    
    
    //RATING STARS SYSTEM
    //pour chaque répétition de la div "featured" on récupère la valeure de 
    //"note" et on la compare afin de colorier le nombre d'étoiles correspondant.
    
    
    $('.featured').each(function(){
            
        var note = $(this).find('.note').text();
        
        if(note == 2){
            
            $(this).find('.star-2 polygon').css('fill','#FFCF15');
        }
        if(note == 3){
            
            $(this).find('.star-2 polygon').css('fill','#FFCF15');
            $(this).find('.star-3 polygon').css('fill','#FFCF15');
        }
        if(note == 4){
            
            $(this).find('.star-2 polygon').css('fill','#FFCF15');
            $(this).find('.star-3 polygon').css('fill','#FFCF15');
            $(this).find('.star-4 polygon').css('fill','#FFCF15');
        }
        if(note == 5){
            
            $(this).find('.star-2 polygon').css('fill','#FFCF15');
            $(this).find('.star-3 polygon').css('fill','#FFCF15');
            $(this).find('.star-4 polygon').css('fill','#FFCF15');
            $(this).find('.star-5 polygon').css('fill','#FFCF15');
        }
        
    });
    
    

});//ready

