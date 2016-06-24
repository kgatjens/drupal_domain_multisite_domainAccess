<?php 
    //the menu was defined on drupal
    //check the section structure/menus on the cms
?>

<header class="pure-oh-m-header-dark pure-oh-m-header-white">
	<div class="header-container row">
		<div class="col-lg-5 col-xs-10">
			<a class="logo-optim-spine dinamic-logo" href="/">
				<?php 
                    $detect = mobile_detect_get_object();
                    if($detect->isMobile() || $detect->isTablet()){
                        $file = (array)file_load(variable_get('logo_mobile_white'));
                    }else{
                        $file = (array)file_load(variable_get('logo_white'));
                    }
                    $logo = file_create_url($file['uri']);
                    global $_domain;

                    $logo_url = optimhealth_get_logo_url( 'white' );
                ?>
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
							<?php $domain = (domain_path_path_load($item['#href']));?>
							<?php $domain = $domain['alias']; ?>
							<li><a href="/<?php print $domain; ?>"><?php print $item['#localized_options']['attributes']['title']; ?></a></li>
						<?php } ?>
					<?php } ?>
				</ul>
			</nav>
		</div>
	</div>
</header>