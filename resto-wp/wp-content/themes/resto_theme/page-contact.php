<?php get_header(); ?>
          

          <main>
           
            <section id="slide_1" class=" slide slide_1 iddate">
               <div class="head"></div>
               <div class="main">
                    <h1>Contact</h1>
                    <p><span class="marks">"</span><?php the_content() ?><span class="marks">"</span></p>
                </div>
                
                <p><?php the_field('telephone'); ?></p>
            <p><?php the_field('e-mail'); ?></p>
                
            </section>
            
            
            
		</main>
		
		
	</body>
</html>