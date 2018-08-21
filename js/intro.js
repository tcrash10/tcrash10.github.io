
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

