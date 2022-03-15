var token = "9fcbe021-b470-4f6b-9d96-6e70f26d30d1";
var username = "PEANUTNOTCASHEW";
var httpRequest = new XMLHttpRequest();
/* Resources:
https://spacetraders.io/docs/guide
https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started
https://blog.replit.com/getting-started-with-the-spacetraders-API-on-replit
*/

//handles response
httpRequest.onreadystatechange = handleResponse;
function handleResponse() {
  try {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        document.getElementById("readyToPlay").innerHTML = httpRequest.responseText;
      } else {
        document.getElementById("readyToPlay").innerHTML = 'There was a problem with the request.';
      }
    }
  } catch (e) {
    document.getElementById("readyToPlay").innerHTML = 'Caught Exception: ' + e.description;
  }
}

function readyToPlay() {
  if (!httpRequest) {
    alert('Giving up :( Cannot create an XMLHTTP instance');
    return false;
  }

  httpRequest.open('GET', 'https://api.spacetraders.io/game/status');
  httpRequest.send();
}
