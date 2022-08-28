function randomNum(minNum,maxNum){ 
  switch(arguments.length){ 
    case 1: 
      return parseInt(Math.random()*minNum+1,10); 
      break; 
    case 2: 
      return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
      break; 
    default: 
      return 0; 
      break; 
    } 
}

function setVisible(element,visible) {
  if(visible) {
    element.removeAttribute("hidden");
  } else {
    element.hidden=true;
  }
}

var reqerr = {"div": document.getElementById("main-er"), "error": document.getElementById("main-er-tx"), "error-text": document.getElementById("main-er-ds")};

var sp = new URLSearchParams(window.location.search);
if(sp.has("state")) {
  if(sp.has("error")) {
    
  }
  
}
  //https://www.microsoft.com/auth?code=M.R3_BAY.b1d7013a-538a-be5c-ebab-0aaede9795fa&state=EC_MS_AUTH_REDIRECT_RANDOMID
