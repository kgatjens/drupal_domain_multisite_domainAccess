<?php 
    //all the variables defined on this file are defined in 
    //the respective function on template-functions.php 
?> 
<div class="col-md-6 col-sm-6 col-xs-12 card-item">
	<div class="pure-oh-m-card-download-sp">
	    <div class="panel more">
	    	<div class="panel-body">
	    		<p><?php print $date;?></p>
	    		<h2 class="file-type"><?php print $filename;?></h2>
	    		<a href="<?php print $url; ?>" target="_blank"><i class="fa fa-file-text-o"></i><span> Download</span></a>
	    	</div>
	    </div>
	</div>
</div>

