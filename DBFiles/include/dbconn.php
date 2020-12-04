<?php
  
global $conn;
  //$conn =mysqli_connect("localhost","root","","cowdb") or die("Error");
        $conn =mysqli_connect("localhost","root","","piedpiper1") or die("Error");
        // mysqli_select_db($conn,'piedpiper');
        if ($conn->connect_error) {
           die("Connection failed: " . $conn->connect_error);
        }
?>