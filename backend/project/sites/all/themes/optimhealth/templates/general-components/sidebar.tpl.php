<?php 
	global $_domain;

	$host      = $_SERVER['HTTP_HOST'];
	$msg_title = $_domain['domain_id'] == 1 ? domain_conf_variable_get( $_domain['id'], 'sidebar_msg_title' ) : variable_get( 'sidebar_msg_title' );
?>
<section class="pure-oh-m-sidebar">
	<div class="sidebar default-sidebar hidden-xs">
		<span class="pull-right close visible-xs"><i class="fa fa-times"></i></span>
		
		<?php
			if ( !empty( $msg_title ) ) {
				$msg_btn_txt = $_domain['domain_id'] == 1 ? domain_conf_variable_get( $_domain['id'], 'sidebar_msg_btn_txt' ) : variable_get( 'sidebar_msg_btn_txt' );
				$msg_link    = $_domain['domain_id'] == 1 ? domain_conf_variable_get( $_domain['id'], 'sidebar_msg_link' ) : variable_get( 'sidebar_msg_link' );
				$msg_desc    = $_domain['domain_id'] == 1 ? domain_conf_variable_get( $_domain['id'], 'sidebar_msg_desc' ) : variable_get( 'sidebar_msg_desc' );
				$msg_color   = $_domain['domain_id'] == 1 ? domain_conf_variable_get( $_domain['id'], 'sidebar_msg_color' ) : variable_get( 'sidebar_msg_color' );
				?>
			<div class="header hidden-xs" data-background="<?php print $msg_color; ?>">
				<div class="ribbon">
					<h2 class="text-center"><?php print $msg_title; ?></h2>
				</div>
				<p><?php print $msg_desc; ?></p>
				<a href="<?php print $msg_link; ?>"><?php print $msg_btn_txt; ?></a>
			</div>
		<?php } ?>
		<p class="first <?php if(!empty($msg_title)){ ?>header-content<?php } ?>">Is neck or back pain getting in the way of your life?</p>
		<p class="second">We can help you get back to you.</p>
		<a href="#" class="appointment" data-toggle="modal" data-dismiss="modal" data-target="#modalRequestAppointment"><i class="fa fa-calendar"></i> Request Appointment</a>
		<ul class="options text-left">

			<?php // get the menu elements and print each item  

				foreach($links = menu_load_links('menu-sidebar-menu') as $item){ 
           			$is_available_for_this_domain = false; 
           			//check if this menu option is available for the current domain
           			foreach($item['options']['domain_menu_access']['show'] as $domain_id){
           				if($domain_id == 'd'.$_domain['domain_id']){
           					$is_available_for_this_domain = true;
           					break;
           				}
           			}
           			if($is_available_for_this_domain){
           				//check if the menu item is not disabled
						if($item['hidden'] == '0'){
							$domain = (domain_path_path_load($item['link_path']));

							if ( $domain ) {
								$domain = '/' . $domain['alias'];
							} else {
								$domain = $item['link_path'];
							}
			?>
						<li><a href="<?php print $domain; ?>"><?php print $item['options']['attributes']['title']; ?></a></li>
			<?php 
						} 
					}
				} 
			?>
		</ul>
		<ul class="contacts text-left">
			<li><a href="#" data-toggle="modal" class="card-share" data-target="#modalShare" data-dismiss="modal"><i class="fa fa-share-square-o"></i> Share</a></li>
			<li><a href="#" data-toggle="modal" data-target="#modalContact" data-dismiss="modal" class="card-share"><i class="fa fa-envelope"></i> Contact</a></li>
			<li><a href="tel:<?php print variable_get('contact_phone'); ?>"><i class="fa fa-phone"></i> <?php print variable_get('contact_phone'); ?></a></li>
		</ul>
	</div>
	<div class="visible-xs">
		<div class="mobile-footer">
			<svg class="info-icon pull-right show-sidebar">
				<use xlink:href="#info_ico"></use>
			</svg>
			<svg class="phn-icon">
				<use xlink:href="#phn_ico"></use>
			</svg>
			<div class="contact-mobile">
				<p>Call us</p>
				<p><a href="<?php print variable_get('contact_phone'); ?>"><?php print variable_get('contact_phone'); ?></a></p>
			</div>
		</div>
	</div>
</section>