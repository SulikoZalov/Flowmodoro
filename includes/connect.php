<?php

    $connect = mysqli_connect('localhost', 'root', 'root', 'flowmodoro');

    if (!$connect)
    {
        die("Database Error");
    }
?>