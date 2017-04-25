jQuery(document).ready(function($){
    
    console.log('custom');
    
    
    //INITIALIZE SWIPER PLUGIN
    
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30
    });

    
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


});//ready

