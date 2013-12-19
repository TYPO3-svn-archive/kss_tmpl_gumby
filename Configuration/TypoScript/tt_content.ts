tt_content.stdWrap.outerWrap.cObject = CASE
tt_content.stdWrap.outerWrap.cObject {
	key.field = layout

	default = TEXT
	default.value = |

	99 < default

	100 = TEXT
	100.value = <section class="background hell">|<div class="next-element-arrow"></div></section>

	200 = TEXT
	200.value = <section class="background dunkel">|<div class="next-element-arrow"></div></section>

	900 = TEXT
	900.value = <section class="home referenzen">|</section>
	910 = TEXT
	910.value = <section class="parallax">|</section>
}

# Füge den Subheader vor dem Header ein (lib.stdheader.10 = Header; ...header.5 = date, see ObjectBrowser)
lib.stdheader.9 = TEXT
lib.stdheader.9 {
	field = subheader
	dataWrap = <p class="csc-subheader csc-subheader-layout-{field:layout} csc-header-alignment-{field:header_position}">|</p>

	if >
	if.isTrue.field = subheader
}
# Lösche den default subheader, da er sonst doppelt erscheint
lib.stdheader.20 >

# Erlaubt HTML-Tags in der Überschrift
lib.stdheader.10.setCurrent.htmlSpecialChars = 0