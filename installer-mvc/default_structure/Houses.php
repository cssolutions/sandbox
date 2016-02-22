<?php
namespace App\Models;

use Phalcon\Mvc\Model;
use Phalcon\Mvc\Model\Behavior\Timestampable;

class Houses extends Model
{

    /**
     *
     * @var integer
     */
    public $id;

    /**
     *
     * @var integer
     */
    public $usersId;

    /**
     *
     * @var string
     */
    public $name;

    /**
     *
     * @var string
     */
    public $hrsz;

    /**
     *
     * @var integer
     */
    public $createdAt;


    public function initialize()
    {
        $this->addBehavior(new Timestampable(
            array(
                'beforeValidationOnCreate'  => array(
                    'field'     => 'createdAt',
                    'format'    => 'Y-m-d H:i:s'
                )
            )
        ));

        $this->hasMany('id', 'App\Models\OpenedAuctions', 'housesId', [
            'alias' => 'openedAuctions',
            //'foreignKey' => [
            //    'message' => 'House cannot be deleted because there are some opened auctions'
            //]
        ]);
        $this->hasMany('id', 'App\Models\ClosedAuctions', 'housesId', [
            'alias' => 'closedAuctions',
            //'foreignKey' => [
            //    'message' => 'House cannot be deleted because there are some opened auctions'
            //]
        ]);
        //$this->hasMany('id', 'App\Models\Reprezentatives', 'housesId', [
            //'alias' => 'reprezentatives',
            //'foreignKey' => array(
            //    'message' => 'User cannot be deleted because he/she has activity in the system'
            //)
        //]);
        $this->hasMany('id', 'App\Models\Staircases', 'housesId', [
            'alias' => 'staircases',
            //'foreignKey' => array(
            //    'message' => 'User cannot be deleted because he/she has activity in the system'
            //)
        ]);
        $this->hasMany('id', 'App\Models\MessageBoard', 'housesId', [
            'alias' => 'messageBoardMessages',
            //'foreignKey' => array(
            //    'message' => 'User cannot be deleted because he/she has activity in the system'
            //)
        ]);
        $this->belongsTo('usersId', 'App\Models\Users', 'id', array(
            'alias' => 'reprezentative'
        ));
    }

    public static function index($options = array(), $filterQuery = false){
        $options = implode( ' AND ' , $options );
        if($filterQuery)
            $options .= " AND (name LIKE '%{$filterQuery}%' OR hrsz LIKE '%{$filterQuery}%')";
        return self::find($options);
    }

    public function beforeValidation(){
        $this->usersId = $this->getDI()->getAuth()->getIdentity()['id'];
    }

    public static function findOwnHouses($id){
        $id = (int)$id;
        return self::findByUsersId($id)->toArray();
    }

    public static function messagePartnerList($housesId, $conversationId){
        $mp = MessageParticipants::findByMessageConversationsId($conversationId);
        $ids = [];
        foreach ($mp as $participant) {
            $ids[] = $participant->usersId;    
        }
        //var_dump(implode(',',$ids));

        $result = self::query()
                ->columns([
                    //'App\Models\Flats.id',
                    //'App\Models\Staircases.id AS stid',
                    'App\Models\Users.id as userId',
                    'App\Models\Users.name as name',
                    'App\Models\Users.email as email',
                    'App\Models\Users.image as image',
                    'IF(App\Models\Users.id IN('.implode(',',$ids).'),1,0) as isInConversation',
                    //'1234 as image',
                    "CONCAT(App\Models\Staircases.address,' ',App\Models\Staircases.addressType,' ',App\Models\Staircases.number,' ',App\Models\Flats.door) as address"
                ])
                ->rightJoin('App\Models\Staircases', 
                    'App\Models\Houses.id = App\Models\Staircases.housesId')
                ->rightJoin('App\Models\Flats', 
                    'App\Models\Staircases.id = App\Models\Flats.staircasesId')
                ->leftJoin('App\Models\Users', 
                    'App\Models\Flats.usersId = App\Models\Users.id')
                ->where('App\Models\Houses.id = :id:',['id'=>$housesId])
                ->andWhere('App\Models\Users.id IS NOT NULL ')
                //->andWhere('App\Models\Users.id NOT IN ('.implode(',',$ids).')')
                ->orderBy('name ASC')
                ->execute();

        $return = [];
        foreach ($result as $user) {
            $return[$user->userId] = [
                'name' => $user->name,
                'email' => $user->email,
                'address' => $user->address,
                'inConversation' => $user->isInConversation
            ];
        }
        return $return;
    }

