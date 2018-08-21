<<<<<<< HEAD
var tabLinks;
var tabPanels;
 
 tabLinks = document.getElementById("wrap").getElementsByClassName("button");
    tabPanels = document.getElementsByClassName("content");

        displayPanel(tabLinks[0]);
        for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].onclick = function() { 
      displayPanel(this); 
      return false;
    }
        
}
function displayPanel(tabToActivate) {
    // go through all the <li> elements
    for (var i = 0; i < tabLinks.length; i++) {
        if (tabLinks[i] == tabToActivate) {
      // if it's the one to activate, change its class
            tabLinks[i].classList.add("activated");
              // and display the corresponding panel
      tabPanels[i].style.display = "block";
        } else {
      // remove the active class on the link
          tabLinks[i].classList.remove("activated");
                // hide the panel
      tabPanels[i].style.display = "none";
        }
  }
}

var i = 0;

// var imgArray = ["Images/katy-belcher-557477-unsplash.jpg",
//  "Images/rawpixel-653764-unsplash.jpg", "Images/sds300.jpg", "Images/luke-porter-581054-unsplash.jpg",
//  "Images/markus-spiske-518966-unsplash.jpg"];
var timer = 6000;

var imgArray = [
  {"source":"images/katy-belcher-557477-unsplash.jpg", 
  "alt":"Urban Art", 
  "title":"Photo by Katy Belcher on Unsplash"}, 
  {"source":"images/rawpixel-653764-unsplash.jpg", 
  "alt":"Teamwork in the office", 
  "title":"Photo by rawpixel on Unsplash"}, 
  {"source":"images/sds300.jpg", 
  "alt":"Man and Woman beside mainframe computer", 
  "title":"Man and Woman beside mainframe computer"}, 
  {"source":"images/luke-porter-581054-unsplash.jpg", 
  "alt":"Man hiking in snowy forest", 
  "title":"Photo by Luke Porter on Unsplash"}, 
  {"source":"images/markus-spiske-518966-unsplash.jpg", 
  "alt":"Computer code filling terminal screen", 
  "title":"Photo by Markus Spiske on Unsplash"}
];

function changeImg(){
  
    $('#montague').fadeOut(500,function(){
        $(this).attr('src',imgArray[i].source).hide().fadeIn(2000);
        $(this).attr('alt',imgArray[i].alt).hide().fadeIn(2000);
        $(this).attr('title',imgArray[i].title).hide().fadeIn(2000);
        });

  // Check If Index Is Under Max
  if(i < imgArray.length - 1){
    // Add 1 to Index
    i++; 
  } else { 
    // Reset Back To O
    i = 0;
  }

  // Run function every x seconds
  setTimeout("changeImg()", timer);
}
window.onload=changeImg;

// <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system,
//  BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto,
//   &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;
//   border-radius:3px" href="https://unsplash.com/@katybelcher?utm_medium=referral&amp;
//   utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer"
//    title="Download free do whatever you want high-resolution photos from Katy Belcher">
//    <span style="display:inline-block;padding:2px 3px">
//    <svg xmlns="http://www.w3.org/2000/svg" 
//    style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white" 
//    viewBox="0 0 32 32"><title>unsplash-logo</title>
//    <path 
//    d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 
//    4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2
//    .3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7
//    .5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z">
// </path></svg></span><span style="display:inline-block;padding:2px 3px">Katy Belcher</span></a>

// <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system,
//  BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto,
//   &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;
//   border-radius:3px" href="https://unsplash.com/@lukeporter?utm_medium=referral&amp;
//   utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" 
//   title="Download free do whatever you want high-resolution photos from Luke Porter"><span style="display:
//   inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:
//   relative;vertical-align:middle;top:-1px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path 
//   d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.
//   9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.
//   6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 
//   7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z">
// </path></svg></span><span style="display:inline-block;padding:2px 3px">Luke Porter</span></a>

