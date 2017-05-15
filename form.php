
<?php
var_dump($_POST);
?>

<!DOCTYPE html>
<html>
<body>

<form action="form.php" method="POST">
  First name:<br>
  <input type="text" name="name[]" value="Mickey">
  <input type="text" name="name[first][]" value="Mickey">
  <input type="text" name="name[first][]" value="Mickey">
  <input type="text" name="name[second][]" value="Mickey">
  <input type="text" name="name[second][]" value="Mickey">
  <input type="text" name="name[second][]" value="Mickey">
  <input type="text" name="name[third][elso][]" value="Mickey">
  <input type="text" name="name[third][elso][]" value="Mickey">

  <input type="submit" value="Submit">
</form> 

<p>If you click the "Submit" button, the form-data will be sent to a page called "action_page.php".</p>

</body>
</html>
