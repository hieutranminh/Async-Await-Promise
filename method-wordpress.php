// gọi file đã tách trong index. ( header | footer )
<?php get_header() ?>

// gọi đường dẫn đến theme
<?php echo get_template_directory_uri() ?>
<?php bloginfo('stylesheet_directory') ?>

// gọi Menu trong WP
<?php wp_nav_menu() ?>

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
  
// get các field được tạo ra bởi plugin ( Advanced Custom Fields ) 
<?php $nameField = get_field('nameField') ?> 
  
// get một khối giao diện ( phải đặt tên file content-welcome )
<?php get_template_part('template-parts/content','welcome') ?>
  
// check xem có bài post không
<?php have_posts(); ?>
  
// get các bài post ra
<?php the_post(); ?>
  
// reset vong lap
<?php wp_reset_query(); ?>
  
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
  
-------------------------------PLUGINS---------------------------
  
  Advanced Custom Fields : Tạo các field cho page | post | ...
  
  Custom Post Type UI : Tạo ra các navigation trong dashboad như page | post
  
  Post Types Order : Kéo thả , sắp xếp ( sort ) trong page | post
  
  <?php
    $arg = array('post_type' => 'about_service');
    $about_service = new WP_Query($arg);

    $about_posts = $about_service->get_posts();
    foreach ($about_posts as $item):
      ?>
        <div class="about_item" data-aos="" data-aos-easing="linear"
             data-aos-duration="500">
            <i class="<?=$item->post_title?>"></i>
            <p><?=$item->post_content?></p>
        </div>
    <?php
    endforeach;
  ?>
  

