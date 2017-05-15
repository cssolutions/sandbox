<?php

function buildTree(array $elements, $parentId = 0) {
    $branch = [];

    foreach ($elements as $element) {

        if ($element['parentId'] == $parentId) {

            if (($children = buildTree($elements, $element['id']))) $element['children'] = $children;
            
            $branch[] = $element;

        }
    }

    return $branch;
}

function build_tree_html(array $elements, $parentId = 0) {
    $html = '';
    if (count($elements)) {
        $html .= '<ul class="comments-list">';

        foreach ($elements as $element) {
            if ($element['parent_users_id'] == $parentId) {
                $html .= '<li class="comment"><a class="pull-left" href="#">' . $element['email'] . '</a><div class="comment-body"><p>Sure, oooooooooooooooohhhhhhhhhhhhhhhh</p></div>';

                if (($children = $this->build_tree_html($elements, $element['users_id']))) {
                    $html .= $children;
                }
                $html .= '</li>';
            }
        }

        $html .= '</ul>';
    }
    return $html;
}