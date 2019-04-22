// align center with JS
document.addEventListener("DOMContentLoaded", function () {
  function getEle (id) {
    return document.getElementById(id);
  }
  function centerBox () {
    var divBox = getEle('box');
    var widthDivBox = divBox.offsetWidth;
    var heightDivBox = divBox.offsetHeight;
    var positionX = (window.innerWidth - widthDivBox) / 2;
    var positionY = (window.innerHeight - heightDivBox) / 2;
    divBox.style.cssText = `left:${positionX}px; top:${positionY}px`;
  }
  centerBox();
  window.addEventListener("resize", centerBox)
})
