<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    // Email details
    $to = "rivervalleysubin@gmail.com"; // Recipient's email
    $subject = "New Contact Form Submission from $name";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage:\n$message";
    $headers = "From: $email\r\n"; // Set the "From" header to the user's email

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Message could not be sent.";
    }
} else {
    echo "Invalid request method.";
}
?>