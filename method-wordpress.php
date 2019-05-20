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
  
// Hàm cho phép theme hỗ trợ ảnh đại diện (functions.php)
add_theme_support( 'post-thumbnails', array( 'post', 'page' ) );

the_post_thumbnail('option')        // Ảnh đại diện
the_title()                         // Tiêu đề 
the_excerpt()                       // Mô tả ngắn
the_permalink()                     // Đường dẫn
the_author()                        // Tác giả
get_the_date()                      // Ngày/tháng/năm
  
// set kích cỡ hình ảnh ( function.php )  
add_image_size('blog-thumbnail',700, 350, true);
set_post_thumbnail_size( 700, 350 );
  
-----------------------------LOOP--------------------------------  
  
// Loop data | Cach 1 : 
<?php if ( have_posts() ) : ?>
  <?php while ( have_posts() ) : the_post(); ?>
      <?php get_template_part( 'template-parts/content', get_post_format() ); ?>
  <?php endwhile; ?>
<?php endif; ?>
  
// Loop data | Cach 2 : 
<?php
    if (have_posts()) {
        while (have_posts()) {
            the_post();
            get_template_part( 'template-parts/content', get_post_format() );
        }
    } else {
        echo 'Chua co bai viet nao het';
    }
?>
  

