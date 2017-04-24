# simditor-date-button

<p align="center">
  <img src="https://raw.githubusercontent.com/projecao/simditor-date-button/master/simditor-date-button.gif" alt="simditor-date-button.gif">
</p>

Add a date button for Simditor. Use the date button to add the current date in the editor.

## Usage 

Reference button and dependency script on your page with Simditor:

```html
<script type="text/javascript" src="[path]/simditor.js"></script>
<script type="text/javascript" src="[path]/simditor-date-button.js"></script>
```

Add date button config when you initialize Simditor:

```js
var editor = new Simditor({
  textarea: $('#txt-editor'),
  toolbar: [..., 'date']
});
```

## LICENSE

The [MIT License](LICENSE)