// Photo by rawpixel on Unsplash (teamwork)
// Photo by Katy Belcher on Unsplash
// Photo by Luke Porter on Unsplash
=======
var tabLinks;
var tabPanels;
 
 tabLinks = document.getElementById("wrap").getElementsByClassName("button");
    tabPanels = document.getElementsByClassName("content");

        displayPanel(tabLinks[0]);
        for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].onclick = function() { 
      displayPanel(this); 
      return false;
    }
        
}
function displayPanel(tabToActivate) {
    // go through all the <li> elements
    for (var i = 0; i < tabLinks.length; i++) {
        if (tabLinks[i] == tabToActivate) {
      // if it's the one to activate, change its class
            tabLinks[i].classList.add("activated");
              // and display the corresponding panel
      tabPanels[i].style.display = "block";
        } else {
      // remove the active class on the link
          tabLinks[i].classList.remove("activated");
                // hide the panel
      tabPanels[i].style.display = "none";
        }
  }
}

var i = 0;

// var imgArray = ["Images/katy-belcher-557477-unsplash.jpg",
//  "Images/rawpixel-653764-unsplash.jpg", "Images/sds300.jpg", "Images/luke-porter-581054-unsplash.jpg",
//  "Images/markus-spiske-518966-unsplash.jpg"];
var timer = 6000;

var imgArray = [
  {"source":"images/katy-belcher-557477-unsplash.jpg", 
  "alt":"Urban Art", 
  "title":"Photo by Katy Belcher on Unsplash"}, 
  {"source":"images/rawpixel-653764-unsplash.jpg", 
  "alt":"Teamwork in the office", 
  "title":"Photo by rawpixel on Unsplash"}, 
  {"source":"images/sds300.jpg", 
  "alt":"Man and Woman beside mainframe computer", 
  "title":"Man and Woman beside mainframe computer"}, 
  {"source":"images/luke-porter-581054-unsplash.jpg", 
  "alt":"Man hiking in snowy forest", 
  "title":"Photo by Luke Porter on Unsplash"}, 
  {"source":"images/markus-spiske-518966-unsplash.jpg", 
  "alt":"Computer code filling terminal screen", 
  "title":"Photo by Markus Spiske on Unsplash"}
];

function changeImg(){
  
    $('#montague').fadeOut(500,function(){
        $(this).attr('src',imgArray[i].source).hide().fadeIn(2000);
        $(this).attr('alt',imgArray[i].alt).hide().fadeIn(2000);
        $(this).attr('title',imgArray[i].title).hide().fadeIn(2000);
        });

  // Check If Index Is Under Max
  if(i < imgArray.length - 1){
    // Add 1 to Index
    i++; 
  } else { 
    // Reset Back To O
    i = 0;
  }

  // Run function every x seconds
  setTimeout("changeImg()", timer);
}
window.onload=changeImg;

// <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system,
//  BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto,
//   &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;
//   border-radius:3px" href="https://unsplash.com/@katybelcher?utm_medium=referral&amp;
//   utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer"
//    title="Download free do whatever you want high-resolution photos from Katy Belcher">
//    <span style="display:inline-block;padding:2px 3px">
//    <svg xmlns="http://www.w3.org/2000/svg" 
//    style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white" 
//    viewBox="0 0 32 32"><title>unsplash-logo</title>
//    <path 
//    d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 
//    4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2
//    .3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7
//    .5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z">
// </path></svg></span><span style="display:inline-block;padding:2px 3px">Katy Belcher</span></a>

// <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system,
//  BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto,
//   &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;
//   border-radius:3px" href="https://unsplash.com/@lukeporter?utm_medium=referral&amp;
//   utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" 
//   title="Download free do whatever you want high-resolution photos from Luke Porter"><span style="display:
//   inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:
//   relative;vertical-align:middle;top:-1px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path 
//   d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.
//   9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.
//   6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 
//   7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z">
// </path></svg></span><span style="display:inline-block;padding:2px 3px">Luke Porter</span></a>

// Photo by rawpixel on Unsplash (teamwork)
// Photo by Katy Belcher on Unsplash
// Photo by Luke Porter on Unsplash
>>>>>>> 3e635d556f27d53e1eb58965ff19310e742ccd0c
// Photo by Markus Spiske on Unsplash