document.addEventListener("DOMContentLoaded", function(event) {
  var ccLogo = document.getElementById("cc-logo");

  var productContainer1 = document.getElementById("product-1-container");
  var maleModel = document.getElementById("male-model");
  var productTitle1 = document.getElementById("product-1-title");

  var productContainer2 = document.getElementById("product-2-container");
  var customModel = document.getElementById("custom-model");
  var productTitle2 = document.getElementById("product-2-title");

  var productContainer3 = document.getElementById("product-3-container");
  var femaleModel = document.getElementById("female-model");
  var productTitle3 = document.getElementById("product-3-title");


  setTimeout(function() {
    ccLogo.classList.add("fade-in");
  }, 3800);

  productContainer1.onmouseenter = function() {
    maleModel.style.transform = "scale(1.5)";
    maleModel.style.marginTop = "-13px";
  };
  productContainer1.onmouseleave = function() {
    maleModel.style.transform = "scale(1.0)";
    maleModel.style.marginTop = "40px";
  };
  productTitle1.onmouseenter = function() {
    maleModel.style.transform = "scale(1.5)";
    maleModel.style.marginTop = "-13px";
  };
  productTitle1.onmouseleave = function() {
    maleModel.style.transform = "scale(1.0)";
    maleModel.style.marginTop = "40px";
  };

  productContainer2.onmouseenter = function() {
    customModel.style.transform = "scale(1.5)";
    customModel.style.marginTop = "-10px";
  };
  productContainer2.onmouseleave = function() {
    customModel.style.transform = "scale(1.0)";
    customModel.style.marginTop = "42px";
  };
  productTitle2.onmouseenter = function() {
    customModel.style.transform = "scale(1.5)";
    customModel.style.marginTop = "-10px";
  };
  productTitle2.onmouseleave = function() {
    customModel.style.transform = "scale(1.0)";
    customModel.style.marginTop = "42px";
  };

  productContainer3.onmouseenter = function() {
    femaleModel.style.transform = "scale(1.5)";
    femaleModel.style.marginTop = "-10px";
  };
  productContainer3.onmouseleave = function() {
    femaleModel.style.transform = "scale(1.0)";
    femaleModel.style.marginTop = "42px";
  };
  productTitle3.onmouseenter = function() {
    femaleModel.style.transform = "scale(1.5)";
    femaleModel.style.marginTop = "-10px";
  };
  productTitle3.onmouseleave = function() {
    femaleModel.style.transform = "scale(1.0)";
    femaleModel.style.marginTop = "42px";
  };

});
