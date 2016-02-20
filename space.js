$(document).ready(function() {
  spaceJSExec();
});

function spaceJSExec() {
  prefillEditUsername();
}

/* function declarations start */

function prefillEditUsername() {
  /* prefills the moderator edit interface with the username of the currently logged in user.  */
  if(!!document.querySelector("input[name='postusername']")) {
    document.querySelector("input[name='postusername']").value = document.querySelector("#editpost > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(2)").innerHTML.split(" <")[0];
  }
}

/* function declarations end */
