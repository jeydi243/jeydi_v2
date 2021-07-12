<?php

// Define some constants
define( "RECIPIENT_NAME", "John Doe" );
define( "RECIPIENT_EMAIL", "capricorn_j10@yahoo.com" );


// Read the form values
$success = false;
$userName = isset( $_POST['username'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_POST['username'] ) : "";
$senderEmail = isset( $_POST['email'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_POST['email'] ) : "";
$senderServices = isset( $_POST['services'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_POST['services'] ) : "";
$senderMessage = isset( $_POST['message'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_POST['message'] ) : "";

// If all values exist, send the email
if ( $userName && $senderEmail && $senderServices && $senderMessage ) {
  $recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
  $headers = "From: " . $userName . "";
  //$msgBody = " Email: " . $senderEmail . " Services: " . $senderServices . " Message: " . $senderMessage . "";
  $msgBody = " First Name: " . $userName . "\n Email : " . $senderEmail . "\n Services: " . $senderServices . "\n Message: ". $senderMessage . "";
  $success = mail( $recipient, $headers, $msgBody );

  //Set Location After Successsfull Submission
  header('Location: index.html?message=Successfull');
  //header('Location: index.html?message=Successfull');
}

//else{
	//Set Location After Unsuccesssfull Submission
  	//header('Location: index.html?message=Failed');	
//}

?>