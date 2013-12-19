============
Users manual
============

Target group: **Editors**


Default Setup & Responsive Gumby 2.6 Template
=============================================

This is a "skeleton" template which is using the gumby responsive framework. The template is integrated in a TYPO3 CMS extension (tested for version TYPO3 v 6.x).

!Attention! !WARNING!
======================
With each update of this app all of your settings, templates, css, ... will be overwritten! NEVER install an update if you have already done some custom settings or save them before you update!

Some features
=================

* Be able to versioning all files inclusive TYPO3 configuration like typoscript
* Many settings are easily definable via TYPO3 backend constant editor
* Many important default options are set for development (like no_cache = 0, no-follow tag for google) and live mode
* Configuration for automatically creating a realURL config


How To Use It
=================

+ Download the extension into your typo3conf/ext/ folder
+ Login to the backend, got to the Extension Manager and have a look there for the key "kss_tmpl_gumby" or "Responsive Template"
+ Click the install button
+ Click on the left bar the "template"-item and create a "Default Root Template".
+ "Edit the whole template record"
+ On the tab "includes" add first the "CSS Styled Content" and then the "Responsive Gumby Template (kss_tmpl_gumby)" and click the save button

You also need to add backend layouts.
You can find a tutorial about this hier: http://blog.sebastiaandejonge.com/articles/2012/july/26/implementing-typo3s-backend-layouts/

Your fist column has to start with colPos = 0 (you can change that in kss_tmpl_gumby/Configuration/TypoScript/Template.ts)


How to change settings
======================
+ Web > Template and select the page where your default root template is added (e.g. on id=1)
+ In the "third" column select in the dropdown box "Constant Editor"
+ You'll now find within the category dropbox "CONFIGURATION: BASIC", and some more.

You will only find this if you have added the extension to your root template!

Most of the settings should be self explaining, but I'm trying to add a documentation for that, too.

Important Settings
------------------
CONFIGURATION: BASIC
^^^^^^^^^^^^^^^^^^^^^
> Live Mode (yes/no)
If live mode is set, no_cache = 0 and other settings (like use gumby.min.js) are set for live mode. Otherwise no_cache = 1, no-follow and use single gumby.js scripts ... is used (this is for development)

> Starting PID (if different then id=1)
Needed for RealURL to set the starting point, the PID of your "home" page.


CONFIGURATION: DOMAIN
---------------------
> [Live] Base URL
Define at least one base URL. You can define up to 4 URLs for instance for lokal development environment, company development server, stage server and live server


Recommended Extensions
======================

gridelements
------------------------------
I also recommend to install gridelements. With the help of this extension you can easily create columns in the backend.

Steps to do:

1. Install the extension (key: gridelements)
2. Add gridlayouts: switch to list view select e.g. a sysfolder where they should be stored, and add all needed columns versions (e.g. box with 3 columns).
3. I have added an example configuration for gridelements you can find it in EXT:kss_tmpl_gumby/Configuration/TypoScript/Gridelements.ts you might need to adapt at least the IDs which you had to add for the gridelements. You can also define more/different columns if needed

A good german explanation for gridelements can be found here:
http://jweiland.net/typo3/extension-showcase/layout-raster-fuer-inhaltselemente-gridelements.html


realURL
==================
I have also included a (in my opinion) good .htaccess


tq_seo
======
Very good SEO tool to setup sitemap.xml and robots.txt on-the-fly as well as see&edit your page metatags like description, set the canonical tag and so on


That's it. You should be good to go!

It would be great if other developers are willing to invest time to make this template even better!


KSS services/solutions
Alexander Kappler
Mörkenstraße 49
22767 Hamburg
http://www.kss-online.com
