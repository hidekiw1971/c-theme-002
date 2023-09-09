<?php
function my_enqueue_scripts()
{
    $version = wp_get_theme()->get('Version');

    wp_enqueue_style('theme-style', get_template_directory_uri() . '/css/styles.css', array(), $version);
    wp_enqueue_script('theme-script', get_template_directory_uri() . '/js/script.js', array('jquery'), $version, true);
}
add_action('wp_enqueue_scripts', 'my_enqueue_scripts');
