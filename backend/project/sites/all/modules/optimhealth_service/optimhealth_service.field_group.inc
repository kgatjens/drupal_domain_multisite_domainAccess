<?php
/**
 * @file
 * optimhealth_service.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function optimhealth_service_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_service_content|node|service|form';
  $field_group->group_name = 'group_service_content';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'service';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Service Content',
    'weight' => '0',
    'children' => array(
      0 => 'group_service_general_info',
      1 => 'group_service_config_info',
    ),
    'format_type' => 'multipage-group',
    'format_settings' => array(
      'formatter' => '',
      'instance_settings' => array(
        'classes' => 'group-service-content field-group-multipage-group',
        'page_header' => 3,
        'move_additional' => 1,
        'page_counter' => 1,
        'move_button' => 0,
      ),
    ),
  );
  $export['group_service_content|node|service|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_service_general_info|node|service|form';
  $field_group->group_name = 'group_service_general_info';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'service';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_service_content';
  $field_group->data = array(
    'label' => 'General Information',
    'weight' => '9',
    'children' => array(
      0 => 'field_service_image',
      1 => 'field_service_body',
      2 => 'field_service_excerpt',
      3 => 'title',
    ),
    'format_type' => 'multipage',
    'format_settings' => array(
      'label' => 'General Information',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-service-general-info',
        'description' => '',
      ),
      'formatter' => 'start',
    ),
  );
  $export['group_service_general_info|node|service|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_work_comp_content|node|work_comp|form';
  $field_group->group_name = 'group_work_comp_content';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'work_comp';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Work Comp Content',
    'weight' => '0',
    'children' => array(
      0 => 'group_work_comp_gen_info',
      1 => 'group_work_comp_config_info',
    ),
    'format_type' => 'multipage-group',
    'format_settings' => array(
      'formatter' => '',
      'instance_settings' => array(
        'classes' => 'group-work-comp-content field-group-multipage-group',
        'page_header' => 3,
        'move_additional' => 1,
        'page_counter' => 1,
        'move_button' => 0,
      ),
    ),
  );
  $export['group_work_comp_content|node|work_comp|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_work_comp_gen_info|node|work_comp|form';
  $field_group->group_name = 'group_work_comp_gen_info';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'work_comp';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_work_comp_content';
  $field_group->data = array(
    'label' => 'General Information',
    'weight' => '6',
    'children' => array(
      0 => 'field_work_comp_body',
      1 => 'title',
    ),
    'format_type' => 'multipage',
    'format_settings' => array(
      'label' => 'General Information',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-work-comp-gen-info',
        'description' => '',
      ),
      'formatter' => 'start',
    ),
  );
  $export['group_work_comp_gen_info|node|work_comp|form'] = $field_group;

  return $export;
}
