<?php

wp_head(); 

$context = Timber::get_context();

$plats_posts = array(
        'post_type' => 'plats_posts',
        'posts_per_page' => 8
);

$context['plats'] = Timber::get_posts($plats_posts);



$blog_posts = array(
        'post_type' => 'post',
        'posts_per_page' => 4
);

$context['articles'] = Timber::get_posts($blog_posts);



$plats_posts_featured = array(
        'post_type' => 'plats_posts',
        'meta_query'	=> array(
		'relation'		=> 'AND',
		array(
			'key'	  	=> 'featured',
			'value'	  	=> '1',
			'compare' 	=> '=',
		),
	),
);

$context['featured'] = Timber::get_posts($plats_posts_featured);



//var_dump($context);

Timber::render('index.twig', $context);

//var_dump($context['logo']);

