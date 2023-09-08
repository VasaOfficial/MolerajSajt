<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE");
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

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    // Assuming you receive the row ID as a query parameter
    $rowId = $_GET['id'];

    // Delete the row from the database based on the received ID
    $stmt = $mysqli->prepare("DELETE FROM reviews WHERE id = ?");
    $stmt->bind_param("i", $rowId);

    if ($stmt->execute()) {
        // Deletion successful
        header('Content-Type: application/json');
        echo json_encode(['success' => true, 'message' => 'Row deleted successfully.']);
    } else {
        // Deletion failed
        header('Content-Type: application/json');
        echo json_encode(['success' => false, 'message' => 'Row deletion failed.']);
    }

    $mysqli->close();
}
?>