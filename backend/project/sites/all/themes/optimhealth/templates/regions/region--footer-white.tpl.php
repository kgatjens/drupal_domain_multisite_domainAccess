<?php 
    //the menu was defined on drupal
    //check the section structure/menus on the cms
?>

<footer>
    <div class="row">
        <div class="col-sm-6 col-xs-12">
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
        <div class="col-sm-6 col-xs-12">
            <p>*Optim Spine is a collaboration of Optim Orthopedics and the physician-owned Optim Medical Center-Tattnall.</p>
        </div>
    </div>
</footer>