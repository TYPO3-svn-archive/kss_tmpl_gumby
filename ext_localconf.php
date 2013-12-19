<?php
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:kss_tmpl_gumby/Configuration/TypoScript/PageTsConfig.ts">');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:kss_tmpl_gumby/Configuration/TypoScript/RTEconfig.ts">');

$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/realurl/class.tx_realurl_autoconfgen.php']['extensionConfiguration']['kss_tmpl_gumby'] =
	'EXT:kss_tmpl_gumby/class.tx_ksstmplgumby_realurl_autoconf.php:tx_ksstmplgumby_realurl_autoconf->add_real_url_config';