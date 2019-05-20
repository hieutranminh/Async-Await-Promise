// gọi file đã tách trong index. ( header | footer )
<?php get_header() ?>

// gọi đường dẫn đến theme
<?php echo get_template_directory_uri() ?>

// ngôn ngữ trên thẻ <html>
<?php language_attributes() ?>
  
// tiêu đề title trong head
<?php bloginfo('name') ?>
  
// chứa các hàm , style , js ,... của Wordpress
<?php wp_head() ?>
  
// chứa các hàm , style , js ,... của Wordpress
<?php wp_footer() ?>
