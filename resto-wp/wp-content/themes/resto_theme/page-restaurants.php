<?php

wp_head(); 

$context = Timber::get_context();

$post = new TimberPost();

$context['post'] = $post;

//var_dump($context);

Timber::render('page-restaurants.twig', $context);