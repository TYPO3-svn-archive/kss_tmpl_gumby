<?php
class tx_ksstmplgumby_realurl_autoconf
{

	/**
	 * Generates additional RealURL configuration and merges it with provided configuration
	 * includes types for tq_seo sitemap & robots.txt
	 *
	 * @param array $params Default configuration
	 * @param tx_realurl_autoconfgen $pObj Parent object
	 * @return array Updated configuration
	 */

	function add_real_url_config($params, &$pObj)
	{

		return array_merge_recursive($params['config'],
			array(
				'fileName' => array (
					'index' => array(
						'sitemap.txt' => array(
							'keyValues' => array(
								'type' => 841131,
							),
						),
						'sitemap.xml' => array(
							'keyValues' => array(
								'type' => 841132,
							),
						),
						'robots.txt' => array(
							'keyValues' => array(
								'type' => 841133,
							),
						),
						'feed.rss' => array(
							'keyValues' => array(
								'type' => 9818,
							),
						),
					),
				),
			)
		);
	}
}
