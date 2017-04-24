<?php get_header(); ?>

	<div class="head"></div>
		<main>
           
                  <?php while ( have_posts() ) : the_post(); ?> <!--Because the_content() works only inside a WP Loop -->
                        <div class="pre_page">
                            <h1><?php the_title(); ?></h1>
                            <p class="text_bibliographie"><span class="marks">"</span><?php the_content(); ?><span class="marks">"</span></p>
                            <button>Télécharger le CV</button>
                        </div>

                    <?php
                    endwhile; //resetting the page loop
                    wp_reset_query(); //resetting the page query
                    ?>
                              
                
                
                <div class="bulles_bibliographie">
                   <div class="first_line">
                        <?php
                            $loop = new WP_Query( array( 'post_type' => 'bibliographie_post', 'posts_per_page' => 3, 'order' => 'DESC' ) );
                            while ( $loop->have_posts() ) : $loop->the_post(); ?>

                            
                            <style>.<?php echo( basename(get_permalink()) ); ?>::before { content: " <?php the_title(); ?>"; color: #0A0A0A;
    position: absolute;
    top: -40px;}</style>

                        

                           
                           
                            <a href="<?php the_permalink(); ?>" ><div style="background: left center / cover url('<?php the_post_thumbnail_url(); ?>');" class="projet <?php echo( basename(get_permalink()) ); ?>"></div></a>


                           <?php
                            endwhile;
                            ?>

                    </div>
                    
                    
                    <?php wp_reset_query(); ?>

                  
                  
                  <div class="second_line">
                        <?php
                            $loop = new WP_Query( array( 'post_type' => 'bibliographie_post', 'posts_per_page' => 3, 'order' => 'ASC' ) );
                            while ( $loop->have_posts() ) : $loop->the_post(); ?>

                            
                            <style>.<?php echo( basename(get_permalink()) ); ?>::after { content: " <?php the_title(); ?>"; color: #0A0A0A;
    position: absolute;
    bottom: -40px;}</style>

                        

                           
                           
                            <a href="<?php the_permalink(); ?>" ><div style="background: left center / cover url('<?php the_post_thumbnail_url(); ?>');" class="projet <?php echo( basename(get_permalink()) ); ?>"></div></a>


                           <?php
                            endwhile;
                            ?>

                    </div>
                    
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