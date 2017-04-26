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
  register_nav_menu('header-menu',__( 'Header Menu' ));
}
add_action( 'init', 'register_my_menu' );

function theme_prefix_setup() {
    add_theme_support( 'custom-logo' );
}
add_action( 'after_setup_theme', 'theme_prefix_setup' );

if ( function_exists( 'add_theme_support' ) ) { 
    add_theme_support( 'post-thumbnails' );
    /*set_post_thumbnail_size( 350, , true ); // default Post Thumbnail dimensions (cropped)

    // additional image sizes
    // delete the next line if you do not need additional image sizes
    add_image_size( 'category-thumb', 300, 9999 ); //300 pixels wide (and unlimited height)*/
}

add_filter('timber_context', 'add_to_context');
function add_to_context($data){
	/* So here you are adding data to Timber's context object, i.e... */
	$data['foo'] = 'I am some other typical value set in your functions.php file, unrelated to the menu';

	/* Now, in similar fashion, you add a Timber menu and send it along to the context. */
	$data['menu'] = new TimberMenu(); // This is where you can also send a WordPress menu slug or ID
    
    
    
    $custom_logo_id = get_theme_mod( 'custom_logo' );
    $image = wp_get_attachment_image_src( $custom_logo_id , 'full' );
    
    $data['logo'] = $image;
	return $data;
}









