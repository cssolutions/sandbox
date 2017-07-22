<?php

/**
 * Created by PhpStorm.
 * User: csaba
 * Date: 2017.07.17.
 * Time: 15:28
 */

class OninfloPaginator {

    private $builder,
            $count = 0,
            $perPage = 1,
            $currentPage = 0;

    public function __construct($queryBuilder, $count, $perPage, $currentPage) {
        $this->count = $count;
        $this->perPage = $perPage;
        $this->currentPage = $currentPage;

        $this->builder = $queryBuilder->limit($perPage)
                     ->offset($perPage*$currentPage);
    }

    public function currentPage() {
        return $this->currentPage;
    }

    public function lastPage() {
        return $this->count / $this->perPage;
    }

    public function total() {
        return $this->count;
    }

    public function pageItems() {
        return $this->builder->findAll();
    }

}