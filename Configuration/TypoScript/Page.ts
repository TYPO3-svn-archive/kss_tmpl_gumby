# ================================================
#  Set Fluid-Template
# ================================================
page = PAGE
page {
	typeNum = 0
	bodyTagCObject = CASE
	bodyTagCObject {
		key.field = layout

		default = TEXT
		default.value = <body>

		# if key.field = 0
		0 < .default

		#if key.field = 1
		1 = TEXT
		1.wrap = <body id="|">
		1.value = one-column

		#...
		2 = TEXT
		2.wrap = <body id="|">
		2.value = three-columns

		3 = TEXT
		3.wrap = <body id="|">
		3.value = four-columns
	}
}

page.10 = FLUIDTEMPLATE
page.10 {
	file.cObject = CASE
	file.cObject {
		key {
			data = levelfield:-1, backend_layout_next_level, slide
			override.field = backend_layout
		}
		default = TEXT
		default.value = EXT:kss_tmpl_gumby/Resources/Private/Templates/Default.html

		# Durch Auswahl des Backendlayouts wird auch das entsprechende Template verwendet
		# The number equals the UID of the backend Layout:
		#1 = TEXT
        #1.value = EXT:kss_tmpl_gumby/Resources/Private/Templates/2Column.html

		#2 = TEXT
		#2.value = EXT:kss_tmpl_gumby/Resources/Private/Templates/Default.html

		#3 = TEXT
        #3.value = EXT:kss_tmpl_gumby/Resources/Private/Templates/2x1Column.html
	}

   file = EXT:kss_tmpl_gumby/Resources/Private/Templates/Default.html
   partialRootPath = EXT:kss_tmpl_gumby/Resources/Private/Partials
   layoutRootPath = EXT:kss_tmpl_gumby/Resources/Private/Layouts
   templateRootPath = EXT:kss_tmpl_gumby/Resources/Private/Templates

   settings {
    	# Get the copyright year from a TypoScript constant. Get access in fluid with: {settings.copyrightYear}
   		copyrightYear = {$plugin.kss_tmpl_gumby.settings.copyrightyear}

   		# Get the logo for the template
   		logo = {$plugin.kss_tmpl_gumby.settings.logo}

   		# Get the company name for the alt-tag of the logo <img> - better for seo
   		company_name = {$plugin.kss_tmpl_gumby.settings.company_name}
   }


	# Da diese "Extension" keine Controller etc hat, wird hier ein Extensionname manuell gesetzt.
	# Dies ist für die korrekte Funktion des <f:translate> - Viewhelper "notwendig",
	# da sonst immer der ExtName angegeben werden muss
	extbase.controllerExtensionName = KssTemplate
	#extbase.pluginName = Pi1
}



# ======================================================================
# Page Object Configuration
# ======================================================================

tmp.jsCopy < page.includeJSlibs

