<?php
	if(count($_POST) > 0) {
		$name = $_POST['name'];
		$email = $_POST['email'];
		$subject = $_POST['subject'];
		$message = $_POST['comments'];
	
		$headers .= "Reply-To: $name <$email>\r\n"; 
		$headers .= "Return-Path: $name <$email>\r\n"; 
		$headers .= "From: $name <$email>\r\n";  
		$headers .= "Organization: Sender Organization\r\n";
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
		$headers .= "X-Priority: 3\r\n";
		$headers .= "X-Mailer: PHP". phpversion() ."\r\n" ;
	
	
		$body = @"Email sent from ".$_SERVER['REMOTE_ADDR']." at ".date("d/m/Y H:i",time())."

		$message";
	
		// Send me an Email!!!!
		if(mail("brian.shisanya2000@gmail.com", $subject, $body, $headers)) {
			die("true");
			echo "Mail send";
		} else {
			die("There was an error sending the email.");
			echo "Mail was not send";
		}
	}
?> 