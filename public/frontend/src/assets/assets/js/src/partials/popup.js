
/**
 * All the popup related methods.
 */

+function($){

  page.initPopup = function() {
    var body = page.body;


    /**
     * Toggle
     */
    $(document).on('click', '[data-toggle="popup"]', function() {
      var target = $(this).data('target'),
          popup  = $(target);

      if ( target !== undefined && popup.length ) {
        if (popup.hasClass('show')) {
          popup.removeClass('show');
        }
        else {
          popupShow(popup);
        }
      }
    });


    /**
     * Dismiss
     */
    $(document).on('click', '.popup [data-dismiss]', function() {
      $(this).closest('.popup').removeClass('show');
    });


    /**
     * Autoshow
     */
    $('.popup[data-autoshow]').each(function(){
      var popup = $(this),
          delay = parseInt( popup.dataAttr('autoshow') );
      setTimeout( function() { popupShow(popup) }, delay);
    });


    /**
     * Exit
     */
    $('.popup[data-exitshow]').each(function(){
      var popup  = $(this),
          delay  = parseInt( popup.dataAttr('delay', 0) ),
          target = popup.dataAttr('exitshow');

      if ( $(target).length ) {
        $(document).one('mouseleave', target, function() {
          setTimeout( function() { popupShow(popup) }, delay);
        });
      }

    });


    /**
     * Show
     */
    var popupShow = function(popup) {
      var autohide = parseInt( popup.dataAttr('autohide', 0) );
      popup.addClass('show');
      setTimeout(function() { popup.find('input:text:visible:first').focus(); }, 300);

      if (autohide > 0) {
        setTimeout( function() { popup.removeClass('show') }, autohide);
      }
    }
  }

}(jQuery);
