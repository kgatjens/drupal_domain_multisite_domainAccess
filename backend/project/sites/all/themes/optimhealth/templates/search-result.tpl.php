<li>
	
	<div class="view-content">
		<div class="text-content">
			<h3><a href="<?php print $url; ?>" class="views-field views-field-title"><?php print $title; ?></a></h3>
			<p class="field-content"><?php print implode( '', array_slice( preg_split('/([\s,\.;\?\!]+)/', $snippet, 12*2+1, PREG_SPLIT_DELIM_CAPTURE),0,12*2-1)); ?></p>
		</div>
		<a href="<?php print $url; ?>" class="result-icon"><i class="fa fa-arrow-circle-o-right fa-lg"></i></a>
	</div>
</li>