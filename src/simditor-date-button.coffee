class DateButton extends Simditor.Button

  name: 'date'

  icon: 'none fa fa-clock-o'

  htmlTag: 'span'

  needFocus: true

  _status: ->

  command: ->
    $rootBlock = @editor.selection.rootNodes().first()
    $nextBlock = $rootBlock.next()

    if $nextBlock.length > 0
      @editor.selection.save()
    else
      $newBlock = $('<p/>').append @editor.util.phBr

    $span = $('<span/>').text(@_getDate()).insertAfter $rootBlock

    if $newBlock
      $newBlock.insertAfter $span
      @editor.selection.setRangeAtStartOf $newBlock
    else
      @editor.selection.restore()

    @editor.trigger 'valuechanged'

  _getDate: ->
    now = new Date()
    day = now.getDate()
    month = now.getMonth() + 1
    year = now.getFullYear()

    parse = (n) -> if n > 9 then n else "0#{n}"

    fulldate = [parse(day), parse(month), year].join '/'

    time = now.toString().match(/\d\d:\d\d:\d\d/)[0]

    "#{fulldate} #{time} "

Simditor.Toolbar.addButton DateButton

