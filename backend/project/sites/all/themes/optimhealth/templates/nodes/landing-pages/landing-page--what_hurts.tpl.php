<?php 
	//the variables used on $node->obj_tpl_data->variable_name 
	//was defined on template-overrides.php 
?>

<?php 
$name = 'body_parts';
$myvoc = taxonomy_vocabulary_machine_name_load($name);
$tree = taxonomy_get_tree($myvoc->vid);
$cont = 1;
?>
<h1><?php print $node->obj_tpl_data->title; ?></h1>
<div class="description"><?php print strip_tags($node->obj_tpl_data->introduction_text); ?></div>


<div class="step-content">
	<div class="step-info">
		<div class="step-box">
			<h2 class="stp-1-header">What’s Hurting</h2>
			<p>Click the area of your back that hurts and then answer two simple
			questions about your pain to explore what might be causing it.</p>
			<a href="/what-hurts-results?body_part=all&diagnostic1=all&diagnostic2=all" class="btn btn-steps transition-item hidden-xs">SEE ALL CONDITIONS</a>
		</div>
		<div class="step-box question-box">
			<div class="step-question">
				<h2>Does the pain radiate?</h2>
				<div class="selection-box">
					<a href="#" data-question="0">&nbsp;</a>
					<a href="#" data-question="0">&nbsp;</a>
				</div>
			</div>

		</div>
		<div class="step-box question-box">
			<div class="step-question">
				<h2>Have you had previous surgery for your condition or pain?</h2>
				<div class="selection-box">
					<a href="#" data-question="0">&nbsp;</a>
					<a href="#" data-question="0">&nbsp;</a>
				</div>
			</div>
		</div>
		<a href="#" class="btn btn-steps step-back transition-item">
			<span class="btn-arrow-left">
				<i class="fa fa-arrow-left"></i>
			</span>BACK
		</a>
	</div>
	<div id="image-box" class="image-content">
		<img src="<?php print path_to_theme(); ?>/public/images/what-hurts/spine-image.png" class="oval-00" alt="spine image" />
		<img src="<?php print path_to_theme(); ?>/public/images/what-hurts/cervical-selected.jpg" class="oval-01" alt="spine image" />
		<img src="<?php print path_to_theme(); ?>/public/images/what-hurts/thoracic-selected.jpg" class="oval-02" alt="spine image" />
		<img src="<?php print path_to_theme(); ?>/public/images/what-hurts/lumbar-selected.jpg" class="oval-03" alt="spine image" />
		<ul>
			<?php foreach ($tree as $item) { ?> 
				<?php $term = taxonomy_term_load($item->tid); ?>
				<?php $image = field_get_items('taxonomy_term', $term, 'field_tax_body_part_image');?>
				<?php $const =  ($cont<9)?'0'.$cont:$cont;?>
				<li id="oval-<?php print $const; ?>" class="lumbar-pain" data-body-part="<?php print $item->tid; ?>" <?php if(isset($image)){?>data-background="<?php print file_create_url($image[0]['uri']);?>"<?php }?>>
					<span id="circle-<?php print $const; ?>" class="circle"></span>
					<p class="title"><?php print $item->name; ?></p>
					<span class="separator-line"></span>
					<span class="description"><?php print strip_tags($item->description); ?></span>
				</li>
				<?php $cont++;?>
			<?php } ?>
		</ul>
	</div>
	<div class="step-counter">
		<button href="#" class="active" data-num="1">1</button>
		<button href="#" class="disabled" data-num="2">2</button>
		<button href="#" class="disabled" data-num="3">3</button>
		<a href="/what-hurts-results?body_part=all&diagnostic1=all&diagnostic2=all" class="hide-btn">SEE ALL CONDITIONS</a>
	</div>
	<a href="/what-hurts-results?body_part=all&diagnostic1=all&diagnostic2=all" class="btn btn-steps transition-item visible-xs">SEE ALL CONDITIONS</a>
</div>