page {
    ## use html5 boilerplate style html tag
    config.htmlTag_stdWrap.cObject = TEXT
    config.htmlTag_stdWrap.cObject.value (
    	<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
		<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
		<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
		<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
		<!--[if IE 9]>    <html class="no-js ie9" lang="en"> <![endif]-->
		<!--[if gt IE 9]><!--> <html class="no-js"> <!--<![endif]-->
    )

    ## Stylesheet files
    includeCSS {

        style = typo3conf/ext/kss_tmpl_gumby/Resources/Public/css/gumby.css
        style.media = all
        style.external = 1

    }

    ## Add jQuery
    javascriptLibs {
		# Load jquery - don't use it for gumby, we can't otherwise use the fallback to jQ1.10.x for old browsers
		#jQuery = {$plugin.kss_tmpl_gumby.libraries.jquery.load}

		# Select version
		#jQuery.version = {$plugin.kss_tmpl_gumby.libraries.jquery.version}

		# include from local or different CDNs (possible values: local|google|jquery|msn, default: local)
		#jQuery.source = {$plugin.kss_tmpl_gumby.libraries.jquery.source}

        # set jQuery into its own scope to avoid conflicts (boolean)
        #jQuery.noConflict = {$plugin.kss_tmpl_gumby.libraries.jquery.noconflict}

        # change the namespace when noConflict is activated and use jQuery with "TYPO3.###NAMESPACE###(…);" (string, default: jQuery)
        #jQuery.noConflict.namespace = {$plugin.kss_tmpl_gumby.libraries.jquery.noconflict.ownNamespace}

		# include prototype
		Prototype =

		# include Scriptaculous
		Scriptaculous =

		# adds modules dragdrop and controls to Scriptaculous
		Scriptaculous.modules = dragdrop,controls

		# include ExtCore
		ExtCore =

		# include ExtCore debug file (uncompressed)
		ExtCore.debug =

		# includes ExtJS
		ExtJs =

		# include ext-all.css
		ExtJs.css =

		# include default theme
		ExtJs.theme =

		# load specific adapter (jquery|prototype|yui)
		ExtJs.adapter =

		# initialize QuickTips
		ExtJs.quickTips =

		# includes ExtJS debug file (uncompressed)
		ExtJs.debug =

		# include SVG library
		SVG =

		# include SVG debug file
		SVG.debug =

		#force rendering with flash
		SVG.forceFlash =


	}

    includeJSlibs {
        # reverse order as desired due to forceOnTop

		gumbyInit >
		gumbyInit = EXT:kss_tmpl_gumby/Resources/Public/js/libs/gumby.init.js
		gumbyInit.forceOnTop = 1

		gumbyValidation >
		gumbyValidation = EXT:kss_tmpl_gumby/Resources/Public/js/libs/ui/gumby.validation.js
		gumbyValidation.forceOnTop = 1

		gumbyFittext >
		gumbyFittext = EXT:kss_tmpl_gumby/Resources/Public/js/libs/ui/gumby.fittext.js
		gumbyFittext.forceOnTop = 1

		gumbyNavbar >
		gumbyNavbar = EXT:kss_tmpl_gumby/Resources/Public/js/libs/ui/gumby.navbar.js
		gumbyNavbar.forceOnTop = 1

		gumbyRadiobtn >
		gumbyRadiobtn = EXT:kss_tmpl_gumby/Resources/Public/js/libs/ui/gumby.radiobtn.js
		gumbyRadiobtn.forceOnTop = 1

		gumbyCheckbox >
		gumbyCheckbox = EXT:kss_tmpl_gumby/Resources/Public/js/libs/ui/gumby.checkbox.js
		gumbyCheckbox.forceOnTop = 1

		gumbyToggleswitch >
		gumbyToggleswitch = EXT:kss_tmpl_gumby/Resources/Public/js/libs/ui/gumby.toggleswitch.js
		gumbyToggleswitch.forceOnTop = 1

		gumbySkiplink >
		gumbySkiplink = EXT:kss_tmpl_gumby/Resources/Public/js/libs/ui/gumby.skiplink.js
		gumbySkiplink.forceOnTop = 1

		gumbyFixed >
		gumbyFixed = EXT:kss_tmpl_gumby/Resources/Public/js/libs/ui/gumby.fixed.js
		gumbyFixed.forceOnTop = 1

		gumbyRetina >
		gumbyRetina = EXT:kss_tmpl_gumby/Resources/Public/js/libs/ui/gumby.retina.js
		gumbyRetina.forceOnTop = 1

		gumby >
		gumby = EXT:kss_tmpl_gumby/Resources/Public/js/libs/gumby.min.js
		gumby.forceOnTop = 1

		oldi >
		oldi = EXT:kss_tmpl_gumby/Resources/Public/js/libs/oldiCheck.js
		oldi.forceOnTop = 1

        # FORCE POSITION after jquery due to extension order dependencies

    }
    includeJS{
    	plugins = EXT:kss_tmpl_gumby/Resources/Public/js/plugins.js
		main = EXT:kss_tmpl_gumby/Resources/Public/js/main.js
    }


    meta {
        description = TEXT
        description.field = description
        keywords = TEXT
        keywords.field = keywords
        author = TEXT
        author.field = author
        publisher = {$plugin.kss_tmpl_gumby.settings.meta.publisher}
        revisit-after = {$plugin.kss_tmpl_gumby.settings.meta.google_revisit}
        copyright = {$plugin.kss_tmpl_gumby.settings.meta.copyright}
        viewport = width=device-width, initial-scale=1.0, maximum-scale=1

        # Hier der Code für die Google-Webmaster-Tools, falls benötigt
        if.isTrue.value = {$plugin.kss_tmpl_gumby.settings.meta.google_verify-v1}
        verify-v1 = {$plugin.kss_tmpl_gumby.settings.meta.google_verify-v1}
    }

	# Modernizr
	headerData.1 = TEXT
	headerData.1.value = <script src="typo3conf/ext/kss_tmpl_gumby/Resources/Public/js/libs/modernizr-2.6.2.min.js" type="text/javascript"></script>

	# Override default gumby path
	headerData.2 = TEXT
	headerData.2.value = <script gumby-path="typo3conf/ext/kss_tmpl_gumby/Resources/Public/js/libs"></script>

    # Base title
    config.noPageTitle = 2
    headerData.3 = TEXT
    headerData.3 {
        field = subtitle // title
        stdWrap.noTrimWrap = |<title>| - {$plugin.kss_tmpl_gumby.settings.meta.titleTabCompany}</title>|
    }

    # Apple Touch Icon
    headerData.4 = TEXT
    headerData.4.value = <link rel="apple-touch-icon" href="{$plugin.kss_tmpl_gumby.settings.appleTouchIcon}" />

	# Apple Touch Icon
	headerData.5 = TEXT
	headerData.5.value = <link rel="apple-touch-icon" sizes="72x72" href="{$plugin.kss_tmpl_gumby.settings.appleTouchIcon72}" />

	# Apple Touch Icon
	headerData.6 = TEXT
	headerData.6.value = <link rel="apple-touch-icon" sizes="114x114" href="{$plugin.kss_tmpl_gumby.settings.appleTouchIcon114}" />

	# Apple Touch Icon
	headerData.7 = TEXT
	headerData.7.value = <link rel="apple-touch-icon" sizes="144x144" href="{$plugin.kss_tmpl_gumby.settings.appleTouchIcon144}" />


	# Favicon
    shortcutIcon = {$plugin.kss_tmpl_gumby.settings.shortcutIcon}
}

