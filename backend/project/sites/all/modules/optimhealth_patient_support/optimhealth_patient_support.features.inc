<?php
/**
 * @file
 * optimhealth_patient_support.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function optimhealth_patient_support_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "field_group" && $api == "field_group") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_node_info().
 */
function optimhealth_patient_support_node_info() {
  $items = array(
    'patient_support' => array(
      'name' => t('Patient Support'),
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
