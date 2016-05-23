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