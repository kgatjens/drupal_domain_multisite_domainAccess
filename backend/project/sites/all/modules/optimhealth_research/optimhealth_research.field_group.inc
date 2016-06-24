<?php
/**
 * @file
 * optimhealth_research.field_group.inc
 */

/**
 * Implements hook_field_group_info().
 */
function optimhealth_research_field_group_info() {
  $export = array();

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_research_content|node|research|form';
  $field_group->group_name = 'group_research_content';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'research';
  $field_group->mode = 'form';
  $field_group->parent_name = '';
  $field_group->data = array(
    'label' => 'Research Content',
    'weight' => '1',
    'children' => array(
      0 => 'group_research_general_info',
      1 => 'group_research_config_info',
    ),
    'format_type' => 'multipage-group',
    'format_settings' => array(
      'formatter' => '',
      'instance_settings' => array(
        'classes' => '',
        'page_header' => 3,
        'move_additional' => 1,
        'page_counter' => 1,
        'move_button' => 0,
      ),
    ),
  );
  $export['group_research_content|node|research|form'] = $field_group;

  $field_group = new stdClass();
  $field_group->disabled = FALSE; /* Edit this to true to make a default field_group disabled initially */
  $field_group->api_version = 1;
  $field_group->identifier = 'group_research_general_info|node|research|form';
  $field_group->group_name = 'group_research_general_info';
  $field_group->entity_type = 'node';
  $field_group->bundle = 'research';
  $field_group->mode = 'form';
  $field_group->parent_name = 'group_research_content';
  $field_group->data = array(
    'label' => 'General Information',
    'weight' => '12',
    'children' => array(
      0 => 'field_research_image',
      1 => 'field_research_date',
      2 => 'field_research_left_text',
      3 => 'field_research_right_text',
      4 => 'field_research_excerpt',
      5 => 'title',
    ),
    'format_type' => 'multipage',
    'format_settings' => array(
      'label' => 'General Information',
      'instance_settings' => array(
        'required_fields' => 1,
        'classes' => 'group-research-general-info',
        'description' => '',
      ),
      'formatter' => 'start',
    ),
  );
  $export['group_research_general_info|node|research|form'] = $field_group;

  return $export;
}
