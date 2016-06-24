<?php
  $vocabulary = taxonomy_vocabulary_machine_name_load('treatments_category');
  $terms = array();
  //get the current domain path 
  global $base_url;
  //load taxonomies from vocabulary 
  $terms['_none'] = '- None -';
  foreach(entity_load('taxonomy_term', FALSE, array('vid' => $vocabulary->vid)) as $item){
  //check if the custom field has the same domain as the page
    
    if($item->field_taxonomy_domain['und'][0]['value'] == str_replace('dev.','', str_replace('http://', '', $base_url))){
      //create a neww array from same domain terms
      $terms[$item->tid] = $item->name;
    }
  }

  
  
  $element['#options']= $terms;