<?php

//create a default Validator, that use $config[mvc][név]


$config = [
	'name'    => '[name]',	//name of the application and database too
	'mvc'     => ['[name]' => [
										'sql'  => '[query]',
										'attributes' => [
																'[field_name1]' => 'validators separated by |',
																'[field_name2]' => 'validators separated by |',
																'[field_name3]' => 'validators separated by |',
															 ]
		                       ]
					 ],
	'skipped' => [],
];