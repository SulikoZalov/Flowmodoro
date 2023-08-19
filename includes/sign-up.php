<?php

    session_start();
    require_once "connect.php";

    $login = $_POST["login"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $password_confirm = $_POST["password_confirm"];

    if($password === $password_confirm)
    {
      if(strlen(trim($password, " ")) < 8)
      {
        $_SESSION['password_error'] = "password have to be at least 8 characters";
      }
      $password = md5($password);
      mysqli_query($connect, "INSERT INTO `Users` (`id`, `login`, `email`, `password`) VALUES (NULL, '$login', '$email', '$password')");
    } else 
      {
        $_SESSION['message'] = "Passwords not the same";
        header('Locaiton: ../index.php');
      }
?>

