<?php
/**
 * @file
 * optimhealth_patient_tool.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function optimhealth_patient_tool_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_patient_tools_content|node|patient_tool|form';
  $field_group->group_name = 'group_patient_tools_content';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'patient_tool';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Patient Tools Content',
    'weight' => '0',
    'children' => array(
      0 => 'group_patient_tools_gen_content',
      1 => 'group_patient_tools_conf_content',
    ),
    'format_type' => 'multipage-group',
    'format_settings' => array(
      'formatter' => '',
      'instance_settings' => array(
        'classes' => 'group-patient-tools-content field-group-multipage-group',
        'page_header' => 3,
        'move_additional' => 1,
        'page_counter' => 1,
        'move_button' => 0,
      ),
    ),
  );
  $export['group_patient_tools_content|node|patient_tool|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_patient_tools_gen_content|node|patient_tool|form';
  $field_group->group_name = 'group_patient_tools_gen_content';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'patient_tool';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_patient_tools_content';
  $field_group->data = array(
    'label' => 'General Content',
    'weight' => '8',
    'children' => array(
      0 => 'field_patient_tool_body',
      1 => 'field_patient_tools_excerpt',
      2 => 'field_patient_tool_document',
      3 => 'title',
    ),
    'format_type' => 'multipage',
    'format_settings' => array(
      'label' => 'General Content',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-patient-tools-gen-content',
        'description' => '',
      ),
      'formatter' => 'start',
    ),
  );
  $export['group_patient_tools_gen_content|node|patient_tool|form'] = $field_group;

  return $export;
}
