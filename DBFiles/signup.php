<?php
  include "include/dbconn.php";
  if ($_SERVER['REQUEST_METHOD'] == "POST")
  {
     $json = file_get_contents('php://input');
 // decoding the received JSON and store into $obj variable.
  $obj = json_decode($json,true);
    $phone=$obj['phone'];
    $name=$obj['name'];
    $gender=$obj['gender'];
    $height=$obj['height'];
    $weight=$obj['weight'];
    $dob=$obj['dob'];
    $password=md5($obj['password']);
      
  if(!empty($obj['phone']))
  {

   //echo $phone.$name.$aadhar.$pincode.$region.$taluka.$dist.$state.$password;

    //echo json_encode("success"); //this is jsone response



    $fetch = "SELECT * FROM usersignup WHERE phone = '$phone';";
    $exefetch= mysqli_query($conn,$fetch);
    $count= mysqli_num_rows($exefetch);
   

if($count>=1)
{
    echo json_encode("user alredy registered.");
    exit();
  // echo "<script>alert('user alredy registered.');</script>";
  }
  else
  {

$add="INSERT INTO `usersignup` (`name`, `dob`, `phone`,`password`,`height`,`weight`,`gender`) VALUES('$name','$dob','$phone','$password','$height','$weight','$gender')";

$exc=mysqli_query($conn,$add);

      if($exc==true)
      {
          // mkdir("userdata/".$phone,true);
          echo json_encode("successfull");
          /* echo "<script>alert('information added successfully');
            window.location='index.php';</script>";*/

      }
      else
      {
        echo json_encode("enter_info");
          // echo "<script>alert('please enter information');  </script>";
      }
  }

}
else{

              echo json_decode("field required");

}

}
else{
          echo json_encode(["error"=>"Please check your requested http method"]);
}



         ?>
                                                                                                                                                                                                                                                                                                                                                                  