# ======================================================================
# Don't allow google to index any other Sites except for the Live-Site
# ======================================================================
[globalVar = LIT:1 = {$plugin.kss_tmpl_gumby.settings.LIVE_MODE}]
    page.meta.robots = noindex,nofollow
[global]




[globalVar = TSFE:id={$plugin.kss_tmpl_gumby.settings.homepageUid}]
    page.headerData.3.stdWrap.noTrimWrap = |<title>|</title>|
[global]

[globalVar = GP:print = 1]
    # page.includeCSS.print.media = all
[global]



# The social sharing

lib.mediaUrl = TEXT
lib.mediaUrl {
    data = getIndpEnv : TYPO3_REQUEST_URL
}

lib.facebook = COA
lib.facebook {
    10 = TEXT
    10 < lib.mediaUrl
    wrap (
                        <div id="fb-root"></div><div class="fb-like" data-href="|" data-send="false" data-layout="button_count" data-width="150" data-show-faces="false"></div>
    )
}

lib.twitter = COA
lib.twitter {
    10 = TEXT
    10 < lib.mediaUrl
    wrap (
                     <a href="https://twitter.com/share" class="twitter-share-button" data-lang="{$plugin.tx_ksstemplate.settings.twLang}" data-count="none" data-url="|"></a>


    )
}

lib.googlePlus = COA
lib.googlePlus {
    10 = TEXT
    10 < lib.mediaUrl
    wrap (
                    <div class="g-plusone" data-size="small" data-annotation="none" data-href="|"></div>
    )
}

