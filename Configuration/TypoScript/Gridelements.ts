# Gridelements for Gumbyframework with several predefined grids (base: 12 columns grid)
# Be aware that the ids have to match the gridelements which were created in the typo3 backend
tt_content.gridelements_pi1.20.10.setup {
  // Gridelements 33/33/33 (e.g. for 12 columns grid, four columns for each box)
  # ID of gridelement (e.g. id=1)
  1 < lib.gridelements.defaultGridSetup
  1 {
    columns {
      # colPos ID
      31 < .default
      31.wrap = <div class="four columns">|</div>
      # colPos ID
      32 < .default
      32.wrap = <div class="four columns">|</div>
      # colPos ID
      33 < .default
      33.wrap = <div class="four columns">|</div>
    }
    wrap = <article class="row">|</article>
  }

  // Gridelements 33/66-columns
  2 < lib.gridelements.defaultGridSetup
  2 {
    columns {
      # colPos ID
      41 < .default
      41.wrap = <div class="four columns">|</div>
      # colPos ID
      42 < .default
      42.wrap = <div class="eight columns">|</div>
    }
    wrap = <article class="row">|</article>
  }

    // Gridelements 66/33-columns
  3 < lib.gridelements.defaultGridSetup
  3 {
    columns {
      # colPos ID
      51 < .default
      51.wrap = <div class="eight columns">|</div>
      # colPos ID
      52 < .default
      52.wrap = <div class="four columns">|</div>
    }
    wrap = <article class="row">|</article>
  }
	// Gridelements 100-columns
	4 < lib.gridelements.defaultGridSetup
	4 {
		columns {
			# colPos ID
			61 < .default
			61.wrap = <div class="twelve columns">|</div>
		}
		wrap = <article class="row">|</article>
	}

	// Gridelements 50/50-columns
	5 < lib.gridelements.defaultGridSetup
	5 {
		columns {
		  # colPos ID
		  71 < .default
		  71.wrap = <div class="six columns">|</div>
		  # colPos ID
		  72 < .default
		  72.wrap = <div class="six columns">|</div>
		}
		wrap = <article class="row">|</article>
	}
}