jQuery(document).ready(function($){
    
    
    var width = $('body').width();
    
    console.log(width );
    
    
    
    //INITIALIZE SWIPER PLUGIN
    
    
    if ($('body').width() > 410){
        
        console.log('biigwidth');
        
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 4,
            paginationClickable: true,
            spaceBetween: 30
        });
    };
    if ($('body').width() < 410){
        
        console.log('smallwidth');
        
        
        
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 2,
            paginationClickable: true,
            spaceBetween: 30
        });
    }
    
    

    
    // DISPLAY JSON RESTAURANT FILE
    
    $(document).ready(function() { 
        
            $.ajax({
                url: 'http://localhost:8888/RESTO/resto-wp/wp-content/themes/resto_theme/resto-liste-restaurants.json',
                dataType: 'json',
                success: function(json) {
                    for(var key in json) {
                        $('.json').append('<div class="restaurant">'+ json[key]['name'] +'<br />'+ json[key]['address'] +'</div>');
                    }
                }
            });    
            return false;
      
    });
    
    
    
    //RATING STARS SYSTEM
    
    
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

