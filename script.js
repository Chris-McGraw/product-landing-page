document.addEventListener("DOMContentLoaded", function(event) {
  var productContainer1 = document.getElementById("product-1-container");
  var maleModel = document.getElementById("male-model");

  var productContainer2 = document.getElementById("product-2-container");
  var femaleModel2 = document.getElementById("female-model-2");

  var productContainer3 = document.getElementById("product-3-container");
  var femaleModel = document.getElementById("female-model");

  productContainer1.onmouseenter = function() {
    maleModel.style.transform = "scale(1.5)";
    maleModel.style.bottom = "53px";
  };
  productContainer1.onmouseleave = function() {
    maleModel.style.transform = "scale(1.0)";
    maleModel.style.bottom = "0";
  };

  productContainer2.onmouseenter = function() {
    femaleModel2.style.transform = "scale(1.5)";
    femaleModel2.style.bottom = "53px";
  };
  productContainer2.onmouseleave = function() {
    femaleModel2.style.transform = "scale(1.0)";
    femaleModel2.style.bottom = "0";
  };

  productContainer3.onmouseenter = function() {
    femaleModel.style.transform = "scale(1.5)";
    femaleModel.style.bottom = "53px";
  };
  productContainer3.onmouseleave = function() {
    femaleModel.style.transform = "scale(1.0)";
    femaleModel.style.bottom = "0";
  };

});
