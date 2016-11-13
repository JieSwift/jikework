<?php
/*
*增加新闻内容到数据库
 */
	header("Content-type: text/html; charset=utf-8");
	function dbBean(){
		dbLink:function dbLink(){
			$con = mysql_connect("localhost","root");
			if (!$con){
			  die('Could not connect: ' . mysql_error());
			}
			mysql_close($con);
		};
	};

	function check_input($data){
		$data = trim($data);
		$data = stripcslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	};

	function insertSql(){
		$con = mysql_connect("localhost","root");
		if (!$con){
		  die('Could not connect: ' . mysql_error());
		}else{
			$dbName = "jikedb";
			mysql_select_db($dbName,$con);
			$newsTitle = check_input($_POST['newsTitle']);
			$newsImg = check_input($_POST['newsImg']);
			$newsContent = check_input($_POST['newsContent']);
			$newsTag = check_input($_POST['newsTag']);
			$addDate = check_input($_POST['addDate']);
			$inrertSql = "INSERT INTO news (newsTitle, newsImg, newsContent,newsTag,addDate) VALUES
			('".$newsTitle."','".$newsImg."','".$newsContent."','".$newsTag."','".$addDate."')";
			mysql_query("set names 'utf8'");
			$result = mysql_query($inrertSql,$con);
			if(!$result){
				die('Error: ' . mysql_error());
			}else{
				echo"update success";
			}
			mysql_close($con);
		}
		
	};
	insertSql();
?>


