<?php
/**
 * @file
 * optimhealth_work_comp.features.field_base.inc
 */

/**
 * Implements hook_field_default_field_bases().
 */
function optimhealth_work_comp_field_default_field_bases() {
  $field_bases = array();

  // Exported field_base: 'field_work_comp_body'.
  $field_bases['field_work_comp_body'] = array(
    'active' => 1,
    'cardinality' => 1,
    'deleted' => 0,
    'entity_types' => array(),
    'field_name' => 'field_work_comp_body',
    'indexes' => array(
      'format' => array(
        0 => 'format',
      ),
    ),
    'locked' => 0,
    'module' => 'text',
    'settings' => array(),
    'translatable' => 0,
    'type' => 'text_long',
  );

  return $field_bases;
}
