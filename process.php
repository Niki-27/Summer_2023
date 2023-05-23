<?php
// PHP code to process the form data
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Retrieve form data
  $firstName = $_POST['firstname'];
  $lastName = $_POST['lastname'];
  $mobileNumber = $_POST['mobilenumber'];
  $email = $_POST['mailId'];
  $password = $_POST['password'];

  // Perform further validation or data processing as needed

  // Example: Save the data to a database
  // Assuming you have a database connection established
  // Replace DB_HOST, DB_NAME, DB_USER, and DB_PASSWORD with your database credentials
  $conn = new PDO('mysql:host=DB_HOST;dbname=DB_NAME', 'DB_USER', 'DB_PASSWORD');
  $stmt = $conn->prepare('INSERT INTO users (first_name, last_name, mobile_number, email, password) VALUES (?, ?, ?, ?, ?)');
  $stmt->execute([$firstName, $lastName, $mobileNumber, $email, $password]);

  // Example: Send a response back to the client
  echo 'Registration successful!';
}
?>
