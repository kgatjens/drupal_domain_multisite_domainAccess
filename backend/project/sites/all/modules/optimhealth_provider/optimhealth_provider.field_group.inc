<?php
/**
 * @file
 * optimhealth_provider.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function optimhealth_provider_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_provider_content|node|provider|form';
  $field_group->group_name = 'group_provider_content';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'provider';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Provider Content',
    'weight' => '0',
    'children' => array(
      0 => 'group_provider_config',
      1 => 'group_provider_general_info',
    ),
    'format_type' => 'multipage-group',
    'format_settings' => array(
      'formatter' => '',
      'instance_settings' => array(
        'classes' => 'group-provider-content field-group-multipage-group',
        'page_header' => 3,
        'move_additional' => 1,
        'page_counter' => 1,
        'move_button' => 0,
      ),
    ),
  );
  $export['group_provider_content|node|provider|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_provider_general_info|node|provider|form';
  $field_group->group_name = 'group_provider_general_info';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'provider';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_provider_content';
  $field_group->data = array(
    'label' => 'General Content',
    'weight' => '45',
    'children' => array(
      0 => 'field_provider_excerpt',
      1 => 'field_provider_left_column',
      2 => 'field_provider_right_column',
      3 => 'title',
    ),
    'format_type' => 'multipage',
    'format_settings' => array(
      'label' => 'General Content',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-provider-general-info',
        'description' => '',
      ),
      'formatter' => 'start',
    ),
  );
  $export['group_provider_general_info|node|provider|form'] = $field_group;

  return $export;
}
