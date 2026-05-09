<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"));

$username = $data->username;

$sql = "INSERT INTO searches(username)
VALUES('$username')";

$conn->query($sql);

echo json_encode([
    "message" => "Saved"
]);
?>
