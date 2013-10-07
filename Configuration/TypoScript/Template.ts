# ======================================================================
# Template objects
# ======================================================================

# You have to use the backend layouts as well! Also css_styled_content has to be included in the default template root!

# Für Backend-Layouts
lib.content = CONTENT
lib.content {
  table = tt_content
  select {
    where = colPos = 0
    orderBy = sorting
    languageField = sys_language_uid
  }
}

lib.column1 < lib.content
lib.column1.select.where = colPos = 1

lib.column2 < lib.content
lib.column2.select.where = colPos = 2

# Those variables will be available in the fluid template via {variable}
page.10.variables {

	#send page.ID if necessary to fluid
	#pid.data = page.id

	mainnavi < lib.mainnavi

	breadcrumb < lib.breadcrumb

	content < lib.content

	#content_left < lib.column1
	#content_right < lib.column2

	footer < lib.footer

	#socialmedia < lib.socials

}