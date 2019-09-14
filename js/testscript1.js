function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  console.log(cname+" "+cvalue)
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user=getCookie("theme");
  if (user != "") {
    swapStyleSheet("css/"+user+"_Theme.css")
  } else if (user == ""){
     user = "Base";
     if (user != "" && user != null) {
       console.log("loaded!")
       setCookie("theme", user, 24000000);
       swapStyleSheet("css/"+user+"_Theme.css")
     }
  }
}
