<?php

$TeamId=$_GET['TeamId'];
include "include/dbconn.php";
  
// Inintialize URL to the variable 
//$url = 'http://localhost:8080/piedpiper/TeamRequest.php?phone=7892326489'; 

//$url_components = parse_url($url); 

//parse_str($url_components['query'], $params); 
//$phone = $params['phone']; 
      
  if(!empty($TeamId))
  {
    $fetch = "SELECT us.name,us.TotalSteps
              FROM usersignup us 
              -- inner Join tracks t ON t.userid = us.phone
              INNER JOIN TeamDetails Td ON us.phone = Td.UserId 
              WHERE Td.TeamId = $TeamId;";
   

   
    $result= mysqli_query($conn,$fetch);
  //  $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
  $stack = array();
    while( $row = mysqli_fetch_array( $result, MYSQLI_ASSOC ) ) {
            //array_push( $stack, $row );
            $stack[]=$row;
    }

    $myObj = new StdClass;
    $count = mysqli_num_rows($result);
    if($count>=1){
        $myObj->msg = "success";
        $myObj->userList=$stack;
        $myJSON = json_encode($myObj);
        echo $myJSON;
    }else{
      $myObj->msg = "NoUsersFound";
      $myJSON = json_encode($myObj);
      echo $myJSON;
    }
  }else
  {     
          echo json_decode("some error happened  phone/userid is empty");
}





         ?>
                                                                                                                                                                                                                                                                                                                                                                  