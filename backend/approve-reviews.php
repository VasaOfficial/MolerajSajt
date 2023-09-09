<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Origin: http://localhost:3000"); 
    header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    exit;
}

$host = "localhost";
$username = "admin2232";
$password = "admin00999";
$database = "moleraj";

$mysqli = new mysqli($host, $username, $password, $database);

if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Check if the request method is PUT
if ($_SERVER['REQUEST_METHOD'] !== 'PUT') {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['error' => 'Invalid request method']);
    exit;
}

// Read the raw JSON data from the request body
$data = json_decode(file_get_contents("php://input"), true);

// Check if the data is valid (e.g., required fields are present)
if (!isset($data['review_id'], $data['status'])) {
    http_response_code(400); // Bad Request
    echo json_encode(['error' => 'Invalid data']);
    exit;
}

// Update the review status in the database
$sql = "UPDATE reviews SET status = ? WHERE id = ?";
$stmt = $mysqli->prepare($sql);

if (!$stmt) {
    http_response_code(500); // Internal Server Error
    echo json_encode(['error' => 'Database error']);
    exit;
}

$stmt->bind_param("si", $data['status'], $data['review_id']);

if ($stmt->execute()) {
    // Successfully updated the review status
    http_response_code(200); // OK
    header('Content-Type: application/json');
    echo json_encode(['success' => true]);
} else {
    // Error while updating the review status
    http_response_code(500); // Internal Server Error
    echo json_encode(['error' => 'Failed to update review status']);
}

// Close the database connection
$stmt->close();
$mysqli->close();
?>
