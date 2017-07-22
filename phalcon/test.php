<?php
/**
 *
 * Created by PhpStorm.
 * User: csaba
 * Date: 2017.07.18.
 * Time: 10:19
 */

/**
 * Functional tests for ingatlan
 * Class UserCest
 */
class UserCest
{
    public function firstPageTest(\FunctionalTester $I)
    {
        $I->wantTo('test first page');
        $I->amOnPage('/');
        $I->see('Ingatlan keresése');
        $I->see('Cookie-szabályzat');
    }

    public function register(\FunctionalTester $I)
    {
        $I->wantTo('register as a user');
        $I->amOnPage('/regisztracio');
        $I->see('Regisztráció');
        $I->fillField('email','teszt@teszt.hu');
        $I->fillField('username','teszt');
        $I->fillField('password','teszt');
        $I->fillField('password-again','teszt');
        $I->click('#create');
        $I->see('Hello Teszt!');
    }

    public function loginAsRegularUser(\FunctionalTester $I)
    {
        $I->wantTo('log in as user');
        $I->amOnPage('/bejelentkezes');
        $I->see('Bejelentlezés');
        $I->fillField('email','teszt@teszt.hu');
        $I->fillField('username','teszt');
        $I->fillField('password','teszt');
        $I->click('#login');
        $I->see('Hello Teszt!');
    }

    public function editProfile(\FunctionalTester $I)
    {
        $I->wantTo('edit profile as a user');
        $I->amOnPage('/profil');
        $I->fillField('username','teszt2');
        $I->fillField('password','teszt2');
        $I->fillField('password-again','teszt2');
        $I->click('#edit');
        $I->see('Sikeres profil-módosítás!');
    }

    public function deleteProfile(\FunctionalTester $I)
    {
        $I->wantTo('edit profile as a user');
        $I->amOnPage('/profil-torlese');
        $I->fillField('password','teszt2');
        $I->click('#delete');
        $I->see('Sikeresen törölte fiókját!');
    }

    public function logoutAsRegularUser(\FunctionalTester $I)
    {
        $I->wantTo('log out in as regular user');
        $I->amOnPage('/profil');
        $I->click('#logout');
        $I->see('Ingatlan keresése');
    }
}

class PropertyCest
{
    public function create(\FunctionalTester $I)
    {
        $I->wantTo('create property as a user');
        $I->amOnPage('/ingatlan-letrehozasa');
        $I->click('#create');
        $I->see('Sikeresen létrehozta ingatlanját!');
    }

    public function edit(\FunctionalTester $I)
    {
        $I->wantTo('edit property as a user');
        $I->amOnPage('/ingatlan-modositas');
        $I->click('#edit');
        $I->see('Sikeresen módosította ingatlanját!');
    }

    public function delete(\FunctionalTester $I)
    {
        $I->wantTo('delete property as a user');
        $I->amOnPage('/ingatlanok');
        $I->click('#delete');
        $I->see('Sikeresen törölte ingatlanját!');
    }
}

/**
 * Acceptance tests for ingatlan
 * Class UserCest
 */
class UserCest
{
    public function firstPageTest(\AcceptanceTester $I)
    {
        $I->wantTo('test first page');
        $I->amOnPage('/');
        $I->see('Ingatlan keresése');
        $I->see('Cookie-szabályzat');
    }

    public function loginAsNonExistingUser(\AcceptanceTester $I)
    {
        $I->wantTo('log in as a non-existing user');
        $I->amOnPage('/');
        $I->click('#login_register');
        $I->waitForElement('#login', 1); // secs
        $I->fillField('email','teszt@teszt.hu');
        $I->fillField('password','teszt');
        $I->click('#login');
        $I->wait(3);
        $I->see('Rossz felhasználónév vagy jelszó!');
    }

