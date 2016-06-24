This document describes the structure of this template.

Folders:
|-exported_views: all the views needed on production.
|
|-public: Javascript Images, Css.
|
|-Templates: Templates files
  |
  |-general-components: Components used in the template files on multiple parts
  |
  |-node: views of each node (https://api.drupal.org/api/drupal/modules!node!node.tpl.php/7)
  |
  |-pages: views of specifc page template (https://api.drupal.org/api/drupal/modules!system!page.tpl.php/7)
  |
  |-regions: views of specific region on the page (https://api.drupal.org/api/drupal/modules!system!region.tpl.php/7v)
  |
  |-views: themes for each view (https://api.drupal.org/api/views/theme!views-view.tpl.php/7)
  

The template-fields.php file is used for proccess an specifc field normally this field is a field collection or entity reference or field collection with entity reference

The template-function.php file is used to invoke an specific part of the template normally is connected to general-components views, this functions will be access from other tpls.

The template-helper is the core of the template.php, this file contains the implementation of all the functions and how to process all the fields defined  on the cms.

Template-overrides contains the implementation of the functions used to preprocess views or nodes.

template.php includes the other files also contains the dynamic load of nodes, pages, regions and views.

