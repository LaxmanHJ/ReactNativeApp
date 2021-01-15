<?php
  include "include/dbconn.php";
  if ($_SERVER['REQUEST_METHOD'] == "POST")
  {
          $json = file_get_contents('php://input');
      // decoding the received JSON and store into $obj variable.
          $obj = json_decode($json,true);
          $teamId=$obj['teamId'];
          $userId=$obj['userId'];
          
        if(!empty($teamId))
        {
            $add="INSERT INTO `TeamDetails` (`UserId`, `TeamId`) 
                  VALUES('$userId','$teamId')";
            $exc=mysqli_query($conn,$add);
            if($exc==true)
            {
                //$last_id = mysqli_insert_id($conn);
                $myObj = new StdClass;
                $myObj->msg="insertion_teamDetails_ok";
               // $myObj->id=$last_id;
                $myJSON = json_encode($myObj);
                echo $myJSON;
            }
            else
            {
              echo json_encode("insertion_teamDetails_fail");
                // echo "<script>alert('please enter information');  </script>";
            }
        }
      }
  else{
          echo json_encode(["error Please check your requested http method"]);
      }
?>
                                                                                                                                                                                                                                                                                                                                                                  