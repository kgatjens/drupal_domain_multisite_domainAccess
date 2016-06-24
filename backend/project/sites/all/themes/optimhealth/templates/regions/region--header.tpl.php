<?php 
    //the menu was defined on drupal
    //check the section structure/menus on the cms
?>

<header class="pure-oh-m-header-dark">
	<div class="header-container row">
		<div class="col-lg-5 col-xs-10">
			<a class="logo-optim-spine dinamic-logo" href="/">
				<?php $logo_url = optimhealth_get_logo_url( 'color' ); ?>
                <img src="<?php print $logo_url; ?>"/>
			</a>
		</div>
		<div class="col-lg-1 col-lg-push-6 col-xs-2">
			<a class="search-home-icon" href="#" data-toggle="modal" data-target="#search-modal"><i class="fa fa-search icon-search"></i></a>
		</div>
		<div class="col-lg-6 col-xs-12 col-lg-pull-1 ">
			<nav>
				<ul>
					<?php // get the menu elements and print each item  ?>
					<?php foreach(menu_tree($menu_name = 'menu-header-menu') as $item){ ?>
						<?php if(isset($item['#theme'])){  ?>
							<?php 
								global $_domain;

								if ( $_domain['domain_id'] == 12 ) {
									$domain = $item['#href'];
								} else {
									$domain = (domain_path_path_load($item['#href']));
									$domain = '/' . $domain['alias'];
								}

								$anchor_class = '';

								if ( isset( $item['#attributes'] ) ) {
									if ( isset( $item['#attributes']['class'] ) ) {
										if ( in_array( 'active-trail', $item['#attributes']['class'] ) ) {
											$anchor_class .= ' class="active"';
										}
									}
								}
							?>
							<li><a href="<?php print $domain; ?>"<?php echo $anchor_class; ?>><?php print $item['#localized_options']['attributes']['title']; ?></a></li>
						<?php } ?>
					<?php } ?>
				</ul>
			</nav>
		</div>
	</div>
</header>