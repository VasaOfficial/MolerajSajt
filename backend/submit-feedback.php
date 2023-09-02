<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$pdo = new PDO('mysql:host=localhost;dbname=moleraj', 'admin2232', 'admin00999');

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
    $stmt = $pdo->prepare("INSERT INTO reviews (name, feedback, rating) VALUES (:name, :feedback, :rating)");
    $stmt->execute(array(
        ':name' => $data['name'],
        ':feedback' => $data['feedback'],
        ':rating' => $data['rating']
    ));

    if ($stmt->rowCount() > 0) {
        // Insertion successful
        $response['success'] = true;
        $response['message'] = "Review submitted successfully.";
    } else {
        // Insertion failed
        $response['success'] = false;
        $response['message'] = "Review submission failed.";
    }
} else {
    // Data validation failed
    $response['success'] = false;
    $response['message'] = "Invalid data.";
}

// Return JSON response
header('Content-Type: application/json');
echo json_encode($response);
?>


