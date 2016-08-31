<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tm";

$mysqli = new mysqli($servername, $username, $password, $dbname);

if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

//CREATE ----------------------------------------------------------------------------------------
//$mysqli->query("CREATE TABLE myCity LIKE City");


//INSERT ----------------------------------------------------------------------------------------
//$query = "INSERT INTO houses (hid, text) VALUES (?,?)";
//$stmt = $mysqli->prepare($query);
//$stmt->bind_param("is", $val1, $val2);
//
//$val1 = '2';
//$val2 = 'Második teszt';
//$stmt->execute();
//
//$val1 = '3';
//$val2 = 'Harmadik teszt';
//$stmt->execute();
//$stmt->close();


//UPDATE ----------------------------------------------------------------------------------------
//if ($mysqli->query("UPDATE houses SET text='Masodik' WHERE hid=2") === TRUE) echo "Record updated successfully";
//else echo "Error updating record: " . $mysqli->error;

//SELECT ----------------------------------------------------------------------------------------
//$query = "SELECT hid, text FROM houses";
//if ($result = $mysqli->query($query)) {
//    while ($row = $result->fetch_row()) {
//        printf("%s,%s\n", $row[0], $row[1]);
//    }
//    $result->close();
//}

//SELECT PREPARED ----------------------------------------------------------------------------------------
//$query = "SELECT hid, text FROM auction WHERE hid = ?";
//$stmt = $mysqli->prepare($query);
//$value = 1;
//$stmt->bind_param("i", $value);
//$result = $stmt->execute();
//$stmt->bind_result($col1, $col2);
//while ($stmt->fetch()) {
//		printf("%s %s\n", $col1, $col2);
//}

//if ($result = $mysqli->query($query)) {
//    while ($row = $result->fetch_row()) {
//        printf("%s,%s\n", $row[0], $row[1]);
//    }
//    $result->close();
//}

//CALL PROCEDURE ----------------------------------------------------------------------------------------
//$mysqli->query('CALL add_auction_participants(1,3,@ret,@rolled);');
//$result = $mysqli->query('SELECT @ret, @rolled;');
//var_dump($result->fetch_assoc()); //array (size=2)  '@ret' => string '3' (length=1)  '@rolled' => string '0' (length=1)



$mysqli->close();