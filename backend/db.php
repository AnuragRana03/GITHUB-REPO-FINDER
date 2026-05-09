<?php
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "githubfinder";

$conn = new mysqli($host, $user, $pass, $dbname);

if($conn->connect_error){
    die("Connection Failed");
}
?>
