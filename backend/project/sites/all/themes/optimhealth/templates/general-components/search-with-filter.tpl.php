<div class="pure-oh-m-search-withfilter">
	<div class="row">
		<div class="col-lg-8 col-md-8 col-sm-6 col-xs-12">
			<input type="search" placeholder="Search" class="search-input" id="inputSearch"/>
			<i class="fa fa-search icon-search"></i>
		</div>
		<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
			<div class="dropdown filter">
				<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
					<span data-bind="label">All</span><i class="fa fa-caret-down pull-right"></i>
				</button>

				<ul class="dropdown-menu" role="menu">
					<?php 
					$temporal_collections = array();
				
					foreach($collection as $item){ 
						$temporal_collections[]= $item->name;
					}
					
					sort($temporal_collections);
					?> 

				
					<li class="all display-none"><a href="#">All</a></li>
					<?php 
					foreach ($temporal_collections as $key => $value){ ?> 
						<li><a href="#"><?php print $value; ?></a></li>
					<?php } ?>
				</ul>
			</div>
		</div>
	</div>
</div>