    public function register(\AcceptanceTester $I)
    {
        $I->wantTo('register as a user');
        $I->amOnPage('/');
        $I->click('#login_register');
        $I->waitForElement('#registration', 1); // secs
        $I->click('#registration');
        $I->waitForElement('#register-form', 1);
        $I->see('Regisztráció');
        $I->fillField('email','teszt@teszt.hu');
        $I->fillField('username','teszt');
        $I->fillField('password','teszt');
        $I->fillField('password-again','teszt');
        $I->click('#create');
        $I->wait(3);
        $I->see('Sikeres regisztráció!');
    }

    public function loginAsUserWithBadPassword(\AcceptanceTester $I)
    {
        $I->wantTo('log in as a non-existing user');
        $I->amOnPage('/');
        $I->click('#login_register');
        $I->waitForElement('#login', 1); // secs
        $I->fillField('email','teszt@teszt.hu');
        $I->fillField('password','tesztelek');
        $I->click('#login');
        $I->wait(3);
        $I->see('Rossz felhasználónév vagy jelszó!');
    }

    public function loginAsRegularUser(\AcceptanceTester $I)
    {
        $I->wantTo('log in as user');
        $I->amOnPage('/');
        $I->click('#login_register');
        $I->waitForElement('#login', 1); // secs
        $I->fillField('email','teszt@teszt.hu');
        $I->fillField('password','teszt');
        $I->click('#login');
        $I->wait(3);
        $I->see('Hello Teszt!');
    }


    public function logoutAsRegularUser(\AcceptanceTester $I)
    {
        $I->amOnPage('/');
        $I->click('#profile');
        $I->waitForElement('#quit', 1); // secs
        $I->click('#quit');
        $I->wait(2);
        $I->see('Sikeresen kijelentkezett!');
    }

    public function editProfile(\AcceptanceTester $I)
    {
        $I->wantTo('edit profile as a user');
        $I->amOnPage('/');
        $I->click('#profile');
        $I->waitForElement('#edit-profile', 1); // secs
        $I->click('#edit-profile');
        $I->waitForElement('#profile-form', 1);
        $I->fillField('username','teszt2');
        $I->fillField('password','teszt2');
        $I->fillField('password-again','teszt2');
        $I->click('#edit');
        $I->wait(3);
        $I->see('Sikeres profil-módosítás!');
    }

    public function deleteProfile(\AcceptanceTester $I)
    {
        $I->amOnPage('/');
        $I->click('#profile');
        $I->waitForElement('#edit-profile', 1); // secs
        $I->click('#edit-profile');
        $I->waitForElement('#delete-profile', 1);
        $I->click('#delete-profile');
        $I->waitForElement('#agree-confirmation', 1);
        $I->click('#agree-confirmation');
        $I->wait(3); // secs
        $I->see('Sikeresen törölte profilját!');
    }

}


class PropertyCest
{
    public function create(\FunctionalTester $I)
    {
        $I->wantTo('create property as a user');
        $I->amOnPage('/ingatlan-letrehozasa');
        $I->click('#create');
        $I->see('Sikeresen létrehozta ingatlanját!');
    }

    public function edit(\FunctionalTester $I)
    {
        $I->wantTo('edit property as a user');
        $I->amOnPage('/ingatlan-modositas');
        $I->click('#edit');
        $I->see('Sikeresen módosította ingatlanját!');
    }

    public function delete(\FunctionalTester $I)
    {
        $I->wantTo('delete property as a user');
        $I->amOnPage('/ingatlanok');
        $I->click('#delete');
        $I->see('Sikeresen törölte ingatlanját!');
    }
}


$I->wait(3);
$I->see('Hello all!', '.message');

$I->performOn('.confirm', \Codeception\Util\ActionSequence::build()
    ->see('Warning')
    ->see('Are you sure you want to delete this?')
    ->click('Yes')
);

$I->waitForElement('#agree_button', 30); // secs
$I->click('#agree_button');

$I->seeElement('#modal');


class LoginCest
{
    public function tryLogin (FunctionalTester $I)
    {
        $I->amOnPage('/');
        $I->click('Login');
        $I->fillField('Username', 'Miles');
        $I->fillField('Password', 'Davis');
        $I->click('Enter');
        $I->see('Hello, Miles', 'h1');
    }
}