<?php
$query1 = <<<EOT
Some string goes here	  
EOT;

$config = [
	'name'      => '[name]',	//name of the application and database too
	'item_name' => '[Ház]',
	'mvc'       => ['[name]' => [
										'sql'  => $query1,
										'validators' => [
																'[field_name1]' => 'validators separated by |',
																'[field_name2]' => 'validators separated by |',
																'[field_name3]' => 'validators separated by |',
															 ],
										'validators_store' => [
																'[field_name1]' => 'validators separated by |',
																'[field_name2]' => 'validators separated by |',
																'[field_name3]' => 'validators separated by |',
															 ],
										'validators_update' => [
																'[field_name1]' => 'validators separated by |',
																'[field_name2]' => 'validators separated by |',
																'[field_name3]' => 'validators separated by |',
															 ],
		                       ]
					   ],
						['[name]' => [
										'sql'  => $query1,
										'validators' => [
																'[field_name1]' => 'validators separated by |',
																'[field_name2]' => 'validators separated by |',
																'[field_name3]' => 'validators separated by |',
															 ],
										'validators_store' => [
																'[field_name1]' => 'validators separated by |',
																'[field_name2]' => 'validators separated by |',
																'[field_name3]' => 'validators separated by |',
															 ],
										'validators_update' => [
																'[field_name1]' => 'validators separated by |',
																'[field_name2]' => 'validators separated by |',
																'[field_name3]' => 'validators separated by |',
															 ],
		                       ]
					   ],
	'skipped' => [],
];



//make directories
//copy files to them
//replace file contents