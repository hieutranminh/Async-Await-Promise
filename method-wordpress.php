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
            $post = the_post();
            get_template_part( 'template-parts/content', get_post_format() );
        }
    } else {
        echo 'Chua co bai viet nao het';
    }
?>
  
the_post_thumbnail('option')        // Ảnh đại diện
the_title()                 // Tiêu đề 
the_excerpt()               // Mô tả ngắn
the_permalink()             // Đường dẫn
the_author()                // Tác giả
get_the_date()              // Ngày/tháng/năm
