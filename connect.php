<?php
$servername = "localhost";
$username = "root";
$password = "";
$db_name = "detail";

//establisg connection
$conn = mysqli_connect($servername, $username, $password, $db_name);

$un = $_POST['username'];

$em = $_POST['email'];

if(isset($_POST["comment"])){
$text = $_POST["comment"];}

$query = "INSERT INTO info VALUES ('$un','$em','$text' )";
$data = mysqli_query($conn,$query);

?>