<?php

/**
 * @file
 * Contains theme override functions and preprocess functions
 */

/**
 * Changes the default meta content-type tag to the shorter HTML5 version
 */
function custom_html_head_alter(&$head_elements) {
  $head_elements['system_meta_content_type']['#attributes'] = array(
    'charset' => 'utf-8'
  );
}


function custom_preprocess_html(&$vars) {
  
}

function custom_preprocess_page(&$vars) {
  
}

/**
 * Return a themed breadcrumb trail.
 *
 * @param $breadcrumb
 *   An array containing the breadcrumb links.
 * @return
 *   A string containing the breadcrumb output.
 */
function custom_breadcrumb($vars) {
  $breadcrumb = $vars['breadcrumb'];
  // Determine if we are to display the breadcrumb.
  $show_breadcrumb = theme_get_setting('breadcrumb_display');
  if ($show_breadcrumb == 'yes') {

    // Optionally get rid of the homepage link.
    $show_breadcrumb_home = theme_get_setting('breadcrumb_home');
    if (!$show_breadcrumb_home) {
      array_shift($breadcrumb);
    }

    // Return the breadcrumb with separators.
    if (!empty($breadcrumb)) {
      $separator = filter_xss(theme_get_setting('breadcrumb_separator'));
      $trailing_separator = $title = '';

      // Add the title and trailing separator
      if (theme_get_setting('breadcrumb_title')) {
        if ($title = drupal_get_title()) {
          $trailing_separator = $separator;
        }
      }
      // Just add the trailing separator
      elseif (theme_get_setting('breadcrumb_trailing')) {
        $trailing_separator = $separator;
      }

      // Assemble the breadcrumb
      return implode($separator, $breadcrumb) . $trailing_separator . $title;
    }
  }
  // Otherwise, return an empty string.
  return '';
}
