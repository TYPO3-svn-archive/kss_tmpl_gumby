Extension Manual
=================

Default Setup & Responsive Gumby Template
=================

This is a "skeleton" template which is using the gumby responsive framework. The template is integrated in a TYPO3 CMS extension (tested for version TYPO3 v 6.x).


Some features
=================

* Versioning for all files inclusive TYPO3 configuration like typoscript
* Many settings are easily definable via TYPO3 Backend Constant Editor
* Many important default options are set for development (like no_cache = 0, no-follow tag for google) and live mode



How To Use It
=================

+ Download the extension into your typo3conf/ext/ folder
+ Login to the backend, got to the Extension Manager and have a lock there for the key "kss_tmpl_gumby" or "Responsive Template"
+ Click the install button
+ Click on the left bar the "template"-item and create a "Default Root Template".
+ "Edit the whole template record"
+ On the tab "includes" add first the "CSS Styled Content" and then the "Responsive Gumby Template (kss_tmpl_gumby)" and click the save button

You also need to add backend layouts.
You can find a tutorial about this hier: http://blog.sebastiaandejonge.com/articles/2012/july/26/implementing-typo3s-backend-layouts/

Your fist column has to start with colPos = 0 (you can change that in kss_tmpl_gumby/Configuration/TypoScript/Template.ts)


How to change settings
=================
+ Web > Template and select the page where your default root template is added (e.g. on id=1)
+ In the "third" column select in the dropdown box "Constant Editor"
+ You'll now find within the category dropbox "CONFIGURATION: BASIC", and some more.

Most of the settings should be selfexplaining, but I'm trying to add a documentation for that, too.

Most importantly setup:

CONFIGURATION: BASIC > Live Mode (yes/no)
CONFIGURATION: BASIC > Starting PID (if different then id=1)

At least one Base URL - e.g.:
CONFIGURATION: DOMAIN > [Live] Base URL




Optional: realURL
==================
I have also included a (in my opinion) good .htaccess

That's it. You should be good to go!


It would be greate if other developers are willing to invest time to make this template even better!

