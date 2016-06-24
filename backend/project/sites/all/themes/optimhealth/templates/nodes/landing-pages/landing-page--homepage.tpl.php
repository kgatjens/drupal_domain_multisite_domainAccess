<?php 
    //the variables used on $node->obj_tpl_data->variable_name 
    //was defined on template-overrides.php 
?>
<?php $host = $_SERVER['HTTP_HOST']; ?>

<?php //Change this when mobile images are available ?>
<div id="image-background" class="background" style="background-image:url(<?php print $node->obj_tpl_data->image; ?>)" data-image-src="<?php print $node->obj_tpl_data->image; ?>" >
    <div class="container">
        <div class="row">
            
            <?php 
                global $_domain;

                $logo_url = optimhealth_get_logo_url( 'white' );
            ?>
            <div class="col-xs-12 header-home">
                <div class="row">
                    <div class="col-xs-10">
                        <img src="<?php print $logo_url; ?>" class='icon-logo'<?php echo $_domain['domain_id'] == 11 ? ' style="max-width: 239px;"' : ''; ?>/>
                    </div>
                
                    <div class="col-xs-2 text-right">
                        <a class="search-home-icon" href="#" data-toggle="modal" data-target="#search-modal"><i class="fa fa-search icon-search"></i></a>
                    </div>
                </div>
            </div>
                
            
        </div>
        <div class="row">
            <div class="col-sm-9 col-lg-7">
                <?php if ( $host == 'optimhealth.com' || $host == 'dev.optimhealth.com' ) { ?>
                     <div id="healthcare-homepage">
                <?php } ?>

                <div class="accordion" id="accordion">
                    <?php $cont = 1; ?>
                    <?php foreach($node->obj_tpl_data->accordion_items as $item){ ?>

                        <div class="accordion-item">
                            <div class="accordion-heading">
                                <?php //Change this when mobile images are available ?>
                                <h2 class="title-home" data-target="#collapse-<?php print $cont; ?>">
                                    <span class="arrow-title"><i class="fa fa-angle-right"></i></span>
                                    <a href="<?php print $item['accordion_link']; ?>" data-image-src="<?php print $item['accordion_image']; ?>">
                                        <?php print $item['accordion_text']; ?>
                                    </a>
                                </h2>
                            </div>
                            <div id="collapse-<?php print $cont; ?>" class="hidden-xs">
                                <div class="accordion-body">
                                    <p><?php print $item['accordion_description']; ?></p>
                                    <a href="<?php print $item['accordion_link']; ?>" class="more">Learn more <i class="fa fa-chevron-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <?php $cont++; ?>
                    <?php } ?>
                </div>

                <?php if ( $host == 'optimhealth.com' || $host == 'dev.optimhealth.com' ) { ?>
                     </div>
                <?php } ?>
            </div>
        </div>

        <?php
        
        $disclaimer_text = variable_get('home_text');

        if($disclaimer_text == ""){
            $no_disclaimer = true;
            $col_sm1 = 12;
        }

        if ( $_domain['domain_id'] == 6  ) { // tattnall
            $col_sm1 = 7;
            $col_sm2 = 5;        
        } else {
            $col_sm1 = 8;
            $col_sm2 = 4;   
        }

        ?>

        <footer>
            <div class="row">                
                <div class="col-sm-<?=$col_sm1;?> col-xs-12">
                    <ul>
                        <?php $cont = 0; ?>
                        <?php // get the menu elements and print each item  ?>
                        <?php foreach(menu_tree($menu_name = 'menu-footer-menu') as $item){ ?>
                            <?php if(isset($item['#theme'])){  ?>
                                <?php if($cont == 0 ){?> 
                                    <li><a href="#" data-toggle="modal" data-target="#modalAbout" title=""><?php print $item['#localized_options']['attributes']['title']; ?></a></li>
                                <?php }else{ ?>
                                   <?php 
                                       if (strpos($item['#href'], 'http') !== false) {
                                           $domain = $item['#href']; 
                                       }else{
                                           $domain = (domain_path_path_load($item['#href']));
                                           $domain = '/'.$domain['alias']; 
                                       }
                                   ?>
                                    <li><a href="<?php print $domain; ?>"><?php print $item['#localized_options']['attributes']['title']; ?></a></li>
                                <?php } ?>
                                <?php $cont++; ?>
                            <?php } ?>
                        <?php } ?>
                    </ul>
                </div>   
                <?php if (!$no_disclaimer) { ?>       
                
                <div class="col-sm-<?=$col_sm2;?> col-xs-12 text-right disclaimer">
                    <p><?php print variable_get('home_text'); ?></p>
                </div>

                <?php } ?>
            </div>
        </footer>
    </div>
</div>