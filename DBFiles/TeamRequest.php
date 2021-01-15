<?php

$phone=$_GET['phone'];
include "include/dbconn.php";
  
// Inintialize URL to the variable 
//$url = 'http://localhost:8080/piedpiper/TeamRequest.php?phone=7892326489'; 

//$url_components = parse_url($url); 

//parse_str($url_components['query'], $params); 
//$phone = $params['phone']; 
      
  if(!empty($phone))
  {
    // $fetch = "SELECT T.NAME,T.TeamId,T.Level,T.Location,us.name username
    //           FROM Team T 
    //           Inner join usersignup us 
    //           Inner join TeamDetails Td
    //           on T.Tea
    //           WHERE phone = '$phone' and  T.TeamId = us.TeamId;";
    $fetch = "SELECT T.NAME,T.TeamId,T.Level,T.Location
              FROM Team T 
              Inner join TeamDetails Td 
              WHERE Td.UserId = '$phone' and T.TeamId = Td.TeamId";


    $result= mysqli_query($conn,$fetch);
    $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
    $myObj = new StdClass;
    $count = mysqli_num_rows($result);
    if($count>=1){
        $myObj->msg = "success";
        $myObj->name=$row['NAME'];
        $myObj->TeamId=$row['TeamId'];
        $myObj->level=$row['Level'];
        $myObj->Location=$row['Location'];
        $myJSON = json_encode($myObj);
        echo $myJSON;
    }else{
      $myObj->msg = "NoTeamFound";
      $myJSON = json_encode($myObj);
      echo $myJSON;
    }
  }else
  {     
          echo json_decode("some error happened or  phone/userid is empty");
}





         ?>
                                                                                                                                                                                                                                                                                                                                                                  