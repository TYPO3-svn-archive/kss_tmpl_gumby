# ======================================================================
# Layout Configuration
# ======================================================================

# Max width of images
tt_content.image.20.maxW = 1024
tt_content.image.20.maxWInText = 1024

# no divider div wrap
tt_content.div.wrap = |

# ======================================================================
# Add new frames
# ======================================================================
tt_content.stdWrap.innerWrap.cObject = CASE
tt_content.stdWrap.innerWrap.cObject {
 key.field = section_frame
 100 = TEXT
 100.value = <div class="my_section_frame1">|</div>
 110 = TEXT
 110.value = <div class="my_section_frame2">|</div>
}



# ======================================================================
# Add new layouts
# ======================================================================
tt_content.stdWrap.outerWrap.cObject = CASE
tt_content.stdWrap.outerWrap.cObject {
	key.field = layout

	100 = TEXT
	100.value = <section class="background hell"><div class="row">|</div></section>
	110 = TEXT
	110.value = <section class="background hell"><div class="row">|</div></section>
	120 = TEXT
	120.value = <section class="background hell"><div class="row">|</div></section>

	200 = TEXT
	200.value = <section class="background dunkel"><div class="row">|</div></section>
	210 = TEXT
	210.value = <section class="background dunkel"><div class="row">|</div></section>
	220 = TEXT
	220.value = <section class="background dunkel"><div class="row">|</div></section>

	900 = TEXT
	900.value = <section class="home referenzen">|</section>
	910 = TEXT
	910.value = <section class="parallax">|</section>
}


tt_content.stdWrap.innerWrap.cObject = CASE
tt_content.stdWrap.innerWrap.cObject {

  key.field = layout

  // copy the default behavior
  101 < tt_content.stdWrap.innerWrap.cObject.default

  // add own class
  101.30 = TEXT
  101.30.value = ><div class="myclass">|</div></div>

}

# Add subheader before the header (lib.stdheader.10 = Header; ...header.5 = date, see ObjectBrowser)
lib.stdheader.9 = TEXT
lib.stdheader.9 {
	field = subheader
	dataWrap = <p class="csc-subheader csc-subheader-layout-{field:layout} csc-header-alignment-{field:header_position}">|</p>

	if >
	if.isTrue.field = subheader
}


# alter the default layout of the header
lib.stdheader >
lib.stdheader = COA
lib.stdheader.10 = CASE
lib.stdheader.10 {
	key.field = header_layout
	stdWrap.wrap = <div class="header">|</div>

	default = COA
	default {
		10 = TEXT
		10 {
			field = subheader
			dataWrap = <p class="csc-subheader csc-header-alignment-{field:header_position}">|</p>

			if >
			if.isTrue.field = subheader
		}

		20 = TEXT
		20 {
			field = header
			dataWrap = <h2 class="csc-header csc-header-alignment-{field:header_position}">|</h2>

			if >
			if.isTrue.field = header
		}
	}

	# for h1
	1 < default
	1 {
		10 = TEXT
		10 {
			field = subheader
			dataWrap = <p class="csc-subheader csc-header-alignment-{field:header_position}">|</p>

			if >
			if.isTrue.field = subheader
		}

		20 = TEXT
		20 {
			field = header
			dataWrap = <h1 class="csc-header csc-header-alignment-{field:header_position}">|</h1>

			if >
			if.isTrue.field = header
		}
	}

	#for h2
	2 = COA
	2 {
		10 = TEXT
		10 {
			field = subheader
			dataWrap = <p class="csc-subheader csc-header-alignment-{field:header_position}">|</p>

			if >
			if.isTrue.field = subheader
		}

		20 = TEXT
		20 {
			field = header
			dataWrap = <h2 class="csc-header csc-header-alignment-{field:header_position}">|</h2>

			if >
			if.isTrue.field = header
		}
	}

	#for h3
	3 = COA
	3 {
		10 = TEXT
		10 {
			field = subheader
			dataWrap = <p class="csc-subheader csc-header-alignment-{field:header_position}">|</p>

			if >
			if.isTrue.field = subheader
		}

		20 = TEXT
		20 {
			field = header
			dataWrap = <h3 class="csc-header csc-header-alignment-{field:header_position}">|</h3>

			if >
			if.isTrue.field = header
		}
	}

	#and so on...

}

# make it possible to change the position of the header via the choosen layout - e.g. top,left,right to the content
tmp.stdheader = CASE
tmp.stdheader{
	key.field = layout

	100 < lib.stdheader
	100 {
		wrap = <div class="row"><div class="twelve columns center">|</div></div>
		10.setCurrent.htmlSpecialChars = 0
	}
	110 < lib.stdheader
	110 {
		wrap = <div class="four columns push_eight">|</div>
		10.setCurrent.htmlSpecialChars = 0
	}
	120 < lib.stdheader
	120 {
		wrap = <div class="four columns push_one">|</div>
		10.setCurrent.htmlSpecialChars = 0
	}

	200 < .100
	210 < .110
	220 < .120

}
lib.stdheader < tmp.stdheader

# make it possible to change the position of the header to the image via the choosen layout - e.g. top,left,right to the image
tmp.tt_content.image = CASE
tmp.tt_content.image {
	key.field = layout

    100 = COA
    100 {
    	10 < tt_content.image.10
    	20 < tt_content.image.20
    	20.stdWrap.wrap = <div class="row"><div class="seven columns">|</div></div>

    }
    110 = COA
    110 {
    	10 < tt_content.image.10
    	20 < tt_content.image.20
    	20.stdWrap.wrap = <div class="seven columns pull_five">|</div>
    }
    120 = COA
    120 {
    	10 < tt_content.image.10
    	20 < tt_content.image.20
    	20.stdWrap.wrap = <div class="seven columns">|</div>

    }

	200 < .100
	210 < .110
	220 < .120
}
tt_content.image < tmp.tt_content.image