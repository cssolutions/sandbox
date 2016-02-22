<?php
namespace App\Controllers;

use Oninflo\Controllers\BaseController;
use Oninflo\Controllers\RESTfulController;
use App\Validations\IsOwnHouse;
use Phalcon\Validation;


class HouseController extends BaseController
{
    use RESTfulController;

    public $_model = 'App\\Models\\Houses';

    public $_resource = 'houses';

    public $_controller = 'house';

    public $_itemName = '\'Ház\'';

    public $_config = [
        'createForm'    => 'App\\Forms\\HouseForm',
        'updateForm'    => 'App\\Forms\\HouseForm'
    ]; 

    public function indexOptions(){
        return [[
            'usersId = ' . $this->auth->getIdentity()["id"] 
        ]];
    }

    public function showOptions(){
        return [
            'usersId = ' . $this->auth->getIdentity()["id"] 
        ];
    }

    public function searchOptions(){
        return [
            'usersId = ' . $this->auth->getIdentity()["id"] 
        ];
    }

    public function destroyValidation($id){
        $validation = new Validation();
        $validation->add('usersId', new IsOwnHouse([]));
        return $validation->validate(['usersId'=>$id ]);
    }

    public function myHousesAction(){
        return $this->auth->getIdentity()['items'];
    }

}
