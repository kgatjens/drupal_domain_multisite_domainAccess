<?php
/**
 * @file
 * optimhealth_facility.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function optimhealth_facility_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_facility_content|node|facility|form';
  $field_group->group_name = 'group_facility_content';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'facility';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Facility Content',
    'weight' => '0',
    'children' => array(
      0 => 'group_facility_general_info',
      1 => 'group_facility_config_info',
    ),
    'format_type' => 'multipage-group',
    'format_settings' => array(
      'formatter' => '',
      'instance_settings' => array(
        'classes' => 'group-facility-content field-group-multipage-group',
        'page_header' => 3,
        'move_additional' => 1,
        'page_counter' => 1,
        'move_button' => 0,
      ),
    ),
  );
  $export['group_facility_content|node|facility|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_facility_general_info|node|facility|form';
  $field_group->group_name = 'group_facility_general_info';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'facility';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_facility_content';
  $field_group->data = array(
    'label' => 'General Information',
    'weight' => '9',
    'children' => array(
      0 => 'field_facility_image',
      1 => 'field_facility_body',
      2 => 'field_facility_excerpt',
      3 => 'title',
    ),
    'format_type' => 'multipage',
    'format_settings' => array(
      'label' => 'General Information',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-facility-general-info',
        'description' => '',
      ),
      'formatter' => 'start',
    ),
  );
  $export['group_facility_general_info|node|facility|form'] = $field_group;

  return $export;
}