lib.pInterest = COA
lib.pInterest {
    10 = TEXT
    10 < lib.mediaUrl
    wrap (
        <a href="http://pinterest.com/pin/create/button/?url=|" class="pin-it-button"><img src="//assets.pinterest.com/images/PinExt.png" title="Pin It" /></a>
    )
}

lib.printlink = TEXT
lib.printlink.wrap = <li id="share-print"><a href="javascript:print();"></a></li>

lib.tipafriend = TEXT
lib.tipafriend {
    value = Recommend Page
    stdWrap.typolink {
        parameter = {$plugin.tx_ksstemplate.settings.PIDtipForm}
        target = _self
        ATagBeforeWrap = 1
        additionalParams.data = getIndpEnv: TYPO3_REQUEST_URL
        additionalParams.wrap = &type=924&formhandler[url]=|
        additionalParams.rawUrlEncode = 1
    }
}



# ======================================================================
# Add new frames
# ======================================================================

tt_content.stdWrap.innerWrap.cObject = CASE
tt_content.stdWrap.innerWrap.cObject {
 key.field = section_frame
 100 = TEXT
 100.value = <div class="center-element">|</div>
 110 = TEXT
 110.value = <div class="float-left-articles">|</div>
 120 = TEXT
 120.value = <div class="columns-2x1 left-50-50">|</div>
 130 = TEXT
 130.value = <div class="columns-2x1 right-50-50">|</div>
}


# ======================================================================
# The social icons
# ======================================================================

lib.socialFunc = COA
lib.socialFunc {
    wrap = <script type="text/javascript">|</script>
    10 = TEXT
    10.wrap (
        $('#share-facebook').qtip({
            style: {
                width: 120
            },
            content: {
                text: '|'
            },
            hide: {
                fixed: true,
                delay: 400
            },
            events: {
                render: function(event, api) {
                    fbInit('{$plugin.tx_ksstemplate.settings.fbAppId}', '{$plugin.tx_ksstemplate.settings.fbLang}');
                }
            },
            position: {
                viewport: $('.content-top'),
                adjust: {
                    method: 'flip none',
                    x: 53,
                    y: 10
                }
            }
        });
    )
    10.stdWrap.cObject < lib.facebook
    20 = TEXT
    20.wrap (
        $('#share-googleplus').qtip({
            style: {
                width: 22
            },
            content: {
                text: '|'
            },
            hide: {
                fixed: true,
                delay: 400
            },
            events: {
                show: function(event, api) {
                    gpInit('{$plugin.tx_ksstemplate.settings.gpLang}');
                }
            },

            position: {
                viewport: $('.content-top'),
                adjust: {
                    method: 'flip none',
                    x: 20,
                    y: 10
                }
            }
        });
    )
    20.stdWrap.cObject < lib.googlePlus
    30 = TEXT
    30.wrap (
        $('#share-twitter').qtip({
            style: {
                width: 90
            },
            content: {
                text: '|'
            },
            hide: {
                fixed: true,
                delay: 400
            },
            events: {
                show: function(event, api) {
                    twInit();
                }
            },
            position: {
                viewport: $('.content-top'),
                adjust: {
                    method: 'flip none',
                    x: 38,
                    y: 10
                }
            }

        });
    )
    30.stdWrap.cObject < lib.twitter
}


# Für eine social media navi
lib.socials = COA
lib.socials {
    wrap = <ul>|</ul>
    10 < lib.printlink
    20 < lib.tipafriend
    20.wrap = <li id="share-email">|</li>
    30 = TEXT
    30.value = <li id="share-facebook"><a href="#">Facebook</a></li>
    40 = TEXT
    40.value = <li id="share-twitter"><a href="#">Twitterk</a></li>
    50 = TEXT
    50.value = <li id="share-googleplus"><a href="#">Google+</a></li>
    60 < lib.socialFunc
}