// gọi file đã tách trong index. ( header | footer )
<?php get_header() ?>
<?php get_footer() ?>

// chứa các hàm , style , js ,... của Wordpress ( để trong <head> )
<?php wp_head() ?>
  
// chứa các hàm , style , js ,... của Wordpress ( để trên các file script & </body> )
<?php wp_footer() ?>

// ngôn ngữ trên thẻ <html>
<?php language_attributes() ?>
    
// tiêu đề title trong head
<?php bloginfo('name') ?>
  
// gọi đường dẫn đến các link ( css | script )
<?php echo get_template_directory_uri() ?>
<?php bloginfo('stylesheet_directory') ?>

// gọi Menu trong WP
<?php wp_nav_menu() ?>
  
// Ảnh đại diện - option gồm (full, large , medium , thumbnail)
<?php the_post_thumbnail('option') ?>
  
// Lấy URL của hình ảnh (truyền vào ID của hình ảnh & option : (full, large , medium , thumbnail)) & return mảng (array)
<?php wp_get_attachment_image_src(get_post_thumbnail_id($post -> ID), 'option') ?>
  
// Tiêu đề 
<?php the_title() ?>
  
// Mô tả ngắn
<?php the_excerpt() ?>
  
// Đường dẫn
<?php the_permalink() ?>
  
// Tác giả
<?php the_author() ?> 
  
// Ngày/tháng/năm
<?php get_the_date() ?>   
  
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
<?php wp_reset_postdata(); ?>
  
// get các danh mục của taxanomy
<?php get_the_terms( $post -> ID , '$taxanomy') ?>
  
-----------------------------FUNCTION.php------------------------
  
// Hàm cho phép theme hỗ trợ ảnh đại diện (functions.php)
add_theme_support( 'post-thumbnails', array( 'post', 'page' ) );
  
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
  
------------------------------LOGIC-----------------------------
  
// xử lý ngăn cách nhiều category khác nhau CACH 01
<?php echo join(" | ", wp_list_pluck( $arrCategory, 'name')); ?>
  
// xử lý ngăn cách nhiều category khác nhau CACH 02
<?php echo join(" | ",array_column($arrCategory, 'name')); ?>
  
  -------------------------------PLUGINS---------------------------
  
  Advanced Custom Fields : Tạo các field cho page | post | ...
  
  Custom Post Type UI : Tạo ra các navigation trong dashboad như page | post
  
  Post Types Order : Kéo thả , sắp xếp ( sort ) trong page | post
  
  Post Thumbnail Editor : cắt ảnh , cắt tỉ lệ hình ảnh
  
  Hide Titke : ẩn title nhưng vẫn giữ lại thẻ H3 để đọc SEO
  
  
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
  
  

