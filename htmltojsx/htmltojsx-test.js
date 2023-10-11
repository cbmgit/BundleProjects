const htmlToJSX = require('htmltojsx');

function convertHTMLTOJSX(htmlCode) {
  try {
    
    var converter = new htmlToJSX({
      createClass: false,
    });
    var output = converter.convert(htmlCode);
    return output;

  } catch (error) {
    console.error('Error Converting htmltojsx:', error);
    return "error"; // Return the original code in case of an error
  }
}

// Example usage:
const htmlCode = `
<!-- Hello world -->
<div class="awesome" style="border: 1px solid red">
  <label for="name">Enter your name: </label>
  <input type="text" id="name" />
</div>
<p>Enter your HTML here</p>
`;

const convertedCode = convertHTMLTOJSX(htmlCode);
console.log(convertedCode);
