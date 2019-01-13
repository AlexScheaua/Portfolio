$(function() {

    var documentEl = $(document),
        fadeElem = $('.fade-scroll');


    documentEl.on('scroll', function() {
        var currScrollPos = documentEl.scrollTop();

        fadeElem.each(function() {
            var $this = $(this),
              elemOffsetTop = $this.offset().top;
            if (currScrollPos + 150 > elemOffsetTop) {
              $this.css('opacity', 1 - (currScrollPos+180-elemOffsetTop)/200);
            } else {
              $this.css('opacity', 1)
            }
        });
    });

});
