<?php
$EM_CONF[$_EXTKEY] = array(
	'title' => 'Responsive Gumby Template',
	'description' => 'Responsive Template, based on Gumby 2.6',
	'category' => 'templates',
	'author' => 'Alexander Kappler',
	'author_email' => 'kappler@kss-online.com',
	'author_company' => 'KSS services/solutions',
	'shy' => '',
	'priority' => '',
	'module' => '',
	'state' => 'beta',
	'internal' => '',
	'uploadfolder' => '0',
	'createDirs' => '',
	'modify_tables' => '',
	'clearCacheOnLoad' => 0,
	'lockType' => '',
	'version' => '2.6.0',
	'constraints' => array(
		'depends' => array(
			'typo3' => '6.0.0-6.1.99',
			'extbase' => '6.0.0-6.1.99',
			'fluid' => '6.0.0-6.1.99',
		),
		'conflicts' => array(
		),
		'suggests' => array(
			'gridelements' => '2.0.0-2.0.99',
			'realurl' => '1.12.1-1.12.99',
			'tq_seo' => '6.0.0-6.0.99',
		),
	),
);

?>