    public static function getUsersForHouse($id){
        $result = self::query()
                ->columns([
                    'App\Models\Users.id as userId',
                    'App\Models\Users.name as userName',
                    'App\Models\Users.email as userEmail',
                ])
                ->rightJoin('App\Models\Staircases', 
                    'App\Models\Houses.id = App\Models\Staircases.housesId')
                ->rightJoin('App\Models\Flats', 
                    'App\Models\Staircases.id = App\Models\Flats.staircasesId')
                ->leftJoin('App\Models\Users', 
                    'App\Models\Flats.usersId = App\Models\Users.id')
                ->where('App\Models\Houses.id = :id:',['id'=>$id])
                ->orderBy('createdAt DESC')
                ->execute();

        $return = [];
        foreach ($result as $user) {
            $return[$user->userId] = $user->userName;
        }
        return $return;
    }

    public static function getFullUsersForHouse($id){
        $result = self::query()
                ->columns([
                    //'App\Models\Flats.id',
                    //'App\Models\Staircases.id AS stid',
                    'App\Models\Users.id as userId',
                    'App\Models\Users.name as name',
                    'App\Models\Users.email as email',
                    '1234 as image',
                    "CONCAT(App\Models\Staircases.address,' ',App\Models\Staircases.addressType,' ',App\Models\Staircases.number) as address"
                ])
                ->rightJoin('App\Models\Staircases', 
                    'App\Models\Houses.id = App\Models\Staircases.housesId')
                ->rightJoin('App\Models\Flats', 
                    'App\Models\Staircases.id = App\Models\Flats.staircasesId')
                ->leftJoin('App\Models\Users', 
                    'App\Models\Flats.usersId = App\Models\Users.id')
                ->where('App\Models\Houses.id = :id:',['id'=>$id])
                ->orderBy('createdAt DESC')
                ->execute();

        $return = [];
        foreach ($result as $user) {
            $return[$user->userId] = [
                'name' => $user->name,
                'email' => $user->email,
                'address' => $user->address,
            ];
        }
        return $return;
    }

    public static function getFullUsersForHouseExceptInConversation($id, $conversationId){
        $mp = MessageParticipants::findByMessageConversationsId($conversationId);
        $ids = [];
        foreach ($mp as $participant) {
            $ids[] = $participant->usersId;    
        }
        //var_dump(implode(',',$ids));

        $result = self::query()
                ->columns([
                    //'App\Models\Flats.id',
                    //'App\Models\Staircases.id AS stid',
                    'App\Models\Users.id as userId',
                    'App\Models\Users.name as name',
                    'App\Models\Users.email as email',
                    '1234 as image',
                    "CONCAT(App\Models\Staircases.address,' ',App\Models\Staircases.addressType,' ',App\Models\Staircases.number) as address"
                ])
                ->rightJoin('App\Models\Staircases', 
                    'App\Models\Houses.id = App\Models\Staircases.housesId')
                ->rightJoin('App\Models\Flats', 
                    'App\Models\Staircases.id = App\Models\Flats.staircasesId')
                ->leftJoin('App\Models\Users', 
                    'App\Models\Flats.usersId = App\Models\Users.id')
                ->where('App\Models\Houses.id = :id:',['id'=>$id])
                ->andWhere('App\Models\Users.id NOT IN ('.implode(',',$ids).')')
                ->orderBy('createdAt DESC')
                ->execute();

        $return = [];
        foreach ($result as $user) {
            $return[$user->userId] = [
                'name' => $user->name,
                'email' => $user->email,
                'address' => $user->address,
            ];
        }
        return $return;
    }

    public function afterSave(){
        $auth = $this->getDI()->getAuth();
        $identity = $auth->getIdentity();
        if($identity['profile']=='Users'){
            $items = Houses::findOwnHouses($identity['id']);
        }else{
            $items = Staircases::findOwnStaircases($identity['id']); 
        }
        $identity['items'] = $items;
        $auth->setIdentity($identity);

    }

    //public function beforeValidation(){
        //var_dump('id ' . $this->id. 'name ' . $this->name . 'hrsz ' . $this->hrsz . 'usersId ' . $this->usersId);exit();
    //}
}
