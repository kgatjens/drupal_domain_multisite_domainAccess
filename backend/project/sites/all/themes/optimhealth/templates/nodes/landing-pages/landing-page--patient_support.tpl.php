<?php 
	//the variables used on $node->obj_tpl_data->variable_name 
	//was defined on template-overrides.php 
?>
<div id="pure-oh-m-patient-support">
	<h1><?php print $node->obj_tpl_data->title; ?></h1>
	<div class="description"><?php print strip_tags($node->obj_tpl_data->introduction_text); ?></div>
	<div class="portal-box">
		<p class="description">Send emails, request appointments, lab results and RX refills from anywhere in the world:</p>
		<a target="_blank" href="https://identity.integration.relayhealth.com/Registration#/" class="btn">Patient Portal</a>
	</div>
	<div class="cards">
		<div class="row-eq-height row">
			<?php print render($content_header); ?>
		</div>
		<?php include_load_more_button(); ?>
	</div>
</div>