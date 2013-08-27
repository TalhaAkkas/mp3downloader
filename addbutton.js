var url = window.location;
url = String(url)
url = url.replace('&', '%26');
var scr = document.createElement('a');
scr.href="http://2conv.com/?url=" +url ;
scr.title = "Download";
scr.target = "";
scr.innerHTML = scr.title;
document.getElementById('watch-headline-title').appendChild(scr);
document.getElementById('masthead-upload-button-group').appendChild(scr);