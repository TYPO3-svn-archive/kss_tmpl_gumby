/**
 * Company: KSS services/solutions
 * User: Alexander Kappler
 * Date: 15.08.13
 */

var oldieCheck = Boolean(document.getElementsByTagName('html')[0].className.match(/oldie/g));

if(!oldieCheck) {
    document.write('<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>');
} else {
    document.write('<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>');
}

if(!window.jQuery) {
    if(!oldieCheck) {
        document.write('<script src="typo3conf/ext/kss_tmpl_gumby/Resources/Public/js/libs/jquery-2.0.2.min.js"></script>');
    } else {
        document.write('<script src="typo3conf/ext/kss_tmpl_gumby/Resources/Public/js/libs/jquery-1.10.1.min.js"></script>');
    }
}