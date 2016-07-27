<?php
/**
 * New privileges:
 *  - Admin (oldal kezelője, én)
 *  - Executive(közös képviselő, szövetkezeti vezető)
 *  - Tenant(lakó)
 *  - Owners(lakás tulajdonosai)
 *  - Others(publikus felhasználók
 * 
 * 
 * 
 * Először kigyűjteni jelenleg milyen privilégiumok vannak
 * Rájuk keresni, kicserélni őket   Read-Only=>Others,Users=>Tenant, Users=>Executive, Admin=>Admin
 * Megkeresni, hol van lekérve a felhasználó authból a house, saircase, flat-id, majd azokat a lentebbeknek megfelelően átírni
 * A route-oló scriptet átírni
 * 
 * )
 */



/**
 * Routing
 */
$routes['Read-Only'] = [
	'PublicController::PublicAction' => 'Kezdőoldal'
];

$routes['Users'] = $routes['Read-Only'] + [
	'UsersController::UsersAction' => 'Felhasználói oldal'
];

$routes['Admin'] = $routes['Users'] + [
	'ElsoController::ElsoAction' => 'Első admin 1',
	'ElsoController::MasodikAction' => 'Első admin 2',
	'ElsoController::HarmadikAction' => 'Első admin 3',
	'MasodikController::ElsoAction' => 'Második admin 1',
	'MasodikController::ElsoAction' => 'Második admin 2',
];

$this->auth->getIdentity()['role'] = 'Admin';
$userRoutes = unserialize($user->acl);
$userRoutes = ['ElsoController::ElsoAction', 'ElsoController::MasodikAction', 'MasodikController::ElsoAction'];

if (is_array($userRoutes)) {
	foreach ($routes[$this->auth->getIdentity()['role']] as $route => $route_name) if (!in_array($route, $userRoutes)) unset($routes[$route]);
}

if (!in_array($currentController . '::' . $currentAction, $routes)) $redirect;
else $notRedirect;

$user = [
	'id'				=> 'uid',
	'role'			=> 'roleId',
	'name'			=> 'name',
	'mail'			=> 'mail',
	'house'			=> ['id' => 'houseId', 'name' => 'houseName'],
	'staircase' => ['id' => 'stairId', 'name' => 'stairName'],
	'flat'			=> ['id' => 'flatsId', 'name' => 'flatsName']
];

/**
 * Building up the privilege form
 */
$flat_mates = ['uid1' => ['name' => 'Zsolt', 'mail' => 'zsolt@mail.hu', 'routes' => ['ElsoController::ElsoAction', 'ElsoController::MasodikAction']], 'uid2' => ['name' => 'Csaba', 'mail' => 'csaba@mail.hu', 'routes' => ['ElsoController::HarmadikAction']]];
$flat_mates = $user->flatMates();
echo '<tr>';
foreach ($routes[$this->auth->getIdentity()['role']] as $route => $route_name) {
	echo '<td>' . $route_name . '</td>';
}	
echo '</tr>';
echo '<tr>';
array_unshift($flat_mates, false);
foreach ($flat_mates as $flat_mate_route) {
	foreach ($routes[$this->auth->getIdentity()['role']] as $route => $route_name) {
		echo '<input type="checkbox" '. ((array_key_exists($flat_mate_route, $routes[$this->auth->getIdentity()['role']])) ? 'checked' : '' ).'>';
	}	
}
echo '</tr>';

/**
 * Receiving the privilege form
 */
class faszom {
	public function SetUserRoutesAction() {
		$user = Users::findFirstById($this->request->getPost('uid', 'int', 0));
		if ($user) {
			$routes = $this->config['routes'][$this->auth->getIdentity()['role']];
			$routes_to_write = [];
			foreach ($this->request->getPost('routes', null, []) as $route) if (array_key_exists($route, $routes)) $routes_to_write[] = $route;
			$user->acl = serialize($routes_to_write);
			$user->save();
		}
	}	
}