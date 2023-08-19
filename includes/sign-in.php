<?php
    ini_set('error_reporting', E_ALL);
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);

    require_once 'connect.php';



    $login = $_POST["login"];
    $password = md5($_POST["password"]);

    $check_users = mysqli_query($connect, "SELECT * FROM `Users` WHERE `login` = $login AND `password` = $password")

     if(mysqli_num_rows($check_users) > 0)
     {

     } else
       {
         $_SESSION['message'] = "Login or password isn't correct";
       }