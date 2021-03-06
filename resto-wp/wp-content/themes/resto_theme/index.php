<?php

wp_head(); 

$context = Timber::get_context();



//On ajoute uniquement les plats au context sous le nom "plats" en limitant leur affichage à 8.

$plats_posts = array(
        'post_type' => 'plats_posts',
        'posts_per_page' => 8
);

$context['plats'] = Timber::get_posts($plats_posts);


//On ajoute uniquement les articles de blog  au context sous le nom "articles" en limitant leur affichage à 4.


$blog_posts = array(
        'post_type' => 'post',
        'posts_per_page' => 4
);

$context['articles'] = Timber::get_posts($blog_posts);


//On ajoute uniquement les plats mis en avant au context sous le nom "featured".
//On récupère uniquement les plats ayants le champs ACF "featured" coché avec "key" et "value".


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