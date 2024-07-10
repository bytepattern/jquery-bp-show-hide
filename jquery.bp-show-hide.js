(function($) {
	 /*
    Plugin: Bytepattern
    author: bytepattern@gmail.com
    */
  $.fn.showHideText = function(options) {
    // Default options
    var settings = $.extend({
      maxLength: 30,
      showSpeed: 200,
      hideSpeed: 500,
      moreText: 'More...',
      lessText: 'Hide',
	  moreClass : 'bp-read-more',
	  lessClass : 'bp-read-less',
    }, options);

    return this.each(function() {
      var $this = $(this), className = $this.attr('class'), myStr = $.trim($this.text());

      if (myStr.length > settings.maxLength) {
        $this.before(' <span class="'+settings.moreClass+'">' + settings.moreText + '</span>');
      }

      $(document).on("click", "."+settings.moreClass, function() {
        $(this).parent().find('.'+className).show(settings.showSpeed).after(' <span class="'+settings.lessClass+'">' + settings.lessText + '</span>');
        $(this).remove();
      });

      $(document).on("click", "."+settings.lessClass, function() {
        $(this).parent().find('.'+className).hide(settings.hideSpeed).before('<span class="'+settings.moreClass+'">' + settings.moreText + '</span>');
        $(this).remove();
      });
    });
  };
})(jQuery);