<input type='hidden' value='<?php echo json_encode($date_array);?>' id='dates'>
<script>
$(document).ready(function(){
	$(".validateForm").validationEngine();
	// event.preventDefault();
	var enableDays = jQuery("#dates").val();
	var enableDays = jQuery.parseJSON(enableDays);
	
	function enableAllTheseDays(date) {
        var sdate = jQuery.datepicker.formatDate('yy-mm-dd', date);
        if(jQuery.inArray(sdate, enableDays) != -1) {
            return [true];
        }
		return [false];
    }
	$("#enabledate").datepicker({
		dateFormat: 'yy-mm-dd',
		changeMonth: true,
		changeYear: true,
		beforeShowDay: enableAllTheseDays	
	}); 
});
</script>
<section class="content">
	<br>
	<div class="col-md-12 box box-default">		
		<div class="box-header">
			<section class="content-header">
			  <h1>
				<i class="fa fa-eye"></i>
				<?php echo __("View Workout");?>
				<small><?php echo __("Workout Daily");?></small>
			  </h1>
			  <ol class="breadcrumb">
				<a href="<?php echo $this->Gym->createurl("GymDailyWorkout","workoutList");?>" class="btn btn-flat btn-custom"><i class="fa fa-bars"></i> <?php echo __("Workout List");?></a>
				&nbsp;
				<a href="<?php echo $this->Gym->createurl("GymDailyWorkout","addMeasurment");?>" class="btn btn-flat btn-custom"><i class="fa fa-plus"></i> <?php echo __("Add Measurement");?></a>
			  </ol>
			</section>
		</div>
		<hr>
		<div class="box-body">
		<form method="post" class="form-horizontal validateForm"> 
         <div class="col-md-12">
			<h3 class="no-margin"><?php echo $member_name."'s Workout";?></h3>
		 </div>
		 <br><br><br>
        <div class="form-group">
			<label class="col-sm-1 control-label" for="curr_date"><?php echo __("Date");?></label>
			<div class="col-sm-3">				
				<input type='hidden' value='<?php echo $uid;?>' name="uid">
				<input type="text" name="schedule_date" class="validate[required] form-control" id="enabledate" value="<?php if(isset($schedule_date)){ echo $schedule_date;}else{echo "";}?>">
			<?php //echo $this->Form->select("schedule_date",$date_array,["empty"=>"Select Date","class"=>"validate[required] form-control"]);?>
			</div>
			<div class="col-sm-3">
			<input type="submit" value="<?php echo __("View Workouts");?>" name="view_workouts" class="btn btn-flat btn-success">
			</div>
		</div>
          </form>
		<?php
		// debug($workouts);
		if(isset($workouts))
		{
			foreach($workouts as $workout)
			{ ?>
				<div class="col-md-12">
				<?php 
				$workout_note = ($workout['note'] != '')?$workout['note']:'No';
				echo "Description : ".$workout_note;?>
				</div>
				<div class="col-md-10 activity-data no-padding">
					<div class="workout_datalist_header">
						<h2><?php 
						if($workout['GymUserWorkout']["workout_name"] != null){
						echo $this->Gym->get_activity_by_id($workout['GymUserWorkout']["workout_name"]);
						}
						?></h2>
					</div>
					<div class="col-md-10 workout_datalist no-padding"> 
						<?php 
						$i = 1;
						for($i;$i<=$workout['GymUserWorkout']["sets"];$i++)
						{ ?>
						<div class="col-md-6 sets-row no-paddingleft">	
							<span class="text-center sets_counter"><?php echo $i;?></span>
							<span class="sets_kg"><?php echo $workout['GymUserWorkout']["kg"];?> Kg</span>								
							<span class="col-md-2 reps_count"><?php echo $workout['GymUserWorkout']["reps"];?></span>
						</div>
				  <?php } ?>					
					</div>
					<div class="border_line"></div>
				</div>		
	  <?php }
		}
		?>		  
		<!-- END -->
		</div>
		<div class='overlay gym-overlay'>
			<i class='fa fa-refresh fa-spin'></i>
		</div>
	</div>
</section>
