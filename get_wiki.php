<?php

$era = $_GET['era'];

//http://en.wikipedia.org/w/api.php?action=query&prop=revisions&titles=New_York_Yankees&rvprop=timestamp|user|comment|content

$mysqli = new mysqli('localhost', 'root', 'Tr!f0rce', 'timetree');
if ($result = $mysqli->query("SELECT * FROM epochs WHERE name = '$era'")) {
	$response = array();
	while ($row = $result->fetch_object()) {
		$response[] = array(
				'name' => $row->name,
				'description' => $row->description,
				'url' => $row->url,
				'mya' => $row->mya,
				'duration' => $row->duration
			);
	}
	echo json_encode($response);
} else {
	echo $mysqli->error;
	exit();
}


$mysqli->close();
exit();

?>