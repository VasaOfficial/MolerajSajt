<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Origin: http://localhost:3000"); 
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
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

// Fetch approved reviews from the database
$sql = "SELECT * FROM reviews WHERE status = 'done'";
$result = $mysqli->query($sql);

if (!$result) {
    http_response_code(500); // Internal Server Error
    echo json_encode(['error' => 'Database error']);
    exit;
}

$approvedReviews = [];

while ($row = $result->fetch_assoc()) {
    // Add each approved review to the array
    $approvedReviews[] = $row;
}

// Close the database connection
$mysqli->close();

// Return the approved reviews as JSON
http_response_code(200); // OK
header('Content-Type: application/json');
echo json_encode($approvedReviews);
?>
