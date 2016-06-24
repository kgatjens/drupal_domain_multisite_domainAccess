<?php
/**
 * @file
 * optimhealth_provider.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function optimhealth_provider_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_node_info().
 */
function optimhealth_provider_node_info() {
  $items = array(
    'provider' => array(
      'name' => t('Provider'),
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
