<?php
include("connection.php");
date_default_timezone_set('Asia/Kolkata');
if(isset($_REQUEST['id'])){$id=intval(mysqli_real_escape_string($conn,$_REQUEST['id']));}
$sql="SELECT * FROM `gym_message` WHERE `receiver`= '$id' ORDER BY `date` DESC";
// $sql="SELECT * FROM `gym_message` WHERE `receiver`= '6' ORDER BY `date` DESC";
$result1=$conn->query($sql);

$sql1 = "SELECT * FROM `gym_message` WHERE receiver = $id and status = 0";
$result2=$conn->query($sql1);
$unread_count = $result2->num_rows;

$result=array();
if ($result1->num_rows > 0) {
	$result['status']='1';
	$result['error_code']=200;
	$result['error']=custom_http_response_code(200);
    while($row = $result1->fetch_assoc())
	{

		$query="SELECT `image`,`first_name`,`last_name` FROM `gym_member` WHERE `id`='".$row['sender']."'";
		$result2=$conn->query($query);
		if ($result2->num_rows > 0)
		{
			$r1=$result2->fetch_assoc();
			
			$row['sender']=$r1['first_name']." ".$r1['last_name'];
			$row['image']=$image_path.$r1['image'];
			$date = new DateTime($row['date']);
			$new_date = $date->format('h:i A');
			$row['time']=$new_date;
			$row['date'] = $date->format('d-M-Y h:i A');
			
			$result['unread_message'] = $unread_count;
			$result['result']['messageInbox'][]=$row;
		}

	}
}
else
{
	$result['status']='0';
	//$result['error_code']=404;
	//$result['error']=custom_http_response_code(404);
	$result['error_code']=204;
	$result['error']=custom_http_response_code(204);
	$result['result']=array();

}

echo json_encode($result);
$conn->close();
?>
