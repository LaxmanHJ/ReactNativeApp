
<?php
include "include/dbconn.php";
if ($_SERVER['REQUEST_METHOD'] == "POST")
  {
  $json = file_get_contents('php://input');


  $obj = json_decode($json,true);

  $phone = $obj['phone'];

  //echo "$phone";
 $password = $obj['password'];
 $passwordone = MD5($password);

    $sql = "SELECT * from usersignup where phone ='$phone' or `password` = '$passwordone'";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
        $count = mysqli_num_rows($result);
        if($count == 1){
               $myObj = new StdClass;
               $myObj->msg = "success";
               $myObj->name=$row['name'];
               $myObj->phone=$row['phone'];
               $myObj->height=$row['height'];
               $myObj->weight=$row['weight'];
               $myObj->gender=$row['gender'];
               $myObj->dob=$row['dob'];
               $myJSON = json_encode($myObj);
              echo $myJSON;


        }
        else {
          echo  json_encode(" Login failed. Invalid username or password.");

        }
}
else{
  echo json_encode(["error"=>"Please check your requested http method"]);
}

      mysqli_close($conn);
?>
