<?php
/**
 * CRUD tesztek
 * usereknél, role-oknál, permission-öknél megnézni, hogy megy-e a létrehozás/szerkesztés/törlés
 *
 *
 * Jogosultsági tesztek
 * Megnézni, hogy nem létező felhasználó be tud-e lépni
 * Megnézni, hogy felhasználóh csak azokat az oldalakat tudja megtekinteni, amelyekhez ténylegesen jogosultága van
 *
 * Megnézni, hogy nem létező felhasználó be tud-e lépni
 * User létrehozását tesztelni adminként
 *    Megnézni, hogy admin(felhasznló) be tud-e lépni
 *    Megnézni, hogy a profile-route létezik-e
 *       Ha nem akkor létrehozást tesztelni
 *    Megnézni, hogy a profile-group létezik-e
 *       Ha nem akkor létrehozást tesztelni
 *    Megnézni, hogy a felhasználók listázásakor létezik-e a felhasználó
 *       Ha nem akkor létrehozást tesztelni
 *    Megnézni, hogy a profile-group és profile-route összerendelése megy-e
 *       Ha nem, akkor az összerendelést tesztelni
 *    Megnézni, hogy felhasználó be tud-e jelentkezni és látja e a profile feliratot
 *    INNEN az előzőek fordítottja

 *
 * Test anonymus user can't access protected content, based on auth
 * Test invalid user can't login, and has anonymus user auth
 * Test, if valid user can login
 * Test role/group CRUD
 * Test route/permission CRUD
 * Test user CRUD
 * Test:
 *    create user,
 *    check if it can visit a non-existing route
 *    create a route
 *    check if user get a permission denied message
 *    check if user has group with name users
 *    create a users group
 *    check if user has group with name users
 *    check if user get a permission denied message
 *    assign a permission to the group users
 *    check if a user can see Edit profile
 */


/**
 * Test anonymus user can't access protected content
 */
$I->amOnPage('/login');
$I->see('Log in!');
$I->amOnPage('/');
$I->see('Public content...');
$I->amOnPage('/users');
$I->see('Content not found OR you don\'t have acces to this module!');
$I->amOnPage('/groups');
$I->see('Content not found OR you don\'t have acces to this module!');
$I->amOnPage('/permissions');
$I->see('Content not found OR you don\'t have acces to this module!');
$I->amOnPage('/not-available');
$I->see('Content not found OR you don\'t have acces to this module!');

/**
 * Test invalid user can't login, and has anonymus user auth
 * Try with invalid field values(with unacceptable strings)
 * Try with invalid field values(with acceptable strings)
 * Try with invalid field values(with empty strings)
 */
$I->amOnPage('/login');
$I->fillField('username', 'user');
$I->fillField('password', 'user');
$I->click('LOGIN');
$I->see('Invalid credentials!');

$I->amOnPage('/login');
$I->fillField('username', 'user');
$I->fillField('password', 'user');
$I->click('LOGIN');
$I->see('Invalid credentials!');

$I->amOnPage('/login');
$I->fillField('username', 'user');
$I->fillField('password', 'user');
$I->click('LOGIN');
$I->see('Invalid credentials!');

$I->amOnPage('/login');
$I->fillField('username', '');
$I->fillField('password', '');
$I->click('LOGIN');
$I->see('Invalid credentials!');

/**
 * Test, if valid user can login
 */
$I->amOnPage('/login');
$I->fillField('username', 'user');
$I->fillField('password', 'user');
$I->click('LOGIN');
$I->see('Dashboard');

/**
 * Login as admin
 * See if non-existing role/group exists
 * Create a role/group
 * See if created role/group exists
 * Delete a role/group
 * See if deleted role/group exists
 */
$I->amOnPage('/admin');
$I->fillField('username', 'admin');
$I->fillField('password', 'admin');
$I->click('LOGIN');
$I->see('Admin dashboard!');

$I->amOnPage('/roles/create');
$I->fillField('name', 'user');
$I->click('Hozzáadás');
$I->see('user szerepkör hozzáadva!');



/**
 * Login as admin
 * See if non-existing route/permission exists
 * Create a route/permission
 * See if created route/permission exists
 * Delete a route/permission
 * See if deleted route/permission exists
 */
$I->amOnPage('/users');
$I->fillField('firstname', 'user');
$I->fillField('lastname', 'user');
$I->fillField('username', 'user');
$I->fillField('email', 'user');
$I->click('add');
$I->see('user added!');
$I->see('user has groups: users');

$I->amOnPage('/admin');
$I->fillField('username', 'admin');
$I->fillField('password', 'admin');
$I->click('LOGIN');

/**
 * Login as admin
 * See if non-existing user exists
 * Create a user
 * See if created user exists
 * Delete a user
 * See if deleted user exists
 */
$I->amOnPage('/users');
$I->fillField('firstname', 'user');
$I->fillField('lastname', 'user');
$I->fillField('username', 'user');
$I->fillField('email', 'user');
$I->click('add');
$I->see('user added!');
$I->see('user has groups: users');


$I->amOnPage('/admin');
$I->fillField('username', 'admin');
$I->fillField('password', 'admin');
$I->click('LOGIN');




//se
$I->amOnPage('/permissions');
$I->click('LOGIN');
$I->see('Welcome, Davert!');