<?php if(isset($breadcrumbs[0]['breadcrumb_text'])){ ?>
	<div class="row">
		<ol class="breadcrumb">
			
			    <?php foreach($breadcrumbs as $item){ ?> 
			      <?php if($item['is_selected'] == '1'){ ?>
			        <li class="active light" ><?php print $item['breadcrumb_text']; ?></li>
			      <?php }else{ ?>
			        <li><a href="<?php print $item['breadcrumb_link'] ?>"><?php print $item['breadcrumb_text']; ?></a></li>
			      <?php } ?>
			    <?php } ?> 
		</ol>
	</div>
<?php } ?>