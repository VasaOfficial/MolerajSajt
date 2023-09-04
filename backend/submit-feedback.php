<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Create a MySQLi connection
$mysqli = new mysqli('localhost', 'admin2232', 'admin00999', 'moleraj');

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Set up response array
$response = array();

// Parse incoming JSON data
$data = json_decode(file_get_contents('php://input'), true);

// Validate data
if (
    isset($data['name']) &&
    isset($data['feedback']) &&
    isset($data['rating']) &&
    is_string($data['name']) &&
    is_string($data['feedback']) &&
    is_numeric($data['rating']) &&
    strlen($data['name']) <= 15 &&
    strlen($data['feedback']) <= 100 &&
    $data['rating'] >= 1 && $data['rating'] <= 5
) {
    // Insert data into the database
    $stmt = $mysqli->prepare("INSERT INTO reviews (name, feedback, rating) VALUES (?, ?, ?)");
    $stmt->bind_param('ssi', $data['name'], $data['feedback'], $data['rating']);
    
    if ($stmt->execute()) {
        // Insertion successful
        $response['success'] = true;
        $response['message'] = "Review submitted successfully.";
    } else {
        // Insertion failed
        $response['success'] = false;
        $response['message'] = "Review submission failed.";
    }

    $stmt->close();
} else {
    // Data validation failed
    $response['success'] = false;
    $response['message'] = "Invalid data.";
}

// Close the MySQLi connection
$mysqli->close();

// Return JSON response
header('Content-Type: application/json');
echo json_encode($response);
?>
