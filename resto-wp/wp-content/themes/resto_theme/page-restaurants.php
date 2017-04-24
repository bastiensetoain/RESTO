<?php get_header(); ?>




	<div class="head"></div>
		<main>
           
                   
               <div class="pre_page">
                    <h1>Actualités</h1>
                </div>
                
                <div class="cards">
                    
                    <?php get_template_part ('archive'); ?> 
                    
                </div>


                
            
            
        
		</main>
		
		<script type="text/javascript">
            $(document).ready(function() {

              dashOffset = $(".cls-1").css("stroke-dashoffset");

              // console.log(dashOffset);

              $(window).scroll(function() {

                newUnit = parseInt(dashOffset);//On convertie en int

                percentageComplete = (($(document).scrollLeft() * 100)  / ($(document).width()-$(window).width()));//produit en croix, on est à x pourcent de la largeur de la page

                  if(percentageComplete<=100){
                    console.log(percentageComplete);

                    offsetUnit = percentageComplete * (newUnit / 100);

                    $(".cls-1").css("stroke-dashoffset", newUnit - offsetUnit);
                  }else{

                  };

              });
            });
        </script>
		
	</body>
</html>