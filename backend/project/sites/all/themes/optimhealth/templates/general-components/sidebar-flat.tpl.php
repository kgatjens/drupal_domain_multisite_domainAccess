<?php $host = $_SERVER['HTTP_HOST']; ?>
<?php $msg_title = variable_get('sidebar_msg_title'); ?>
<?php global $_domain; ?>
<section class="pure-oh-m-sidebar">
	<div class="sidebar hidden-xs">
		<span class="pull-right close visible-xs"><i class="fa fa-times"></i></span>
		<?php  if(!empty($msg_title)){ ?>
			<div class="header hidden-xs"  data-background="<?php print variable_get('sidebar_msg_color'); ?>">
				<h2 class="heading-flat"><?php print variable_get('sidebar_msg_title'); ?></h2>
				<p><?php print variable_get('sidebar_msg_desc'); ?></p>
				<?php if ( $_domain['domain_id'] == 10 ): ?>
					<a href="#" data-toggle="modal" data-target="#modalContact" data-dismiss="modal"><?php print variable_get('sidebar_msg_btn_txt'); ?></a>
				<?php else: ?>
					<a href="<?php print variable_get('sidebar_msg_link'); ?>"><?php print variable_get('sidebar_msg_btn_txt'); ?></a>
				<?php endif; ?>
			</div>
		<?php  } ?>
		<ul class="options text-left">
			<li><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#modalRequestAppointment"> Request Appointment</a></li>
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
		<p class="line">________</p>
		<ul class="contacts text-left">
			<li><a href="#" class="card-share" data-toggle="modal" data-target="#modalShare" data-dismiss="modal"><i class="fa fa-share-square-o"></i> Share</a></li>
			<li><a href="#" data-toggle="modal" data-target="#modalContact" data-dismiss="modal"><i class="fa fa-envelope"></i> Contact</a></li>
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
				<p><a href="tel:<?php print variable_get('contact_phone'); ?>"><?php print variable_get('contact_phone'); ?></a></p>
			</div>
		</div>
	</div>
</section>