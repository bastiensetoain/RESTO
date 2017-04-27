<?php

wp_head(); 

$context = Timber::get_context();

//On ajoute uniquement les plats au context sous le nom "plats".


$plats_posts = array(
        'post_type' => 'plats_posts'
);

$context['plats'] = Timber::get_posts($plats_posts);




$post = new TimberPost();

$context['post'] = $post;

//var_dump($context);

Timber::render('page-plats.twig', $context);