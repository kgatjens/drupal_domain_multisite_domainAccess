<?php 
	//the variables used on $view->obj_tpl_data->variable_name 
	//was defined on template-overrides.php 
	//the preprocess function of this view is the same as the filename. 
?>

<?php foreach($view->obj_tpl_data->what_hurts as $item){ ?> 
<?php include_redirect_bot($item['node_id'],  $item['title']); ?>
<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
	<div class="pure-oh-m-cards modal-cards modal-detail" data-filter="Hand">
	    <div class="panel">
	    	<div class="panel-body col-eq-height modal-node modal-action" data-toggle="modal" data-target="#modalDetails" data-node="<?php print $item['node_id'] ?>">
	    		<figure>
	    			<?php if(isset($item['image'])){ ?> 
	        			<img src="<?php print $item['image']; ?>" alt="">
	        		<?php } ?>
	    		</figure>
			    <h2 data-toggle="modal" class="modal-node modal-action" data-target="#modalDetails" data-node="<?php print $item['node_id'] ?>"><?php print $item['title']; ?></h2>
			    <p>
			    	<?php 
			    		$words = str_word_count(str_replace('nbsp', '', strip_tags($item['body'])), 1); 
			    		$limit = 16;
			    		$string = '';
			    		if(count($words) < $limit){
			    			$limit = count($words);
			    		}
			    		for($i = 0; $i < $limit; $i++){
			    			$string .=$words[$i].' ';
			    		}
			    		$string = rtrim($string, ' ');
			    		print $string;
				    ?>
				</p>
			</div>
			<div class="panel-footer">
			    <div class="btn-group btn-group-justified buttons">
			    	 <?php if(!empty($item['document'])){ ?>
			    	 	<div class="btn-group">
				    		<a href="<?php print $item['document'] ?>" type="button" class="btn button" target="_blank"><i class=" fa fa-file-text-o"></i> Download</a>	
				    	</div>
				    <?php } ?>
				    <div class="btn-group">
				    	<button type="button" class="btn modal-node modal-action" data-toggle="modal" data-target="#modalDetails" data-node="<?php print $item['node_id'] ?>"><i class=" fa fa-play"></i>  Watch</button>
				    </div>
				</div>
	    	</div>
	    </div>
	</div>
</div>
<?php } ?>
