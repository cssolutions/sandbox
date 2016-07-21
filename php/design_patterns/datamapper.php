<?php
abstract class MapperAbstract
{
    public function create(array $data = null) {
        $obj = $this->_create();
        if ($data) {
            $obj = $this->populate($obj, $data);
        }
        return $obj;
    }

    public function save(DomainObjectAbstract $obj)
    {
        if (is_null($obj->getId())) {
            $this->_insert($obj);
        } else {
            $this->_update($obj);
        }
    }

    public function delete(DomainObjectAbstract $obj)
    {
        $this->_delete($obj);
    }

    abstract public function populate(DomainObjectAbstract $obj, array $data);

    abstract protected function _create();

    abstract protected function _insert(DomainObjectAbstract $obj);

    abstract protected function _update(DomainObjectAbstract $obj);

    abstract protected function _delete(DomainObjectAbstract $obj);
}

abstract class DomainObjectAbstract
{
    protected $_id = null;

    public function getId()
    {
        return $this->_id;
    }

    public function setId($id)
    {
        if (!is_null($this->_id)) {
            throw new Exception('ID is immutable');
        }
        return $this->_id = $id;
    }
}

class User extends DomainObjectAbstract
{
    public $firstname;
    public $lastname;
    public $username;

    public function getName()
    {
        return $this->firstname . ' ' . $this->lastname;
    }
}

class UserMapper extends MapperAbstract
{
    public function findById($id)
    {
        // Query database for User with $id
        // ...
        $dataFromDb = array(
                'id'        => $id,
                'firstname' => 'Brenton',
                'lastname'  => '',
                'username'  => 'Tekerson',
            );
        return $this->create($dataFromDb);
    }

    public function populate(DomainObjectAbstract $obj, array $data)
    {
        $obj->setId($data['id']);
        $obj->firstname = $data['firstname'];
        $obj->lastname  = $data['lastname'];
        $obj->username  = $data['username'];
        return $obj;
    }

    protected function _create()
    {
        return new User();
    }

    protected function _insert(DomainObjectAbstract $obj)
    {}

    protected function _update(DomainObjectAbstract $obj)
    {}

    protected function _delete(DomainObjectAbstract $obj)
    {}
}


$userMapper = new UserMapper();

// Fetch and manipulate the User object
$user = $userMapper->findById(1);
$user->lastname = 'Alker';

// Tell the UserMapper that the User needs to be saved.
$userMapper->save($user);
?>
