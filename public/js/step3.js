
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

    this.$input = $el.find('input');
    this.$message = $el.find('h1');

    this.$input.on('change keyup', $.proxy(this.onChange, this));

    this.onChange();
  }

  // default config options
  MyComponent.DEFAULTS = {};

  MyComponent.prototype.onChange = function (e) {
    var value = this.$input.val();

    this.$message.text(value ? value : 'Enter something, please');
  };

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

