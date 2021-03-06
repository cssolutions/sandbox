<?php
//Ad Hoc queries
function setUserCountryCode($userid, $countrycode)
{
	$dbh = new DB_Mysql_Test;
	$query = "UPDATE users SET countrycode = :1 WHERE userid = :2";
	$dbh->prepare($query)->execute($countrycode, $userid);
}

//The Active Record pattern:
//The distinguishing factor of the Active Record pattern is that the encapsulating class
//will have an insert() , an update() , and a delete() method for synchronizing an
//object with its associated database row. It should also have a set of finder methods to cre-
//ate an object from its database row, given an identifier.
class Users() {}


//The Mapper Pattern
class Users() {}
class UserMapper() {}


//The Integrated Mapper Pattern
class Users() {}