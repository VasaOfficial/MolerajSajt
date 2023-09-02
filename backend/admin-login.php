<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Check if it's a preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$host = '127.0.0.1';
$db = 'moleraj';
$user = 'admin2232';
$pass = 'admin00999';

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

$data = json_decode(file_get_contents('php://input'), true);

$username = $data['username'];
$password = $data['password'];

$query = "SELECT password FROM admin WHERE username = ?"; 
$stmt = $conn->prepare($query);
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();
$admin = $result->fetch_assoc();

if ($admin && password_verify($password, $admin['password'])) {
    
    session_start(); 
    $_SESSION['admin_username'] = $username;

    echo json_encode(array('success' => true));
} else {
    echo json_encode(array('success' => false, 'message' => 'Login failed'));
}

$stmt->close();
$conn->close();
?>