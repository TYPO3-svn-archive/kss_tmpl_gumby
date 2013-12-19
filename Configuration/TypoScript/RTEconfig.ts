# global configuration for rte
RTE.default {
	showButtons (
		blockstylelabel, blockstyle, textstylelabel, textstyle, bold, italic, underline, left, center, right, orderedlist, unorderedlist, image, textindicator, link, chMode, removeformat, undo, redo, pastetoggle
	)
	showStatusBar =  1

	# RTE shall use CSS
	useCSS = 1
	# und zwar genau diese Datei (natürlich müsst ihr die Datei erst anlegen ;)
	contentCSS = typo3conf/ext/kss_tmpl_gumby/Resources/Public/css/rte-styles.css

	# Diese Klasse soll im Textstyle verfügbar sein:
	buttons.textstyle.tags.span.allowedClasses = (highlight-orange)

	# add pastetoggle button to RTE toolbar
	buttons.pastetoggle.setActiveOnRteOpen = 1

	# Set default link target
	buttons.link.properties.target.default = _self

	buttons.bold.hotKey = b
	buttons.italic.hotKey = i

	setup.default.edit_RTE = 1

	proc{
		# hier muss diese Klasse ebenfalls definiert werden, damit der RTE diese zulässt
		allowedClasses := addToList(highlight-orange)

		# Erlaubte Attribute in p, div Tags
		keepPDIVattribs = class,style,id

		dontConvBRtoParagraph = 1

		#entryHTMLparser_db = 1
		#entryHTMLparser_db {
		#	allowTags = div,ul,li,span,a,img,aside,h1,h2,h3,h4,h5,br,table,tr,td,tbody,dl,dt,dd
		#}
	}
}


# Hier definieren wir den Namen und das Layout im Backend!
RTE.classes {
	highlight-orange {
		# angezeigter Name in der Auswahlbox beim Blockstil
		name = Schrift: Orange

		# Aussehen der Klasse, wie sie im Backend erscheinen soll
		value = color: #ed7902;
	}
}