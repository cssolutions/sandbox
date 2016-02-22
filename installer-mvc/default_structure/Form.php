<?php
namespace App\Forms;

use Phalcon\Forms\Form;
use Phalcon\Forms\Element\Text;
use Phalcon\Forms\Element\Submit;
use Phalcon\Forms\Element\Hidden;
use Phalcon\Validation\Validator\PresenceOf;
use Phalcon\Validation\Validator\Identical;
use App\Validations\IsOwnHouse;

use Oninflo\Forms\Decorator;

class HouseForm extends Form
{
    use Decorator;

    public function initialize( $entity , $options)
    {

        if (isset($options['type']) && $options['type'] == 'edit' ) {
            $id = new Hidden('id');
            $id->addValidators(array(
                new IsOwnHouse([
                    //"message" => "Ez az email nem a@b.hu"
                ])
            ));
            $this->add($id);
        }

        $name = new Text('name', []);

        $name->addValidators(array(
            new PresenceOf(array(
                'message' => 'Az elnevezés kötelező'
            ))
        ));
        $name->setLabel('Elnevezés');
        $this->add($name);


        $hrsz = new Text('hrsz', []);
        $hrsz->addValidators(array(
            new PresenceOf(array(
                'message' => 'A hrsz megadása kötelező!'
            ))
        ));
        $hrsz->setLabel('Helyrajzi szám');
        $this->add($hrsz);

    }
}
