<?php
   

function add_theme_scripts() {
        
    
        wp_register_script( 'jquery', 'https://code.jquery.com/jquery-3.2.1.min.js' );
        wp_enqueue_script( 'jquery');
    
    
        wp_register_script( 'swiper', 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/js/swiper.min.js' );
        wp_enqueue_script( 'swiper');
    
    
        wp_register_style( 'swipercss', 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/css/swiper.min.css' );
        wp_enqueue_style( 'swipercss');
    
    wp_enqueue_style( 'colors-custom', get_template_directory_uri().'/style.css');
    
        
    
        wp_register_script( 'main', get_template_directory_uri().'/js/custom.js' );
        wp_enqueue_script( 'main');
}


add_action( 'wp_enqueue_scripts', 'add_theme_scripts' ); 

add_theme_support('post-thumbnails');

add_post_type_support( post, excerpt );


// add menu




function register_my_menu() {
  register_nav_menu('menu-header',__( 'menu-header' ));
  register_nav_menu('menu-footer',__( 'menu-footer' ));
}

add_action( 'init', 'register_my_menu' );






function theme_prefix_setup() {
    add_theme_support( 'custom-logo' );
}
add_action( 'after_setup_theme', 'theme_prefix_setup' );

if ( function_exists( 'add_theme_support' ) ) { 
    add_theme_support( 'post-thumbnails' );
}


//Ajoute le menu et le logo dans un contexte global disponible ainsi sur toutes le spages

function add_to_context($data){


	/* Now, in similar fashion, you add a Timber menu and send it along to the context. */
	$data['headermenu'] = new TimberMenu('menu-header'); // This is where you can also send a WordPress menu slug or ID    

    $data['footermenu'] = new TimberMenu('menu-footer'); // This is where you can also send a WordPress menu slug or ID    

    
    $custom_logo_id = get_theme_mod( 'custom_logo' );
    $image = wp_get_attachment_image_src( $custom_logo_id , 'full' );
    
    $data['logo'] = $image;
	return $data;
}

add_filter('timber_context', 'add_to_context');








