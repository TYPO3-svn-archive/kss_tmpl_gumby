# additional page type for ajax load
ajaxLoad = PAGE
ajaxLoad  {
	typeNum = 1

	10 = CONTENT

    10 {
		table = tt_content
		# colPos ist abhängig von der gewünschten Spalte, siehe auch Template.txt
		select {
			where = colPos = 1
			orderBy = sorting
			languageField = sys_language_uid
		}

    	renderObj < tt_content
        renderObj.stdWrap.prepend >
	}

    config {
        disableAllHeaderCode = 1
        xhtml_cleaning = 0
        admPanel = 0
        debug = 0
        no_cache = 1
    }
}