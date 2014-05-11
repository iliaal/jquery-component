
;(function ($) {
  'use strict';

  /**
   * A Simple jQuery Component.
   *
   * @param {object} el the component base dom object
   * @param {object} options configuration
   */
  function MyComponent(el, options) {
    var $el = this.$element = $(el);
    this.options = $.extend({}, MyComponent.DEFAULTS, $el.data(), options);
  }

  // default config options
  MyComponent.DEFAULTS = {};

  /**
   * Component Factory.
   */
  $.fn.myComponent = function () {
    this.each(function () {
      var $element = $(this);
      var instance = $element.data('my.Component');
      var options = {};

      if (!instance) {
        $element.data('my.Component',
          (instance = new MyComponent(this, options)));
      }
    });
  };

  // auto initialize components
  $(function ($) {
    $('.message-component').myComponent();
  });

})(window.jQuery);

