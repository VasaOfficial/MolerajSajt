<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$mysqli = new mysqli('localhost', 'admin2232', 'admin00999', 'moleraj');

if ($mysqli->connect_errno) {
    echo json_encode(['error' => $mysqli->connect_error]);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query = "SELECT * FROM reviews";
    $result = $mysqli->query($query);

    if ($result) {
        $reviews = $result->fetch_all(MYSQLI_ASSOC);
        header('Content-Type: application/json');
        echo json_encode($reviews);
    } else {
        echo json_encode(['error' => $mysqli->error]);
    }

    $mysqli->close();
}
?>