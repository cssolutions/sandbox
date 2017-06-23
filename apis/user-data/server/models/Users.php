<?php

use Phalcon\Mvc\Model;
/**
 * Created by PhpStorm.
 * User: csaba
 * Date: 2017.06.23.
 * Time: 17:04
 */
class Users extends Model {

    public $uid;

    public $username;

    public $password;

    public $others;

    public $isActive;

    public $createdAt;

    public $deletedAt;

    public function getId() {
        return $this->uid;
    }

    public function setId($id) {
        $this->uid = $id;
    }

    public function getUsername() {
        return $this->username;
    }

    public function setUsername($username) {
        $this->username = $username;
    }

    public function getPassword() {
        return $this->password;
    }

    public function setPassword($password) {
        $this->password = $password;
    }

    public function getOthers() {
        return $this->others;
    }

    public function setOthers($others) {
        $this->others = $others;
    }

    public function getIsActive() {
        return $this->isActive;
    }

    public function setIsActive($isActive) {
        $this->isActive = $isActive;
    }

    public function getCreatedAt() {
        return $this->createdA;
    }

    public function setCreatedAt($createdAt) {
        $this->createdAt = $createdAt;
    }

    public function getDeletedAt() {
        return $this->deletedAt;
    }

    public function setDeletedAt($deletedAt) {
        $this->deletedAt = $deletedAt;
    }

}