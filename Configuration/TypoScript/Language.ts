# ======================================================================
# German
# ======================================================================
## Default
config {
	linkVars = L
	sys_language_uid = 0
	language = de
	locale_all = de_DE
	htmlTag_langKey = de
	# for some reason, sys_language_mode = strict does not work here
	sys_language_mode = content_fallback
	sys_language_overlay = hideNonTranslated
}

[globalVar = GP:L = 0]


[global]

# ======================================================================
# English
# ======================================================================
[globalVar = GP:L = 1]

  ## Default
  config {
    htmlTag_langKey = en
    sys_language_uid = 1
    language = en
    locale_all = en_EN.UTF-8
  }

[global]

# ======================================================================
# other languages ...
# ======================================================================