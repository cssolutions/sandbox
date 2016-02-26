<?php

class Validator {
	
	public static function validate(array $config, array $datas = []) {
		$validation = new Phalcon\Validation();
		foreach ($config as $field => $validators) {
			foreach (explode('|', $validators) as $validator) {
				$vv = explode(':', $validator);
				//var_dump($vv);exit();
				switch ($vv[0]) {
					case 'required':
							$validator_name = 'Phalcon\Validation\Validator\PresenceOf';
							$message = 'The :field is required';
							$validation->add($field, new $validator_name(['message' => $message]));
						break;
					case 'email':
							$validator_name = 'Phalcon\Validation\Validator\Email';
							$message = 'The :field is not an email!';
							$validation->add($field, new $validator_name(['message' => $message]));
						break;
					case 'identical':
							$validator_name = 'Phalcon\Validation\Validator\Identical';
							$message = 'The :field must be equals to ' . $vv[1];
							$validation->add($field, new $validator_name(['message' => $message, 'accepted' => $vv[1]]));
						break;
					case 'exclusionin':
							$values = explode(',',ltrim(rtrim($vv[1], ')'), '('));
							var_dump($values);
							$validator_name = 'Phalcon\Validation\Validator\ExclusionIn';
							$message = 'The :field can\'t be one of the following values: ' . $vv[1];
							$validation->add($field, new $validator_name(['message' => $message, 'domain' => $values]));
						break;
					case 'inclusionin':
							$values = explode(',',ltrim(rtrim($vv[1], ')'), '('));
							$validator_name = 'Phalcon\Validation\Validator\InclusionIn';
							$message = 'The :field must be one of the following values: ' . $vv[1];
							$validation->add($field, new $validator_name(['message' => $message, 'domain' => $values]));
						break;
					
					case 'regex':
							$validator_name = 'Phalcon\Validation\Validator\Regex';
							$message = 'The :field have to match with the following pattern: ' . $vv[1];
							$validation->add($field, new $validator_name(['message' => $message, 'pattern' => $vv[1]]));
						break;
					case 'strlength':
							list($min,$max) = explode(',',ltrim(rtrim($vv[1], ')'), '('));
							$validator_name = 'Phalcon\Validation\Validator\StringLength';
							$message = 'The :field is required';
							$validation->add($field, new $validator_name(['message' => $message, 'min' => $min, 'max' => $max, 'messageMaximum' => 'The minimum length of str must be: ' . $min, 'messageMinimum' => 'The maximum length of str must be: ' . $max]));
						break;
					case 'between':
							list($min,$max) = explode(',',ltrim(rtrim($vv[1], ')'), '('));
							$validator_name = 'Phalcon\Validation\Validator\Between';
							$validation->add($field, new $validator_name(['minimum' => $min, 'maximum' => $max, 'message' => 'The number must be between: ' . $min . ' - ' . $max]));
						break;
					case 'confirmation':
							$validator_name = 'Phalcon\Validation\Validator\Confirmation';
							$message = 'The :field is not equal with ' . $vv[1];
							$validation->add($field, new $validator_name(['message' => $message, 'with' => $vv[1]]));
						break;
					case 'url':
							$validator_name = 'Phalcon\Validation\Validator\Url';
							$message = 'The :field is not in url-format';
							$validation->add($field, new $validator_name(['message' => $message]));
						break;
					case 'exists':
							$validator_name = 'Oninflo\Validations\Exists';
							$message = 'The :field is not exists in the database!';
							$validation->add($field, new $validator_name(['message' => $message, 'domain' => $values, 'model_name' => $vv[1], 'field_name' => $vv[2]]));
						break;
//					case 'exists_multiple':
//							$validator_name = 'Oninflo\Validations\ExistsMultiple';
//							$message = 'The :field is required';
//							$validation->add($field, new $validator_name(['message' => $message, 'domain' => $values]));
//						break;
					case 'ip':
							$validator_name = 'Oninflo\Validations\Ip';
							$message = 'The :field is not an Ip address!';
							$validation->add($field, new $validator_name(['message' => $message]));
						break;
					case 'mac':
							$validator_name = 'Oninflo\Validations\Mac';
							$message = 'The :field is not a MAC address!';
							$validation->add($field, new $validator_name(['message' => $message]));
						break;
					default:
						break;
				}
			
			}
		}
		$datas = (!empty($datas)) ? $datas : $_POST;
		return $validation->validate($datas);
	}
	
}


$datas_to_validate = ['name'=>'aba','email'=>'3'];
$validators = [
	'name'=>'required|confirmation:email',
	'email'=>'required|exclusionin:(1,2,5,6)|inclusionin:(3,4,7)|url'
];
$result = Validator::validate($validators, $datas_to_validate);
var_dump($result);