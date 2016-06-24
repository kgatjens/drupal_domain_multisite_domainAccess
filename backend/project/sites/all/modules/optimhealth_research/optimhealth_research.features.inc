<?php
/**
 * @file
 * optimhealth_research.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function optimhealth_research_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_node_info().
 */
function optimhealth_research_node_info() {
  $items = array(
    'research' => array(
      'name' => t('Research'),
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
