<?php
include('connection.php');
$id=$_REQUEST['id'];
// $id=explode(",",$id);
$sets=$_REQUEST['sets'];
$sets=explode(",",$sets);
$reps=$_REQUEST['reps'];
$reps=explode(",",$reps);
$time=$_REQUEST['time'];
$time=explode(",",$time);
$kg=$_REQUEST['kg'];
$kg=explode(",",$kg);
$note=$_REQUEST['note'];
$recorddate=$_REQUEST['recorddate'];
// var_dump($note);
// var_dump($id[0]);
// var_dump($_REQUEST);die;
$result = array();
for($i=0;$i<sizeof($kg);$i++)
{	
		$sql1="UPDATE `gym_daily_workout` SET `note`='$note' WHERE `member_id`=$id AND `record_date`='$recorddate'";
		// echo $sql1;die;
		$conn->query($sql1);
		
		$sql2="SELECT * FROM `gym_daily_workout` WHERE `member_id` = $id AND `record_date` = '$recorddate'";
		$res2=$conn->query($sql2);
		
		if ($res2->num_rows > 0) 
		{
			while($r2 = $res2->fetch_assoc()) 
			{
				$sql="UPDATE `gym_user_workout` SET `sets`=$sets[$i],`reps`=$reps[$i],`kg`=$kg[$i],`rest_time`=$time[$i] WHERE `user_workout_id`={$r2['id']}";
				
				if($conn->query($sql))
				{
					$result['status']='1';
					$result['error_code']=200;
					$result['error']=custom_http_response_code(200);
				}
				else
				{
					$result['status']='0';
					$result['error_code']=400;
					$result['error']=custom_http_response_code(400);
				}
			}
		}
		else
		{
			$result=NULL;
		}
}	
echo json_encode($result);
?>