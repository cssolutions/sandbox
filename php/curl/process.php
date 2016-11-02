<?php

//echo $_SERVER['REQUEST_METHOD'];
//exit();

switch ($_SERVER['REQUEST_METHOD']) {
	case 'POST':
		echo json_encode($_POST);
		break;
	case 'GET':
		echo json_encode($_GET);
		break;
	case 'PUT':
		parse_str(file_get_contents("php://input"),$post_vars);
		echo json_encode($post_vars);
		break;
	case 'DELETE':
		echo json_encode(['key' => 'value']);
		break;
	default:
		break;
}
