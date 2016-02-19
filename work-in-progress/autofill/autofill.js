document.addEventListener("DOMContentLoaded", function(event) { 
  if(!!document.querySelector("input[name='postusername']")) {document.querySelector("input[name='postusername']").value=document.querySelector("#editpost > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(2)").innerHTML.split(" <")[0];}
});
