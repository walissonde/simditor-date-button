(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define('simditor-date-button', ["jquery","simditor"], function (a0,b1) {
      return (root['DateButton'] = factory(a0,b1));
    });
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"),require("simditor"));
  } else {
    root['SimditorDateButton'] = factory(root["jQuery"],root["Simditor"]);
  }
}(this, function ($, Simditor) {

var DateButton,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

DateButton = (function(superClass) {
  extend(DateButton, superClass);

  function DateButton() {
    return DateButton.__super__.constructor.apply(this, arguments);
  }

  DateButton.prototype.name = 'date';

  DateButton.prototype.icon = 'none fa fa-clock-o';

  DateButton.prototype.htmlTag = 'span';

  DateButton.prototype.needFocus = true;

  DateButton.prototype._status = function() {};

  DateButton.prototype.command = function() {
    var $newBlock, $nextBlock, $rootBlock, $span;
    $rootBlock = this.editor.selection.rootNodes().first();
    $nextBlock = $rootBlock.next();
    if ($nextBlock.length > 0) {
      this.editor.selection.save();
    } else {
      $newBlock = $('<p/>').append(this.editor.util.phBr);
    }
    $span = $('<span/>').text(this._getDate()).insertAfter($rootBlock);
    if ($newBlock) {
      $newBlock.insertAfter($span);
      this.editor.selection.setRangeAtStartOf($newBlock);
    } else {
      this.editor.selection.restore();
    }
    return this.editor.trigger('valuechanged');
  };

  DateButton.prototype._getDate = function() {
    var day, fulldate, month, now, parse, time, year;
    now = new Date();
    day = now.getDate();
    month = now.getMonth() + 1;
    year = now.getFullYear();
    parse = function(n) {
      if (n > 9) {
        return n;
      } else {
        return "0" + n;
      }
    };
    fulldate = [parse(day), parse(month), year].join('/');
    time = now.toString().match(/\d\d:\d\d:\d\d/)[0];
    return fulldate + " " + time + " ";
  };

  return DateButton;

})(Simditor.Button);

Simditor.Toolbar.addButton(DateButton);

return DateButton;

}));
