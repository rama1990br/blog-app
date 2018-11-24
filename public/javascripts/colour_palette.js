function ColourPalette(el) {
  this.el = el;
  this.colourBase = this.el.getElementsByClassName('colour-base')[0];
  this.colourButtons = this.el.getElementsByClassName('colour-buttons')[0];
  this.colourButtons.addEventListener('click', this.mixColour.bind(this));
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function convertrgbToHex(baseColor) {
  var rgbValues = baseColor.substring(4, baseColor.length -1).split(',');
  return rgbToHex(parseInt(rgbValues[0],10), parseInt(rgbValues[1],10), parseInt(rgbValues[2], 10));
}

function mixHexColors(c1, c2) {
  var hexStr = (parseInt(c1, 16) + parseInt(c2, 16)).toString(16);
  while (hexStr.length < 6) { hexStr = '0' + hexStr; } // Zero pad.
  return hexStr;
}

ColourPalette.prototype = {
  mixColour: function(evt) {
    var button = evt.target;
    var buttonStyles = window.getComputedStyle(button);
    var buttonColor = buttonStyles.getPropertyValue('background-color');
    var baseColorStyles = window.getComputedStyle(this.colourBase);
    var baseColor = baseColorStyles.getPropertyValue('background-color');
    var color1 = convertrgbToHex(baseColor);
    var color2 = convertrgbToHex(buttonColor);
    var mixedColor = mixHexColors(color1.replace('#', '0x'), color2.replace('#','0x'));
    this.colourBase.setAttribute('style', 'background-color:' + '#'+mixedColor)  
  }	
};