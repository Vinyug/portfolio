<?php
    $array = array("firstname" => "", "name" => "", "email" => "", "phone" => "", "message" => "", "firstnameError" => "", "nameError" => "", "emailError" => "", "phoneError" => "", "messageError" => "", "isSuccess" => false);
    $emailTo = "vincentguyomarch89@gmail.com";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $array["firstname"] = verifyInput($_POST["firstname"]);
        $array["name"] = verifyInput($_POST["name"]);
        $array["email"] = verifyInput($_POST["email"]);
        $array["phone"] = verifyInput($_POST["phone"]);
        $array["message"] = verifyInput($_POST["message"]);
        $array["isSuccess"] = true;
        $emailText = "";

        if(empty($array["firstname"])) {
            $array["firstnameError"] = "Je veux connaitre ton prénom !";
            $array['isSuccess'] = false;
        } else {
            $emailText .= "Firstname :". $array['firstname'] . "\n"; 
        }

        if(empty($array['name'])) {
            $array['nameError'] = "Eh oui je veux tout savoir même ton nom !";
            $array['isSuccess'] = false;
        } else {
            $emailText .= "Name : {$array['name']}\n";
        }
        
        if(!isPhone($array['phone'])) {
            $array['phoneError'] = "Que des chiffres ou des espaces stp !";
            $array['isSuccess'] = false;
        } else {
            $emailText .= "Phone : {$array['phone']}\n";
        }
        
        if(!isEmail($array['email'])) {
            $array['emailError'] = "Tu essais de me rouler, ce n'est pas un email";
            $array['isSuccess'] = false;
        } else {
            $emailText .= "Email : {$array['email']}\n";
        }
        
        if(empty($array['message'])) {
            $array['messageError'] = "Ecris-moi un commentaire !";
            $array['isSuccess'] = false;
        } else {
            $emailText .= "Message : {$array['message']}\n";
        }
        
        if($array['isSuccess']) {
            $headers = "From: {$array['firstname']} {$array['name']} <{$array['email']}>\r\nReply-To: {$array['email']}";
            mail($emailTo, "Un message de votre site", $emailText, $headers);
        }

        echo json_encode($array);
    }

    function isEmail($email) {
        return filter_var($email, FILTER_VALIDATE_EMAIL);
    }

    function isPhone($phone) {
        return preg_match("/^[0-9 ]*$/", $phone);
    }

    // sécuriser les var des superglobals
    function verifyInput($var) {
        $var = trim($var);
        $var = stripslashes($var);
        $var = htmlspecialchars($var);
        return $var;
    }


?>
