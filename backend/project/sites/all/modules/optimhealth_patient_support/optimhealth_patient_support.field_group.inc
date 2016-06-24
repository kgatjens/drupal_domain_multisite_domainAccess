<?php
/**
 * @file
 * optimhealth_patient_support.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function optimhealth_patient_support_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_patient_support_content|node|patient_support|form';
  $field_group->group_name = 'group_patient_support_content';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'patient_support';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Patient Support Content',
    'weight' => '0',
    'children' => array(
      0 => 'group_patient_support_gen_info',
      1 => 'group_patient_support_conf_info',
    ),
    'format_type' => 'multipage-group',
    'format_settings' => array(
      'formatter' => '',
      'instance_settings' => array(
        'classes' => 'group-patient-support-content field-group-multipage-group',
        'page_header' => 3,
        'move_additional' => 1,
        'page_counter' => 1,
        'move_button' => 0,
      ),
    ),
  );
  $export['group_patient_support_content|node|patient_support|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_patient_support_gen_info|node|patient_support|form';
  $field_group->group_name = 'group_patient_support_gen_info';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'patient_support';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_patient_support_content';
  $field_group->data = array(
    'label' => 'General Information',
    'weight' => '48',
    'children' => array(
      0 => 'field_patient_support_intro_text',
      1 => 'field_patient_support_column_1',
      2 => 'field_patient_support_column_2',
      3 => 'field_links',
      4 => 'field_patient_support_excerpt',
      5 => 'title',
    ),
    'format_type' => 'multipage',
    'format_settings' => array(
      'label' => 'General Information',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-patient-support-gen-info',
        'description' => '',
      ),
      'formatter' => 'start',
    ),
  );
  $export['group_patient_support_gen_info|node|patient_support|form'] = $field_group;

  return $export;
}
