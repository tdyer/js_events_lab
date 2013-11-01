function init() {
  var arrImages = new Array(3);

  arrImages[0] = document.getElementById("image1");
  arrImages[1] = document.getElementById("image2");
  arrImages[2] = document.getElementById("image3");

  var objOutput = document.getElementById("output");
  var strHtml = "<ul>";

  for (var i = 0; i < arrImages.length; i++) {
    strHtml += "<li>image" + (i+1) + 
    ": height=" + arrImages[i].height + 
    ", width=" + arrImages[i].width + 
    ", style.height=" + arrImages[i].style.height + 
    ", style.width=" + arrImages[i].style.width + 
    "<\/li>";
  }

  strHtml += "<\/ul>";

  objOutput.innerHTML = strHtml;
};

