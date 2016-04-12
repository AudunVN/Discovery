# Discovery
A repository with various in-progress and/or finished code snippets for discoverygc.com and discoverygc.com/wiki, and an issue tracker for things I need to look into or fix.

Most of these fixes are ideally intended for inclusion into the relevant MyBB templates and CSS at a later point; the custom JS and CSS is mostly here because I have to find and test the fixes in the first place before I can look into integrating them if any of the fixes below are wanted/required.

space.js and space.css contain the latest versions of code from the work-in-progress directories. Testing can be done by copy-pasting the contents of space.js into your browser console, or by using a plugin for embedding custom JS such as [Custom JS for Chrome](https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija?hl=en) or [Greasemonkey for Firefox](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/); the script is available online at "http://471.no/Discovery/space.js" for this purpose.

Current changes from unpatched discoverygc.com:
- Adds a fixed navbar for wide viewports (off by default; opt-in)
- Adds a quick-search form that replaces the "Search" button
- Moves toggle sidebar button next to user profile dropdown, adds toggle navbar button
- Adds a "Rules" link
- Shortens navbar names
- Fixes footer layout issues
- Fixes post editor layout issues
- Fixes user status icon alignment
- Improves text/background contrast in many locations (e.g. the shoutbox)
- Fixes the user profile dropdown avatar scaling issue
- Fixes progress bar wrapping issues
- Prefills the mod/admin/dev post editing username option with your own username
- Fixes Gecko/Firefox rendering issue where the forum container would disappear outside the viewport
- Makes better use of available viewport space
- Adds "show signature" input to new reply form
- Plus some minor layout alignment changes here and there to get things to line up a bit better.

Screenshots (03.04.2016):
- http://img.mrawr.net/DGCWebTest_08.png
- http://img.mrawr.net/DGCWebTest_09.png
- http://img.mrawr.net/DGCWebTest_10.png
- http://img.mrawr.net/DGCWebTest_11.png
