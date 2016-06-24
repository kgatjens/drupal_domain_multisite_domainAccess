<?php
/**
 * @file
 * optimhealth_service_multilevel.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function optimhealth_service_multilevel_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_service_multilevel_content|node|service_multilevel|form';
  $field_group->group_name = 'group_service_multilevel_content';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'service_multilevel';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Service Multilevel Content',
    'weight' => '0',
    'children' => array(
      0 => 'group_service_multilevel_gi',
      1 => 'group_service_multilevel_ci',
    ),
    'format_type' => 'multipage-group',
    'format_settings' => array(
      'formatter' => '',
      'instance_settings' => array(
        'classes' => 'group-service-multilevelcontent field-group-multipage-group',
        'page_header' => 3,
        'move_additional' => 1,
        'page_counter' => 1,
        'move_button' => 0,
      ),
    ),
  );
  $export['group_service_multilevel_content|node|service_multilevel|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_service_multilevel_gi|node|service_multilevel|form';
  $field_group->group_name = 'group_service_multilevel_gi';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'service_multilevel';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_service_multilevel_content';
  $field_group->data = array(
    'label' => 'General Information',
    'weight' => '48',
    'children' => array(
      0 => 'title',
      1 => 'field_service_multilevel_links',
      2 => 'field_service_multilevel_excerpt',
      3 => 'field_service_multilevel_it',
    ),
    'format_type' => 'multipage',
    'format_settings' => array(
      'label' => 'General Information',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-service-multilevel-gi',
        'description' => '',
      ),
      'formatter' => 'start',
    ),
  );
  $export['group_service_multilevel_gen_info|node|service_multilevel|form'] = $field_group;

  return $export;
}
