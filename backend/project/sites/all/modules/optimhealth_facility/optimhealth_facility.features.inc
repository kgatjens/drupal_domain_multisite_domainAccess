<?php
/**
 * @file
 * optimhealth_facility.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function optimhealth_facility_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_node_info().
 */
function optimhealth_facility_node_info() {
  $items = array(
    'facility' => array(
      'name' => t('Facility'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
