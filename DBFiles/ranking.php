
<?php
include "include/dbconn.php";
if ($_SERVER['REQUEST_METHOD'] == "GET")
  {
  $json = file_get_contents('php://input');


  $obj = json_decode($json,true);

    $sql = "SELECT steps ,userid,usersignup.name 
            from tracks,usersignup 
            where usersignup.phone = tracks.userid 
            order BY steps DESC";

        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_all ($result, MYSQLI_ASSOC);
        $count = mysqli_num_rows($result);
        if($count >= 1){
              //  $myObj = new StdClass;
              //  $myObj->dob=$row['dob'];
               $myJSON = json_encode($row);
               echo $myJSON;


       }
        else {
          echo  json_encode(" fetching ranking data failed");

        }
}
else{
  echo json_encode(["error"=>"Please check your requested http method"]);
}

      mysqli_close($conn);
?>
