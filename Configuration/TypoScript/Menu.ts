# ======================================================================
# Menu Configuration
# ======================================================================


# Default <ul> main menu
lib.mainnavi = HMENU
lib.mainnavi {
	#If only special pages shall appear in the navi, than use special = list and special.value = PID,PID2,...
	#special = list
	#special.value = 3,2,4,5,7,6

	entryLevel = 0

	1 = TMENU
	1 {
		expAll = 1
		wrap =  <ul>|</ul>
		noBlur = 1
		NO = 1
		NO {
		  wrapItemAndSub = <li>|</li>
		  stdWrap.htmlSpecialChars = 1
		  ATagTitle.field = title
		}

		ACT < .NO
		ACT {
			wrapItemAndSub = <li>|</li>
		}
	}

	2 < .1
	2 {
		wrap = <div class="submenu lvl2"><ul>|</ul></div>
		ACT.wrapItemAndSub = <li>|</li>
	}

	3 < .2
	3 {
		wrap = <div class="submenu lvl3"><ul>|</ul></div>
		ACT.wrapItemAndSub = <li>|</li>
	}
}


# Breadcrumb menu
lib.breadcrumb = HMENU
lib.breadcrumb {
	special = rootline

	1 = TMENU
	1 {
		NO = 1
		NO.stdWrap2.wrap = | <span>&raquo;</span>

		CUR = 1
		CUR < .NO
		CUR.ATagParam = class="active"

		ACT = 1
		ACT < .CUR

	}
}

# Default <ul> footer menu, separate menuitems by "|" e.g. "item1 | item2 | item3", does't take care of external links!
lib.footermenu = HMENU
lib.footermenu {
  special = directory
  special.value = 32

  1 = TMENU
  1 {
    NO = 1
    NO.allWrap = ||*|&nbsp;/&nbsp;||*|
  }
}

# Menu which takes care about external links
lib.relatedpages = HMENU
lib.relatedpages {
	special = directory
	special.value = 50

	1 = TMENU
	1 {
		expAll = 1
		noBlur = 1

		NO {
			stdWrap.cObject = CASE
			stdWrap.cObject {
				key.field = doktype
				default = TEXT
				default {
					field = title
					typolink {
						parameter.data = field:uid
					}
				}

				3 < .default
				3 {
					stdWrap.htmlSpecialChars = 1
					typolink {
						parameter {
							data >
							dataWrap = http://{field:url}
						}
					}
				}
			}
		doNotLinkIt = 1
		allWrap = ||*|&nbsp;/&nbsp;||*|
		}
	}
}