<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tm";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

//INSERT ----------------------------------------------------------------------------------------
//    $stmt = $conn->prepare("INSERT INTO houses (hid, text) VALUES (:hid, :text)");
//    $stmt->bindParam(':hid', $hid);
//    $stmt->bindParam(':text', $text);
//
//		$hid = 4; $text = 'Negyedik haz';
//		$stmt->execute();
//		
//		$hid = 5; $text = 'Otodik haz';
//    $stmt->execute();
//
//    echo "New records created successfully";
		
//-------------------
//		$stmt = $conn->prepare("INSERT INTO houses (hid, text) VALUES (:hid, :text)");
//		$stmt->execute(array(':hid' => 6, ':text' => 'Hatodik haz'));
//		echo "New records created successfully";
		
//UPDATE ----------------------------------------------------------------------------------------
		
//SELECT ----------------------------------------------------------------------------------------
//		$stmt = $conn->prepare("select * FROM auction");
//		$rows = $stmt->execute();
//		$rows = $stmt->fetchAll();
//		var_dump($rows);
//----------------		
//		$stmt = $conn->query("select * FROM auction");
//		$rows = $stmt->fetchAll(PDO::FETCH_OBJ);
//		var_dump($rows);
//SELECT PREPARED ----------------------------------------------------------------------------------------
//		$stmt = $conn->prepare("select * FROM auction WHERE hid = :hid");
//		$stmt->execute(array(':hid' => 1));
//		$rows = $stmt->fetchAll();
//		var_dump($rows);
		
//CALL PROCEDURE ----------------------------------------------------------------------------------------
$input = 5;
$proc = $conn->prepare("CALL add_auction_participants(1,3,@ret,@rolled);");
$proc->execute();
$proc->closeCursor();
$output = $conn->query("SELECT @ret, @rolled;")->fetch(PDO::FETCH_ASSOC);
var_dump($output);


//$stmt = $conn->query('CALL add_auction_participants(1,3,@ret,@rolled);');
//$stmt->execute();
//$stmt2 = $conn->query('SELECT @ret, @rolled;');
////var_dump($result->fetch_assoc()); //array (size=2)  '@ret' => string '3' (length=1)  '@rolled' => string '0' (length=1) //array (size=2)  '@ret' => string '3' (length=1)  '@rolled' => string '0' (length=1)
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}
