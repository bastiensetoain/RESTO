<?php

wp_head(); 

$context = Timber::get_context();


//On ajoute uniquement les articles de blog  au context sous le nom "articles".

$blog_posts = array(
        'post_type' => 'post'
);

$context['articles'] = Timber::get_posts($blog_posts);


$post = new TimberPost();

$context['post'] = $post;

//var_dump($context);

Timber::render('page-blog.twig', $context);