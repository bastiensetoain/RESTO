<?php

wp_head();

$context = timber::get_context();

$post = new TimberPost();

$context['post'] = $post;

Timber::render('single.twig', $context);

//var_dump($context['post']);