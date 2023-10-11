
const htmlToJSX = require('htmltojsx');

window["libConvertHTMLTOJSX"]  = function(htmlCode) {
  try {
    
    var converter = new htmlToJSX({
      createClass: false,
      outputClassName: 'AwesomeComponent'
    });
    var output = converter.convert(htmlCode);
    return output;

  } catch (error) {
    console.error('Error Converting htmltojsx:', error);
    return "error"; // Return the original code in case of an error
  }
}
