<?php
/**
 * @file
 * optimhealth_service_multilevel.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function optimhealth_service_multilevel_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_node_info().
 */
function optimhealth_service_multilevel_node_info() {
  $items = array(
    'service_multilevel' => array(
      'name' => t('Service Multilevel'),
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
