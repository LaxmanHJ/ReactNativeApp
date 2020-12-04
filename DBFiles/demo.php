
<?php
include "include/dbconn.php";
    $sql = "select *from usersignup";
    $result = mysqli_query($conn, $sql);

    echo "$result";
    echo "hihi";

    mysqli_close($conn);
?>
