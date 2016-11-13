<?php
	header("contentType");
	$con = mysql_connect("localhost", "root");
	if (!$con) {
		die('Could not connect: ' . mysql_error());
	}

	mysql_select_db("jikedb", $con);
	mysql_query("set names 'utf8'");

	$result = mysql_query("SELECT * FROM news");
	while ($row = mysql_fetch_array($result)) {
		$res = array('newsTitle'=>"$row[newsTitle]",'newsImg'=>"$row[newsTitle]",
					'newsContent'=>"$row[newsContent]",'newsTag'=>"$row[newsTag]",
					'addDate'=>"$row[addDate]");
		   foreach ( $res as $key => $value ) {  
		        $res[$key] = urlencode ( $value );  
		    }  
		echo urldecode(json_encode($res));
	}

	mysql_close($con);

?>