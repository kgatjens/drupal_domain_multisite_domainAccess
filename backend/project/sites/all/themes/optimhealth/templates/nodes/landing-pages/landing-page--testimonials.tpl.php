<?php 
	//the variables used on $node->obj_tpl_data->variable_name 
	//was defined on template-overrides.php 
?>
<section class="pure-oh-m-page">
	<div class="pure-oh-m-testimonials">
		<div class="banner">
			<div class="container">
				<div class="row">
					<div class="col-lg-9 col-md-9 col-sm-8 col-xs-12">
						<?php include($_SERVER['DOCUMENT_ROOT'].'/sites/all/themes/optimhealth/templates/regions/region--header-white.tpl.php'); ?>
					</div>
				</div>
				<div class="wrap-hero-description">
					<div class="modal-detail">
						<div class="hero-title">
							<a href="<?php print $node->obj_tpl_data->headline_link; ?>"><?php print $node->obj_tpl_data->headline_title; ?></a>
						</div>
						<div class="hero-description">
							<p> 
								<?php print $node->obj_tpl_data->headline_text?>							
							</p>
						</div>
					</div>
				</div>
			</div>
			<img class="bannerImage" src="<?php print $node->obj_tpl_data->headline_image; ?>" alt="" width="1180" height="839" data-bg-color="#13212e">
			
		</div>
	</div>
	<div class="container patient-stories">
		<div class="row">
			<div class="col-lg-9 col-md-9 col-sm-8 col-xs-12">
				<?php print render($content_breadcrumbs);  ?>
				<div class="cards">
					<div class="row-eq-height">
						<?php print render($content_header); ?>
					</div>
				</div>
				<?php include($_SERVER['DOCUMENT_ROOT'].'/sites/all/themes/optimhealth/templates/regions/region--footer.tpl.php'); ?>
			</div>
			<div class="col-lg-3 col-md-3 col-sm-4">
				<?php include($_SERVER['DOCUMENT_ROOT'].'/sites/all/themes/optimhealth/templates/regions/region--sidebar.tpl.php'); ?>
			</div>
		</div>
	</div>
</section>