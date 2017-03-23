
<?php
var_dump($_POST);
foreach ($_POST['invoiceItem'] as $row) {
  var_dump($row);
}
?>

<!DOCTYPE html>
<html>
<body>

<form action="form.php" method="POST">
  First name:<br>
  <input type="text" name="invoiceItem[first][name]" value="Mickey">
  <input type="text" name="invoiceItem[first][job]" value="Mickey">
  <input type="text" name="invoiceItem[first][desc]" value="Mickey"><br />
  <input type="text" name="invoiceItem[second][name]" value="Mickey">
  <input type="text" name="invoiceItem[second][job]" value="Mickey">
  <input type="text" name="invoiceItem[second][desc]" value="Mickey"><br />
  <input type="text" name="invoiceItem[third][name]" value="Mickey">
  <input type="text" name="invoiceItem[third][job]" value="Mickey">
  <input type="text" name="invoiceItem[third][desc]" value="Mickey">
  <input type="submit" value="Submit">
</form> 

<p>If you click the "Submit" button, the form-data will be sent to a page called "action_page.php".</p>

</body>
</html>
