<?php
error_reporting(0);
include'connection.php';
$id=intval(mysqli_real_escape_string($conn,$_REQUEST['id']));

// OLD Query Start

$r="SELECT `selected_membership` FROM `gym_member` WHERE `id`= $id";
$res=$conn->query($r);
$m_id=mysqli_fetch_assoc($res)['selected_membership'];
print_r($id);

// $get_record="SELECT c.first_name,c.last_name,b.title,d.name,e.video FROM membership_activity a
// LEFT JOIN activity b ON a.activity_id = b.id
// LEFT JOIN  gym_member c ON b.assigned_to = c.id
// LEFT JOIN category d ON b.cat_id=d.id
// LEFT JOIN activity_video e ON e.activity_id= b.id 
// where a.membership_id=$id";

// OLD Query END

// NEW Query
// $get_record = "SELECT gm.first_name,gm.last_name,b.title,c.name,av.video FROM membership_activity ma 
// LEFT JOIN activity b ON b.id = ma.activity_id
// LEFT JOIN gym_member gm ON b.assigned_to = gm.id
// LEFT JOIN category c ON b.cat_id = c.id
// LEFT JOIN activity_video av ON av.activity_id = b.id
// left join membership ms on ms.id=ma.membership_id
// WHERE b.id = $id";
// NEW Query END

$get_record = "SELECT gm.first_name,gm.last_name,a.title,c.name as category,av.video FROM gym_member gm
LEFT JOIN membership_activity ma ON ma.membership_id = gm.selected_membership
LEFT JOIN activity a ON a.id = ma.activity_id
LEFT JOIN activity_video av ON av.activity_id = a.id
LEFT JOIN category c ON c.id = a.cat_id  
WHERE gm.id = $m_id";

$select_query=$conn->query($get_record);

$result=array();
if(mysqli_num_rows($select_query) > 0){
	$result['status']='1';
	$result['error_code']=200;
	$result['error']=custom_http_response_code(200);
	while($get_data=mysqli_fetch_assoc($select_query)){
				// print_r($get_data);
		// if($get_data['video'] != null){
			// $iframe = $get_data['video'];
			// $data = explode(",",$iframe);
			// print_r($data);die;
			// $i=0;
			// $video_array = array();
			// foreach($data as $iframe)
			// {	

			// 	$string=<<<STR

			// 	<div class="ui-tab-pane" data-role="panel" id="feedback">
			// 	    $iframe;
			// 	</div>

			// 	STR;

			// 	$domDocument = new DOMDocument();
			// 	$domDocument->loadHTML($string);
			// 	$domXPath = new DOMXPath($domDocument);
			// 	$results = $domXPath->query('//div[@class="ui-tab-pane"]/iframe');
			// 	// print_r($results->item(0)->getAttribute("src"));
			// 	$video=$results->item(0)->getAttribute("src");
			// 	$i++;
			// 	$video_array[] = $video;

			// }
				// $get_data['video'] = $video_array;
				// $result['result'][]=$get_data;
			
		// }
		if($get_data['video'] != null){
			// $iframe = $get_data['video'];
			// $data = explode(" ",$iframe);
			$get_data['video'] = json_decode($get_data['video']);
		}
		
		$result['result'][]=$get_data;
		
	}
}else
{
	$result['status']='0';
	//$result['error_code']=404;
	//$result['error']=custom_http_response_code(404);
	$result['error_code']=204;
	$result['error']=custom_http_response_code(204);
	$result['result']=array();
}
echo json_encode($result);
?>

