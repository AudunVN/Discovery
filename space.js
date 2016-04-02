$(document).ready(function() {
  spaceJSExec();
});

function spaceJSExec() {
	bindHelperFunctions();
	prefillEditUsername();
	resizeHandler();
	loadCSS();
	tempNavbarEdits();
}

function tempNavbarEdits() {
	startSearchField();
	document.querySelector(".menu li:nth-child(4) a").innerHTML = '<i style="font-size: 12px;" class="fa fa-rocket fa-fw"></i> Download';
	document.querySelector(".menu li:nth-child(5) a").innerHTML = '<i style="font-size: 12px;" class="fa fa-group fa-fw"></i> Events';
	$('<li id="nav-rules"> <a href="http://discoverygc.com/forums/showthread.php?tid=2334"><i style="font-size: 12px;" class="fa fa-exclamation-triangle fa-fw"></i> Rules</a></li>').insertAfter(".menu li:nth-child(5)");
	$("#playerslink_popup > div:nth-child(4)").remove();
}

function loadCSS() {
	var cssRefObject=document.createElement("link");
	cssRefObject.setAttribute("rel", "stylesheet");
	cssRefObject.setAttribute("type", "text/css");
	cssRefObject.setAttribute("href", "http://471.no/Discovery/space.css");
	document.querySelector("head").appendChild(cssRefObject);
}

/* function declarations start */

function resizeHandler() {
	/* run resize handler once onload */
	onResize();
	$(window).smartresize(function(){
    	onResize();
	});
}

function startSearchField() {
	document.querySelector("#nav-search").innerHTML = "<form method='post' action='search.php'><input onkeydown='if (event.keyCode == 13) {this.form.submit();}' name='keywords' type='text' placeholder='Search...'></input></form>";
}

function onResize() {
	scaleNavbar();
}

function prefillEditUsername() {
  /* prefills the moderator edit interface with the username of the currently logged in user.  */
  if(!!document.querySelector("input[name='postusername']")) {
    document.querySelector("input[name='postusername']").value = document.querySelector("#editpost > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(2)").innerHTML.split(" <")[0];
  }
}

function scaleNavbar() {
  /* adds css classes for   */
  if(document.querySelector(".menu").offsetHeight > 1.25*document.querySelector(".menu ul li").offsetHeight) {
    $("body").removeClass("navbarNotWrapped");
  } else {
    $("body").addClass("navbarNotWrapped");
  }
}

function bindHelperFunctions() {
	(function($,sr){
	  // debouncing function from John Hann
	  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
	  var debounce = function (func, threshold, execAsap) {
	  var timeout;
	  
	  return function debounced () {
	    var obj = this, args = arguments;
	    function delayed () {
	        if (!execAsap)
	  	  func.apply(obj, args);
	        timeout = null;
	    };
	  
	    if (timeout)
	        clearTimeout(timeout);
	    else if (execAsap)
	        func.apply(obj, args);
	  
	    timeout = setTimeout(delayed, threshold || 100);
	  };
	  }
	  // smartresize 
	  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };
	
	})(jQuery,'smartresize');
}
/* function declarations end */
