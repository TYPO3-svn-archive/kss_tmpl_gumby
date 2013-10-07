#Remove default section_frames
TCEFORM.tt_content.section_frame {
     removeItems = 1,5,6,10,11,12,20,21
}

# Add new frames
TCEFORM.tt_content.section_frame {
     addItems.100 = MyFrame 1
     addItems.110 = MyFrame 2
}


# Content element layout
TCEFORM.tt_content.layout{
	addItems {
		100 = My Layout1
		110 = My Layout2
		120 = My Layout3
    }
}

# Field “Frontend-Layout”
TCEFORM.pages.layout{
    altLabels.0 = Standard (2 Spalten)
    altLabels.1 = 1 Column
    altLabels.2 = 3 Column
    altLabels.3 = 4 Column

    removeItems = 4,5,6 # Remove unnecessary layout
}
