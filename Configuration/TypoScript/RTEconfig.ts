# RTE-Anpassungen (eigene Stile)
RTE.default {
	showButtons (
		blockstylelabel, blockstyle, textstylelabel, textstyle, bold, italic, orderedlist, unorderedlist, textindicator, link, chMode, removeformat, undo, redo, pastetoggle
	)
	showStatusBar =  1

	# RTE soll CSS verwenden
	useCSS = 1
	# und zwar genau diese Datei (natürlich müsst ihr die Datei erst anlegen ;)
	contentCSS = typo3conf/ext/kss_tmpl_gumby/Resources/Public/css/rte-styles.css

	# Diese Klasse soll im Textstyle verfügbar sein:
	buttons.textstyle.tags.span.allowedClasses = (highlight-orange)

	# add pastetoggle button to RTE toolbar
	buttons.pastetoggle.setActiveOnRteOpen = 1

	# Set default link target
	buttons.link.properties.target.default = _blank

	# hier muss diese Klasse ebenfalls definiert werden, damit der RTE diese zulässt
	proc.allowedClasses := addToList(highlight-orange)

	buttons.bold.hotKey = b
	buttons.italic.hotKey = i

	setup.default.edit_RTE = 1
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