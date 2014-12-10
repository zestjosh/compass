<?php
/**
 * A template part to display single entry navigation and pagination for archives.
 *
 * @package     Compass
 * @subpackage  HybridCore
 * @copyright   Copyright (c) 2014, Flagship, LLC
 * @license     GPL-2.0+
 * @link        http://flagshipwp.com/
 * @since       1.0.0
 */
?>

<?php if ( is_singular( 'post' ) ) : ?>

	<nav class="nav-single">
		<?php previous_post_link( '<span class="nav-previous">' . __( '%link', 'compass' ) . '</span>', '&larr; Previous Post' ); ?>
		<?php next_post_link(     '<span class="nav-next">' . __( '%link', 'compass' ) . '</span>', 'Next Post &rarr;' ); ?>
	</nav><!-- .nav-single -->

	<?php

endif;

if ( is_home() || is_archive() || is_search() ) :

	if ( current_theme_supports( 'loop-pagination' ) ) :
		loop_pagination(
			array(
				'prev_text' => '<span class="screen-reader-text">' . __( 'Previous Page', 'compass' ) . '</span>',
				'next_text' => '<span class="screen-reader-text">' . __( 'Next Page', 'compass' ) . '</span>',
			)
		);
	else : 
		
	?>
	
	<nav class="nav-archive">
		<?php next_posts_link( '<span class="nav-previous">' . __( '&laquo; Older Posts', 'compass' ) . '</span>' ); ?>
		<?php previous_posts_link( '<span class="nav-next">' . __( 'Newer Posts &raquo;', 'compass' ) . '</span>' ); ?>
	</nav><!-- .nav-archive -->
	
	<?php
	
	endif;

endif;
