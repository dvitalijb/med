<?php
    $header = "From: " . $_POST["firstName"] . " " . $_POST["lastName"] . "<". $_POST["email"] .">\r\n";
    $header.= "MIME-Version: 1.0\r\n";
    $header.= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    $header.= "X-Priority: 1\r\n";
    $toEmail = "dumavb777@gmail.com";
    $subject = "New cooperation proposal \n";
    $content = "Company: " . $_POST["company"] . "\n" . "Idea: " . $_POST["idea"];
    if(mail($toEmail, $subject, $content, $header)) {
        print "Mail was successfully sent!";
    } else {
        print "Problem with email sending!";
    }
?>