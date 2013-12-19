# ================================================
#  Set Fluid-Template
# ================================================
page = PAGE
# Use this configuration if you need specific body tags for a choosen layout
#page {
#	typeNum = 0
#	bodyTagCObject = CASE
#	bodyTagCObject {
#		key.field = layout
#
#		default = TEXT
#		default.value = <body>
#
#		# if key.field = 0
#		0 < .default
#
#		#if key.field = 1
#		1 = TEXT
#		1.wrap = <body id="|">
#		1.value = one-column
#
#		#...
#		2 = TEXT
#		2.wrap = <body id="|">
#		2.value = three-columns
#
#		3 = TEXT
#		3.wrap = <body id="|">
#		3.value = four-columns
#	}
#}

page.bodyTag >
page.bodyTagCObject = TEXT
page.bodyTagCObject.field = uid
page.bodyTagCObject.wrap = <body id="page-uid-|">


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

		# If needed, with this settings you can switch the template for a page in the backend
		# The number equals the UID of the backend layout:
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


	# Add an "virtual" extension name to be able to use <f:translate id="close" /> viewhelpers with just an id like in regular extension.
	# Otherwise you have to use the complete path to the locallang files
	extbase.controllerExtensionName = kss_tmpl_gumby
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
		# Load jquery
		jQuery = {$plugin.kss_tmpl_gumby.libraries.jquery.load}

		# Select version
		jQuery.version = {$plugin.kss_tmpl_gumby.libraries.jquery.version}

		# include from local or different CDNs (possible values: local|google|jquery|msn, default: local)
		jQuery.source = {$plugin.kss_tmpl_gumby.libraries.jquery.source}

        # set jQuery into its own scope to avoid conflicts (boolean)
        jQuery.noConflict = {$plugin.kss_tmpl_gumby.libraries.jquery.noconflict}

        # change the namespace when noConflict is activated and use jQuery with "TYPO3.###NAMESPACE###(…);" (string, default: jQuery)
        jQuery.noConflict.namespace = {$plugin.kss_tmpl_gumby.libraries.jquery.noconflict.ownNamespace}

		# include prototype
		Prototype = {$plugin.kss_tmpl_gumby.libraries.prototype.load}

		# include Scriptaculous
		Scriptaculous = {$plugin.kss_tmpl_gumby.libraries.scriptaculous.load}

		# adds modules dragdrop and controls to Scriptaculous
		Scriptaculous.modules = {$plugin.kss_tmpl_gumby.libraries.scriptaculous.load}

		# includes ExtJS
		ExtJs = {$plugin.kss_tmpl_gumby.libraries.extjs.load}

		# include ext-all.css
		ExtJs.css = {$plugin.kss_tmpl_gumby.libraries.extjs.css}

		# include default theme
		ExtJs.theme = {$plugin.kss_tmpl_gumby.libraries.extjs.theme}

		# load specific adapter (jquery|prototype|yui)
		ExtJs.adapter = {$plugin.kss_tmpl_gumby.libraries.extjs.adapter}

		# include SVG library
		SVG = {$plugin.kss_tmpl_gumby.libraries.svg.load}

		#force rendering with flash
		SVG.forceFlash = {$plugin.kss_tmpl_gumby.libraries.svg.forceFlash}
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
	headerData.1.value = <script src="typo3conf/ext/kss_tmpl_gumby/Resources/Public/js/libs/modernizr-2.7.1.min.js" type="text/javascript"></script>

	# Override default gumby path
	headerData.2 = TEXT
	headerData.2.value = <script gumby-path="typo3conf/ext/kss_tmpl_gumby/Resources/Public/js/libs"></script>

    # Base title - Use tq_seo for this instead
    #config.noPageTitle = 2
    #headerData.3 = TEXT
    #headerData.3 {
    #    field = subtitle // title
    #    stdWrap.noTrimWrap = |<title>| - {$plugin.kss_tmpl_gumby.settings.meta.titleTabCompany}</title>|
    #}

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
	page {
		includeJSlibs {
			# reverse order as desired due to forceOnTop

			gumbyInit >
			gumbyInit = EXT:kss_tmpl_gumby/Resources/Public/js/libs/gumby.init.js
			gumbyInit.forceOnTop = 1

			gumbyParallax >
			gumbyParallax = EXT:kss_tmpl_gumby/Resources/Public/js/libs/ui/gumby.parallax.js
			gumbyParallax.forceOnTop = 1

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
			gumby = EXT:kss_tmpl_gumby/Resources/Public/js/libs/gumby.js
			gumby.forceOnTop = 1

			# FORCE POSITION after jquery due to extension order dependencies

		}
	}
[else]
	page {
		includeJSlibs {
			# reverse order as desired due to forceOnTop
			gumby >
			gumby = EXT:kss_tmpl_gumby/Resources/Public/js/libs/gumby.min.js
			gumby.forceOnTop = 1
		}
	}
[global]




[globalVar = TSFE:id={$plugin.kss_tmpl_gumby.settings.homepageUid}]
    page.headerData.3.stdWrap.noTrimWrap = |<title>|</title>|
[global]

[globalVar = GP:print = 1]
    # page.includeCSS.print.media = all
[global]
