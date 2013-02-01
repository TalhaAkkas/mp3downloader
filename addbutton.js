
var url = window.location;
var scr = document.createElement('a');
scr.href="http://2conv.com/?url=" +url;
scr.title = "Download";
scr.target = "";
scr.innerHTML = scr.title;
document.getElementById('watch-headline-title').appendChild(scr);