<?php
  include "include/dbconn.php";
  if ($_SERVER['REQUEST_METHOD'] == "POST")
  {
          $json = file_get_contents('php://input');
      // decoding the received JSON and store into $obj variable.
          $obj = json_decode($json,true);
          $progress=$obj['progress'];
          $steps=$obj['steps'];
          $tdate=$obj['trackdate'];
          $tdates = strtotime($tdate);
          $userid=$obj['phone'];
          $trackdate = date('Y-m-d',$tdates);
        if(!empty($userid))
        {
            $add="INSERT INTO `tracks` (`progress`, `steps`, `trackdate`,`userid`) VALUES('$progress','$steps','$trackdate','$userid')";
            $exc=mysqli_query($conn,$add);
            if($exc==true)
            {
                $myObjnew = new StdClass;
                $myObjnew->msg="insertion_tracks_ok";
                $myJSON = json_encode($myObjnew);
                echo $myJSON;

                // mkdir("userdata/".$phone,true);
                /* echo "<script>alert('information added successfully');
                  window.location='index.php';</script>";*/

            }
            else
            {
              echo json_encode("insertion_tracks_fail");
                // echo "<script>alert('please enter information');  </script>";
            }
        }
      }
  else{
          echo json_encode(["error Please check your requested http method"]);
      }
?>