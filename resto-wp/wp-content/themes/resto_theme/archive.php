
            
           <?php $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
            
            $args = array(
                'posts_per_page' => 5,
                'paged' => $paged 
                );
            
            query_posts($args); ?>
            
        <?php if (have_posts() ): ?> 

            <?php while (have_posts() ) : ?>

                <?php the_post(); ?>

                    
                        <div class="card card-2">
                            <?php the_post_thumbnail(); ?>
                            <div class="card_content">
                                <div class="card_title">
                                    <a href="<?php the_permalink(); ?>"><h2><?php the_title(); ?></h2></a>
                                    <p><?php the_field('date'); ?></p>
                                </div>
                                <p><?php the_field('extrait'); ?></p>
                                <a href="<?php the_permalink(); ?>">LIRE PLUS</a>
                            </div>
                        </div>
                    

            <?php endwhile; ?>
            
                
        <?php endif; ?>
            
          
            
            