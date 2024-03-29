<?php
	include("connection.php");
	function addDayswithdate($date,$days){
		$date = strtotime("+".$days." days", strtotime($date));
		return  date("Y-m-d", $date);
	}
	$member_Id=mysqli_real_escape_string($conn,$_REQUEST['member_Id']);
	$fName=mysqli_real_escape_string($conn,$_REQUEST['fName']);
	$mName=mysqli_real_escape_string($conn,$_REQUEST['mName']);
	$lName=mysqli_real_escape_string($conn,$_REQUEST['lName']);
	$gender=mysqli_real_escape_string($conn,$_REQUEST['gender']);
	$dob=$_REQUEST['dob'];
	$class=mysqli_real_escape_string($conn,$_REQUEST['class']);
	$class=rtrim($class,",");
	$Group=$_REQUEST['group'];
	$Group=rtrim($Group,",");
	$addr=$_REQUEST['addr'];
	$city=mysqli_real_escape_string($conn,$_REQUEST['city']);
	$state=mysqli_real_escape_string($conn,$_REQUEST['state']);
	$zip=$_REQUEST['zip'];
	$mobile=$_REQUEST['mobile'];
	$email=$_REQUEST['email'];
	$uname=$_REQUEST['uname'];
	$fileName=$_REQUEST['fileName'];
	$pass=$_REQUEST['pass'];
	$pass = password_hash($pass,PASSWORD_DEFAULT);
	$iArea=(int)$_REQUEST['iArea'];
	$membership=$_REQUEST['membership'];
	$JDate=$_REQUEST['JDate'];
	$class=explode(",",$class);
	$Group=explode(",",$Group);
	$Group=json_encode($Group);
	$sql="SELECT `membership_length` FROM `membership` WHERE `id`=$membership";
	$res=$conn->query($sql);
	$res=$res->fetch_assoc()['membership_length'];
	$end_date=addDayswithdate($JDate,$res);
	$token=mysqli_real_escape_string($conn,$_REQUEST['token']);

	$selectQuery = "SELECT `username`,`email` FROM `gym_member` where (`email` = '$email' OR `username` = '$uname')";
	$select_query=$conn->query($selectQuery);
	$result=array();
	if(mysqli_num_rows($select_query) > 0){
		while($row = mysqli_fetch_assoc($select_query)) {
	        if($row['email'] == $email) {
        		$result['status']='0';
        		$result['error_code']=303;
        		$result['error']="Email Alredy Exist";
	        }else if($row['username'] == $uname) {
	        	$result['status']='0';
        		$result['error_code']=303;
        		$result['error']="Username Alredy Exist";
	        }
	    }
	}else{
		$sql="INSERT INTO `gym_member`(`role_name`,`member_id`,`token`,`first_name`,`middle_name`,`last_name`,
		`member_type`,`role`,`gender`,`birth_date`,`assign_group`,`address`,`city`,
		`state`,`zipcode`,`mobile`,`email`,`username`,`password`,`intrested_area`,`selected_membership`,
		`membership_status`,`membership_valid_from`,`membership_valid_to`,
		`created_date`,`image`) VALUES ('member','$member_Id','$token','$fName','$mName','$lName',
		'Member',0,'$gender','$dob','$Group','$addr','$city','$state','$zip',
		'$mobile','$email','$uname','$pass','$iArea','$membership','Prospect','$JDate','$end_date',CURRENT_DATE,'$fileName')";
		if($conn->query($sql)) {
			$result['status']='1';
			$result['error_code']=200;
			$result['error']=custom_http_response_code(200);
			$mid=$conn->insert_id;
		}else {
			$result['status']='0';
			$result['error']=$conn->error;
		}
		for($i=0;$i<sizeof($class);$i++) {
			$sql="INSERT INTO `gym_member_class`( `member_id`, `assign_class`) VALUES ($mid,$class[$i])";
			if(!$conn->query($sql)) {
				$result['status']='0';
				$result['error']=$conn->error;
			}
		}
		
		if($result['status']=='1') {
			error_reporting(-1);
			ini_set('display_errors', 'On');
			set_error_handler("var_dump");
			$sql="SELECT `name`,`email` FROM `general_setting` LIMIT 1";
			$r=$conn->query($sql);
			if($r->num_rows > 0) {
				$res = $r->fetch_assoc();
				$sys_email =$res['email'];
				$sys_name = $res['name'];
				$headers = "MIME-Version: 1.0" . "\r\n";
				$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
				// $headers .= 'From: '.$sys_name.' <"cakephp.projects@gmail.com">' . "\r\n";
				$headers .= 'From: cakephp.projects@gmail.com';
				$message = "Hi ,".$fName."";
				$message .= "Thank you for registering on our system.";
				$message .= "Your Username:".$uname."";
				$message .= "You can login once after admin review your account and activates it.";
				$message .= "Thank You.";
				// $sender = "gymmaster.cakephp@pushnifty.com";
				$recipient = $email;
				$subject = "New Registration : {$sys_name}";
				
				if (mail($recipient, $subject, $message)) {
					// echo "Message accepted";
					$result['status']='1';
					$result['response_code']=555;
					$result['message']=custom_http_response_code(555);
				}else {
					$result['status']='1';
					$result['response_code']=502;
					$result['message']=$headers;
				}
				
			}
		}
	}
	echo json_encode($result);
?>