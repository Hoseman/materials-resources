<?php
/*
Plugin Name: Custom Gallery
Description: A custom woocommerce gallery.
Version: 1.0
Author: Andrew Hosegood
*/

// Enqueue style.css
function custom_gallery_enqueue_styles() {
    wp_enqueue_style('custom-gallery-style', plugins_url('style.css', __FILE__));
}
add_action('wp_enqueue_scripts', 'custom_gallery_enqueue_styles');

// Enqueue script.js
function custom_gallery_enqueue_scripts() {
    wp_enqueue_script('custom-gallery-script', plugins_url('script.js', __FILE__), array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'custom_gallery_enqueue_scripts');
?>
