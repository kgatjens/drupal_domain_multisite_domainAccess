<?php 
	//the variables used on $node->obj_tpl_data->variable_name 
	//was defined on template-overrides.php 
?>
<h1><?php print $node->obj_tpl_data->title; ?></h1>
<div class="description"><?php print strip_tags($node->obj_tpl_data->introduction_text); ?></div>
<div class="row">
	<div class="col-md-12">
		<div class="pure-oh-m-locations-search">
			<div class="row">
				<div class="col-md-12">
					<form class="form-horizontal">
						<div class="form-group">
							<div class="col-sm-12">
								<label for="search" class="control-label sr-only">Search</label>
								<input type="search" class="search-input" id="search-locations" placeholder="Search" data-show-element="panel-heading">
								<span class="form-submit"></span>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="row locations-wrap">
	<div class="col-md-8 col-md-push-4 pdr">
		<section class="pure-oh-m-gmap">
			<div id="map" style=" width:100%; height:600px;"></div>
		</section>
	</div>
	<div class="col-md-4 col-md-pull-8 pdr">
		<div class="pure-oh-m-accordion-locations" id="accordion" role="tablist" aria-multiselectable="true"></div>
	</div>
</div>